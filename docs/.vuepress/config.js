module.exports = {
  title: "API-Docs",
  description: "Описание API сервера веб приложения QiVisor",
  head: [["link", { rel: "icon", href: "images/logo_green.png" }]],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'ru-UA', // this will be set as the lang attribute on <html>
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    logo: '/images/logo_green.png',
    lastUpdated: "Последнее обновление",
    displayAllHeaders: false, // Default: false
    nav: [
      { text: "API Docs", link: "/v1/overview/intro" },
      {
          text: 'Version',
          items: [
            { text: 'v1', link: '/v1/overview/intro' },
          ]
      }
    ],
    sidebar: [
      {
        title: "Введение",
        collapsable: true,
        children: [
          "/v1/overview/intro",
          "/v1/overview/architecture",
          "/v1/api/errors"
        ]
      },
      {
        title: "Страница входа",
        collapsable: true,
        children: [
          "/v1/api/login_page/singin",
          "/v1/api/login_page/restore",
          "/v1/api/login_page/singup",
        ]
      },
      {
        title: "Страница настроек",
        collapsable: true,
        children: [
            '/v1/api/settings_page/common',
            '/v1/api/settings_page/factories',
            '/v1/api/settings_page/processes',
            '/v1/api/settings_page/units',
            '/v1/api/settings_page/products',
            '/v1/api/settings_page/states',
            '/v1/api/settings_page/users',
            '/v1/api/settings_page/alerting',
            '/v1/api/settings_page/password',
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
