import { Service, Inject } from "typedi";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { randomBytes } from "crypto";
import { IUser, IUserInputObject } from "shared";
import config from "@/config";

@Service()
export default class AuthService {
  constructor(
    @Inject("userModel") private userModel: Models.UserModel,
    @Inject("logger") private logger
  ) {}

  public async SignUp(
    userInputDTO: IUserInputObject
  ): Promise<{ user: IUser; token: string }> {
    try {
      const salt = randomBytes(32);

      const hashedPassword = await argon2.hash(userInputDTO.password, { salt });
      this.logger.silly("✅ Hashed password");

      const userRecord = await this.userModel.create({
        ...userInputDTO,
        salt: salt.toString("hex"),
        password: hashedPassword,
      });
      this.logger.silly("✅ Created user db record");

      const token = this.generateToken(userRecord);
      this.logger.silly("✅ Generated JWT");

      if (!userRecord) {
        throw new Error("⛔️ Unable to create user");
      }

      const user = userRecord;
      Reflect.deleteProperty(user, "password");
      Reflect.deleteProperty(user, "salt");
      return { user, token };
    } catch (e) {
      this.logger.error(e);
      throw e;
    }
  }

  public async SignIn(
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string }> {
    const userRecord = await this.userModel.findOne({ email });
    if (!userRecord) {
      throw new Error("⛔️ Unable to find user");
    }

    this.logger.silly("ℹ️  Checking password");
    const validPassword = await argon2.verify(userRecord.password, password);

    if (validPassword) {
      this.logger.silly("✅ Password is valid!");

      const token = this.generateToken(userRecord);
      this.logger.silly("✅ Generated JWT");

      const user = userRecord;
      Reflect.deleteProperty(user, "password");
      Reflect.deleteProperty(user, "salt");
      return { user, token };
    } else {
      throw new Error("⛔️ Invalid Password");
    }
  }

  private generateToken(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setHours(today.getHours() + 8);

    this.logger.silly(`ℹ️  Signing JWT for userId: ${user._id}`);
    return jwt.sign(
      {
        _id: user._id,
        role: user.role,
        name: user.name,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
      { algorithm: config.jwtAlgorithm }
    );
  }
}
