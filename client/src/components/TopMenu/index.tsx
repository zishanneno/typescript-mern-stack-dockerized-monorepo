import { useDispatch } from "react-redux";
import { UserOutlined, DownOutlined, LogoutOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Button } from "antd";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { logout } from "src/redux/actions/auth";
import { useTranslation } from "react-i18next";
import { ItemType } from "antd/lib/menu/hooks/useItems";

const TopMenu = (props: any) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const handleHeaderMenuSelect: MenuClickEventHandler = ({ key }) => {
    switch (key) {
      case "logout":
        dispatch(logout());
        break;
      default:
    }
  };

  const menuItems: ItemType[] = [
    { key: "logout", label: t("topMenu.signout"), icon: <LogoutOutlined /> },
  ];

  const menu = <Menu onClick={handleHeaderMenuSelect} items={menuItems} />;

  return (
    <Dropdown overlay={menu} placement="bottomRight">
      <Button type="link">
        <UserOutlined />
        {props.currentUser.name} <DownOutlined />
      </Button>
    </Dropdown>
  );
};

export default TopMenu;
