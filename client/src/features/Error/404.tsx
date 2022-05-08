import { Result, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = (props: any) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Result
        status="404"
        title={t("404.title")}
        subTitle={t("404.message")}
        extra={
          <Button
            type="primary"
            onClick={() => {
              navigate("/home");
            }}
          >
            {t("404.buttonLabel")}
          </Button>
        }
      />
    </>
  );
};

export default NotFound;
