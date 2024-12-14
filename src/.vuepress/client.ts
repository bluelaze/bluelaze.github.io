import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { defineClientConfig } from "vuepress/client";

export default defineClientConfig({
  setup: () => {
    setupTransparentNavbar({ type: "homepage" });
  },
});