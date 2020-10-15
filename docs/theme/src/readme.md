---
home: true
icon: homefill
title: vuepress-theme-hope
heroImage: /logo.svg
heroText: vuepress-theme-hope
tagline: A light Vuepress theme
action:
  - text: Get Started 💡
    link: /guide/

  - text: Config 🛠
    link: /config/

features:
  - title: Pageviews and comments
    details: Start pageview statistics and comment support with Valine and Vssue
    link: /guide/feature/comment/

  - title: Article information display
    details: Add author, writing date, reading time, word count and other information to your article
    link: /guide/feature/page-info/

  - title: Markdown Enhance
    details: Add align, sup/sub script, footnote, tex, flowchart and mark support in markdown
    link: /guide/feature/markdown/

  - title: Blog support
    details: Just date, tags and category to your articles, then article, tag, category and timeline list will be auto generated
    link: /guide/feature/blog/

  - title: Article Encryption
    details: Encrypt you article based on path and folders, so that only the one you want could see them
    link: /guide/feature/blog/

  - title: Custom theme color
    details: Supports custom theme colors and allows users to switch between preset theme colors
    link: /guide/feature/themecolor/

  - title: Dark Mode
    details: Switch between light and dark modes freely
    link: /guide/feature/darkmode/

  - title: Sitemap generation and SEO enhancement
    details: The theme can automatically generate a Sitemap for your website, and optimize the resulting web page for search engines.
    link: /guide/feature/seoAndSitemap/

  - title: More new features
    details: Including icon support, path navigation, footer support, fullscreen button, blog homepage, etc.
    link: /guide/feature/

  - title: PWA support
    details: The built-in PWA plugin will make your website more like an APP.
    link: /config/plugin/pwa/

  - title: TS support
    details: Turn on Typescript support for your Vuepress
    link: /guide/feature/typescript/

footer: MIT Licensed | Copyright © 2019-present Mr.Hope
copyrightText: false
---

## Use themes

You can use [vuepress-theme-hope template](https://github.com/Mister-Hope/vuepress-theme-hope-template) directly to start your vuepress journey.

### Install

```bash
npm i -D vuepress-theme-hope
```

Or

```bash
yarn add -D vuepress-theme-hope
```

### Usage

```js
// .vuepress/config.js
const { config } = require("vuepress-theme-hope");

module.exports = config({
  // your config here
});
```

::: tip
The purpose of introducing the `config` function is to give you full hints through TS's Interface and JSDoc when you edit the configuration.

At the same time, the `config` function will also complete some default configurations for your current configuration which will pass directly to vuepress.
:::
