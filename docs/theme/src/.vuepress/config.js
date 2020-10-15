const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./navBar");
const sideBarConfig = require("./sideBar");

module.exports = config({
  title: "vuepress-theme-hope",
  description: "A light vuepress theme",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#46bd87",
      appleStatusBarColor: "black",
      appleIcon: "/assets/icon/appleIcon152.png",
      msTileImage: "/assets/icon/msIcon144.png",
      msTileColor: "#ffffff",
    },
  },

  temp: "./node_modules/.temp",
  dest: "./dist",

  extraWatchFiles: [".vuepress/navBar.js", ".vuepress/sideBar.js"],

  locales: {
    "/zh/": {
      title: "vuepress-theme-hope",
      description: "一个轻量的 vuepress 主题",
    },
  },

  themeConfig: {
    logo: "/logo.svg",
    nav: navBarConfig.en,
    sidebar: sideBarConfig.en,
    author: "Mr.Hope",
    iconPrefix: "vuepress-",

    locales: {
      "/zh/": {
        nav: navBarConfig.zh,
        sidebar: sideBarConfig.zh,
      },
    },

    markdown: {
      enableAll: true,
    },

    comment: {
      type: "valine",
      appId: "ENQC8OAX6E76OUB07ODFfUHm-gzGzoHsz",
      appKey: "2JK4ezJDqxPTF7JLn5Wk6i8y",
    },

    footer: {
      display: true,
      copyright: "MIT Licensed | Copyright © 2019-present Mr.Hope",
    },

    algolia: {
      apiKey: "4deb442097fb6a05638adf10ef86e222",
      indexName: "mrhope_vuepress-theme",
    },

    hostname: "https://vuepress-theme.mrhope.site/",

    repo: "https://github.com/mister-hope/vuepress-theme-hope",
    repoDisplay: false,
    docsDir: "docs/theme/src",
  },
});
