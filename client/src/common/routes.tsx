import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { BiSitemap } from "react-icons/bi";
import { IRoute } from "./interfaces/IRoute";
import { Service } from "typedi";
import i18n from "i18next";

const Login = React.lazy(() => import("src/features/Login"));
const Home = React.lazy(() => import("src/features/Home"));
const NotFound = React.lazy(() => import("src/features/Error/404"));

@Service()
export class AppRoutes {
  routes(loggedIn: boolean = true): Array<IRoute> {
    const loginRoute = [
      {
        hide: true,
        path: loggedIn ? "/login" : "*",
        element: <Login />,
      },
    ];

    const allRoutes = [
      ...(loggedIn ? loginRoute : []),
      {
        path: "/home",
        title: i18n.t("menu.home"),
        element: <Home />,
        icon: <HomeOutlined />,
      },
      {
        path: "/menu-group",
        title: i18n.t("menu.menuGroup"),
        element: <NotFound />,
        menuGroup: true,
        routes: [
          {
            path: "/menu-group/item-1",
            title: i18n.t("menu.item1"),
            element: <NotFound />,
            icon: <BiSitemap />,
          },
          {
            path: "/menu-group/item-2",
            title: i18n.t("menu.item2"),
            element: <NotFound />,
            icon: <BiSitemap />,
            routes: [
              {
                path: "/menu-group/item-2/child",
                element: <NotFound />,
                hide: true,
              },
            ],
          },
          {
            path: "/menu-group/item-3",
            title: i18n.t("menu.item3"),
            element: <NotFound />,
            icon: <BiSitemap />,
          },
        ],
      },
      {
        hide: true,
        path: "*",
        element: <NotFound />,
      },
    ];

    return loggedIn ? allRoutes : loginRoute;
  }

  getRoutes(
    loggedIn: boolean = false,
    routes: IRoute[] = this.routes(loggedIn)
  ): IRoute[] {
    const allRoutes: IRoute[] = [];
    routes.forEach((route) => {
      allRoutes.push(route);
      if (route.routes)
        allRoutes.push(...this.getRoutes(loggedIn, route.routes));
    });
    return allRoutes;
  }
}
