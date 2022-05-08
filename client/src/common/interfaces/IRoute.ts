import React from "react";

export interface IRoute {
  path: string;
  element: string | React.ReactNode;
  title?: string;
  icon?: string | React.ReactNode;
  exact?: boolean;
  hide?: boolean;
  containParam?: boolean;
  menuGroup?: boolean;
  routes?: Array<IRoute>;
  params?: Array<Param>;
}

export interface Param {
  id: string;
  value: string;
}
