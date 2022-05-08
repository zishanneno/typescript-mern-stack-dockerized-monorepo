import { Menu } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IRoute } from "src/common/interfaces/IRoute";
import { AppRoutes } from "src/common/routes";
import Container from "typedi";

const routesInstance = Container.get(AppRoutes);

const NavMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuRoutes: IRoute[] = routesInstance
    .routes()
    .filter((route) => route.title && !route.hide);

  const [selectedKey, setSelectedKey] = useState([""]);

  useEffect(() => {
    setSelectedKey([
      routesInstance.routes().find((route) => route.path === location.pathname)
        ?.path ||
        routesInstance
          .getRoutes(true)
          .find(
            (f) =>
              f.hide !== true &&
              f.menuGroup !== true &&
              location.pathname.includes(f.path)
          )?.path ||
        location.pathname,
    ]);
  }, [location.pathname]);

  const handleClick: MenuClickEventHandler = ({ key }) => {
    setSelectedKey([key]);
    navigate(key);
  };

  const menuItems: ItemType[] = menuRoutes.map((route) => {
    return route.routes
      ? {
          key: route.title,
          label: route.title,
          type: "group",
          children: route.routes.map((childRoute) => ({
            key: childRoute.path,
            label: childRoute.title,
            icon: childRoute.icon,
          })),
        }
      : route.hide
      ? null
      : {
          key: route.path,
          label: route.title,
          icon: route.icon,
        };
  });

  return (
    <Menu
      theme="dark"
      mode="inline"
      selectedKeys={selectedKey}
      onClick={handleClick}
      items={menuItems}
    />
  );
};

export default NavMenu;
