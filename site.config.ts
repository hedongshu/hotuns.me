export const siteConfig = {
  author: 'hotuns',
  title: 'Hotuns - Site',
  description: 'Hotuns 的个人网站；记录文章；一些工具；',
  lang: 'zh-CN',
}

export const subNavLinks = [
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Life',
    path: '/life',
  },
  {
    title: 'Record',
    path: '/record',
  },
]

export const navLinks = [
  {
    title: '应用',
    path: '/apps',
    icon: 'i-icon-park-outline-blocks-and-arrows',
  },
  {
    title: '文章',
    path: '/blog',
    icon: 'i-icon-park-outline-align-text-right-one',
  },
  {
    title: '标签',
    path: '/tags',
    icon: 'i-icon-park-outline-tag-one',
  },
  {
    title: '搜索',
    path: '/search',
    icon: 'i-icon-park-outline-search',
  },
  {
    title: '关于',
    path: '/',
    icon: 'i-icon-park-outline-grinning-face-with-open-mouth',
  },

]

export const socialLinks = [
  // {
  //   title: '掘金',
  //   path: 'https://juejin.cn/user/3826745248595550',
  //   icon: 'i-simple-icons-juejin',
  // },
  {
    title: 'Bilibili',
    path: 'https://space.bilibili.com/39941520',
    icon: 'i-simple-icons-bilibili',
  },
  {
    title: '知乎',
    path: 'https://www.zhihu.com/people/bu-shi-dong-xi-9',
    icon: 'i-simple-icons-zhihu',
  },
  {
    title: 'Github',
    path: 'https://github.com/hedongshu',
    icon: 'i-icon-park-outline-github',
  },
]

export const appsList = [
  {
    name: '工具',
    content: [
      {
        name: 'inpaint',
        desc: 'AI修复图片，去掉你图片中你不想要部分；使图片更高清；',
        path: 'https://app.hotuns.me/inpaint/',
      },
    ],
  },
  {
    name: '代码',
    content: [
      {
        name: 'miniapp-coupons',
        desc: '一个领外卖优惠券的小程序，用来赚取一点点佣金',
        path: 'https://github.com/hedongshu/miniapp-coupons',
      },
      {
        name: 'go-markdown-book',
        desc: '将 github仓库，或者本地文件夹 内的Markdown文件发布成可以web访问的book',
        path: 'https://github.com/hedongshu/go-markdown-book',
      },
      {
        name: 'egret-eui-demo',
        desc: 'egret游戏的一个案例',
        path: 'https://github.com/hedongshu/egret-eui-demo',
      },
      {
        name: 'bulk-delete-chatGPT',
        desc: 'bulk delete chatGPT conversations',
        path: 'https://github.com/qcrao/bulk-delete-chatGPT'
      },
      {
        name: '我的ps作品',
        desc: '一些很多年以前的ps练习',
        path: 'https://github.com/hedongshu/ps-showroom'
      },
      {
        name: 'vitesse-antd-admin',
        desc: '基于vitesse，使用antd-vue的开发模版',
        path: 'https://github.com/hedongshu/vitesse-antd-admin',
      },
    ],
  },
]
