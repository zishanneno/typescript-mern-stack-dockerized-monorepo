import * as common from "./common.json";
import * as home from "./home.json";
import * as login from "./login.json";

const en = {
  translation: {
    ...common,
    ...login,
    ...home,
  },
};

export default en;
