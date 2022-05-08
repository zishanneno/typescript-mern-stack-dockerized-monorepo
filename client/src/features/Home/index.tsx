import { MainLayout } from "src/layouts";
import { useTranslation } from "react-i18next";

const Home = (props: any) => {
  const { t } = useTranslation();

  return (
    <MainLayout
      content={null}
      title={t("home.title")}
      subtitle={t("home.subtitle")}
    ></MainLayout>
  );
};

export default Home;
