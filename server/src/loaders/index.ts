import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";
import mongooseLoader from "./mongoose";
import Logger from "./logger";

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info("🚀 DB loaded and connected!");

  const userModel = {
    name: "userModel",
    model: require("@/models/user").default,
  };

  await dependencyInjectorLoader({
    mongoConnection,
    models: [userModel],
  });
  Logger.info("🚀 Dependency Injector loaded!");

  await expressLoader({ app: expressApp });
  Logger.info("🚀 Express loaded!");
};
