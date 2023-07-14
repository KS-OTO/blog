import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/pages/": [
    {
      text: "前端",
      icon: "laptop-code",
      prefix: "01.前端/",
      collapsible: true,
      children: [
        {
          text: "CSS",
          icon: "laptop-code",
          prefix: "10.CSS/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "JavaScript",
          icon: "laptop-code",
          prefix: "20.JavaScript/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Vue",
          icon: "laptop-code",
          prefix: "50.Vue/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "树莓派",
      icon: "laptop-code",
      prefix: "02.树莓派/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "技术",
      icon: "laptop-code",
      prefix: "05.技术/",
      collapsible: true,
      children: [
        {
          text: "技术文档",
          icon: "laptop-code",
          prefix: "05.技术文档/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "技术教程",
          icon: "laptop-code",
          prefix: "10.技术教程/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Git工具",
          icon: "laptop-code",
          prefix: "15.Git工具/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Nodejs",
          icon: "laptop-code",
          prefix: "20.Nodejs/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Linux安全",
          icon: "laptop-code",
          prefix: "25.Linux安全/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "博客建设",
      icon: "laptop-code",
      prefix: "20.博客建设/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "实用技巧",
      icon: "laptop-code",
      prefix: "50.实用技巧/",
      collapsible: true,
      children: [
        {
          text: "VSCode",
          icon: "laptop-code",
          prefix: "02.VSCode/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "Windows修改",
          icon: "laptop-code",
          prefix: "05.Windows修改/",
          collapsible: true,
          children: "structure",
        },
      ],
    },
    {
      text: "其它",
      icon: "laptop-code",
      prefix: "90.其它/",
      collapsible: true,
      children: "structure",
    },
    {
      text: "收藏夹",
      icon: "laptop-code",
      prefix: "95.收藏夹/",
      collapsible: true,
      children: "structure",
    },
  ],
});
