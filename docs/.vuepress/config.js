module.exports = {
  title: "API-Docs",
  description: "Описание API сервера веб приложения QiVisor",
  // theme: '@vuepress/theme-default',
  head: [["link", { rel: "icon", href: "images/logo_green.png" }]],
  // plugins: ["@vuepress/pwa"],
  plugins: {
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/logo_green.png',
    lastUpdated: "Последнее обновление",
    displayAllHeaders: true, // Default: false
    nav: [
      { text: "API Docs", link: "/overview/intro" }
      // {
      //     text: 'Version',
      //     items: [
      //       { text: 'v1', link: '/v1/' },
      //     ]
      // }
    ],
    sidebar: [
      {
        title: "Введение",
        collapsable: true,
        children: [
          "/overview/intro",
          "/overview/architecture",
          "/api/v1/errors"
        ]
      },
      {
        title: "Страница входа",
        collapsable: true,
        children: [
          "/api/v1/login_page/singin",
          "/api/v1/login_page/restore",
          "/api/v1/login_page/singup",
        ]
      },
      {
        title: "Страница настроек",
        collapsable: true,
        children: [
            '/api/v1/settings_page/common',
            '/api/v1/settings_page/factories',
            '/api/v1/settings_page/processes',
            '/api/v1/settings_page/units',
            '/api/v1/settings_page/products',
            '/api/v1/settings_page/states',
            '/api/v1/settings_page/users',
            '/api/v1/settings_page/alerting',
            '/api/v1/settings_page/password',
          ]
      },
      {
        title: "Страница конфигурации",
        collapsable: true,
        children: [
        ]
      },
      {
        title: "Страница мониторинга",
        collapsable: true,
        children: [
        ]
      }
    ]
  }
};
