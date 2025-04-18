import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "customize-edit-category-general",

  initialize() {
    withPluginApi("0.8.14", (api) => {
      // admin-only component customization temporarily disabled
    });
  },
};
