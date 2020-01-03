module.exports = {
  base: '/',
  title: 'Pagsmile API Docs',
  description: 'Pagsmile Docs for Developers',

  // 多语言支持
  locales: {
    // 键名是该语言所属的子路径
    '/': {
      lang: 'Home'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Pagsmile API Docs',
      description: 'Pagsmile Docs for Developers'
    },
    '/cn/': {
      lang: 'zh-CN',
      title: 'Pagsmile开发文档',
      description: 'Pagsmile接入API文档'
    }
  },

  themeConfig: {
    locales: {
      "/en/": {
        label: "English",
        nav: [
          {
            text: "API Reference",
            link: "/en/reference/"
          },
          {
            text: "Changelog",
            link: "/en/changelog.md"
          }
        ],
        sidebar: {
          "/en/guides/": [
            {
              title: "",
              collapsable: false
            },
            {
              title: "Online Payments",
              collapsable: true,
              children: ["one", "two"]
            },
            {
              title: "Notifications",
              collapsable: true,
              children: ["one", "two"]
            }
          ],
          "/en/reference/": [
            {
              title: "",
              collapsable: false
            },
            {
              title: "Payments",
              collapsable: true,
              children: ["create-payment"]
            },
            {
              title: "Notifications",
              collapsable: true,
              children: ["ipn"]
            }
          ],
        }
      },
      "/cn/": {
        label: "简体中文",
        nav: [
          {
            text: "接口",
            link: "/cn/reference/"
          },
          {
            text: "更新日志",
            link: "/cn/changelog.md"
          }
        ],
        sidebar: {
          "/cn/guides/": [
            {
              title: "",
              collapsable: false
            },
            {
              title: "Online Payments",
              collapsable: true,
              children: ["one", "two"]
            },
            {
              title: "Notifications",
              collapsable: true,
              children: ["one", "two"]
            }
          ],
          "/cn/reference/": [
            {
              title: "",
              collapsable: false
            },
            {
              title: "Payments",
              collapsable: true,
              children: ["create-payment"]
            },
            {
              title: "Notifications",
              collapsable: true,
              children: ["ipn"]
            }
          ],
        }
      }
    }
  }
}
