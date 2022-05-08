import { Content } from "antd/lib/layout/layout";
import { MagicSpinner } from "react-spinners-kit";
import { useTranslation } from "react-i18next";

const Loader = () => {
  const { t } = useTranslation();

  return (
    <Content
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <MagicSpinner size={80} color="#1890ff" />
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          {t("loading")}
        </div>
      </div>
    </Content>
  );
};

export default Loader;
