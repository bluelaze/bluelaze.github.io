import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "BKGalMgr",
  description: "BKGalMgr——Galgame本地管理软件的官方网站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
