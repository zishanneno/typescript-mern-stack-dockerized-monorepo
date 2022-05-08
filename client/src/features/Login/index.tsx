import { useEffect } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RootState, useAppDispatch } from "src/redux/store";
import { login, logout } from "src/redux/actions/auth";
import loginImg from "src/assets/login.png";
import "./index.css";

const Login = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isLoggedIn, loginFailed } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isLoggedIn) {
      message.success(t("login.message.success"));
      setTimeout(() => {
        return navigate("/home");
      }, 3000);
    } else if (location.pathname !== "/login") {
      return navigate("/login");
    } else if (loginFailed) {
      dispatch(logout());
      message.error(t("login.message.failure"));
    }
  }, [navigate, dispatch, t, isLoggedIn, location.pathname, loginFailed]);

  const handleSubmit = (e: any) => {
    dispatch(login(e.username, e.password));
  };

  return (
    <div>
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img src={loginImg} style={{ position: "relative" }} alt="login" />
          </div>
          <div className="loginForm">
            <h2>{t("login.title")}</h2>
            <Form
              initialValues={{ remember: false }}
              onFinish={handleSubmit}
              className="login-form"
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: t("login.username.validationMessage"),
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder={t("login.username.placeholder")}
                  autoComplete="off"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: t("login.password.validationMessage"),
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder={t("login.password.placeholder")}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>{t("login.rememberMe")}</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="/">
                  {t("login.passwordReset")}
                </a>
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  {t("login.buttonLabel")}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
