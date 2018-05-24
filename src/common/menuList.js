const menuList = {};

//烟花爆竹-企业
menuList.menuData3 = [
  {
    name: '烟花爆竹统计',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      // {
      //   name: '烟花爆竹生产统计',
      //   path: 'proStatistics',
      // },
      {
        name: '烟花爆竹仓储统计',
        path: 'stockStatistics',
      },
      {
        name:'test',
        path:'test'
      }
      // {
      //   name: '烟花爆竹运输统计',
      //   path: 'traStatistics',
      // },
      // {
      //   name: '烟花爆竹销售统计',
      //   path: 'saleStatistics',
      // },
      // {
      //   name: '烟花爆竹销毁统计',
      //   path: 'desStatistics',
      // }
    ],
  },
  {
    name: '烟花爆竹管理',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '烟花爆竹生产登记信息',
        path: 'fireProduct',
      },
      {
        name: '烟花爆竹仓储登记信息',
        path: 'fireStock',
      },
      {
        name: '烟花爆竹运输登记信息',
        path: 'fireTransport',
      },
      {
        name: '烟花爆竹销售登记',
        path: 'fireSales',
      },
      {
        name: '烟花爆竹销毁登记',
        path: 'fireDestroy',
      },
    ],
  },
  {
    name: '文档说明',
    icon: 'form',
    path: 'doc',
    hideInMenu: true,
    children: [
      {
        name: '说明',
        path: 'document',
      },
    ],
  },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

//一企一档
menuList.menuData1 = [
  {
    name: '烟花爆竹统计',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      // {
      //   name: '企业注册数量统计',
      //   path: 'coStatistics',
      // },
      // {
      //   name: '按监管行业分布统计',
      //   path: 'industryDistribution',
      // },
      {
        name: '库存统计',
        path: 'stockStatistics',
      }
      // {
      //   name: '按所在地区分布统计',
      //   path: 'monitor1',
      // },
      // {
      //   name: '按重大危险源等级统计',
      //   path: 'monitor2',
      // },
      // {
      //   name: '三无企业按地区分布统计',
      //   path: 'monitor3',
      // },
    ],
  },
  {
    name: '注册信息审核',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '烟花爆竹生产登记信息',
        path: 'fireProduct',
      },
      {
        name: '烟花爆竹仓储登记信息',
        path: 'fireStock',
      },
      {
        name: '烟花爆竹运输登记信息',
        path: 'fireTransport',
      },
      {
        name: '烟花爆竹销售登记',
        path: 'fireSales',
      },
      {
        name: '烟花爆竹销毁登记',
        path: 'fireDestroy',
      },
      {
        name: '注册信息初审',
        path: 'initial-registration',
      },
      {
        name: '注册信息复核',
        path: 'review-registration',
      },
    ],
  },
  {
    name: '文档说明',
    icon: 'form',
    path: 'doc',
    hideInMenu: true,
    children: [
      {
        name: '说明',
        path: 'document',
      },
    ],
  },
  // {
  //   name: '表单页',
  //   icon: 'form',
  //   path: 'form',
  //   children: [
  //     {
  //       name: '基础表单',
  //       path: 'basic-form',
  //     },
  //     {
  //       name: '分步表单',
  //       path: 'step-form',
  //     },
  //   ],
  // },
  // {
  //   name: '列表页',
  //   icon: 'table',
  //   path: 'list',
  //   children: [
  //     {
  //       name: '查询表格',
  //       path: 'table-list',
  //     },
  //     {
  //       name: '标准列表',
  //       path: 'basic-list',
  //     },
  //     {
  //       name: '卡片列表',
  //       path: 'card-list',
  //     },
  //   ],
  // },
  // {
  //   name: '详情页',
  //   icon: 'profile',
  //   path: 'profile',
  //   children: [
  //     {
  //       name: '基础详情页',
  //       path: 'basic',
  //     },
  //     {
  //       name: '高级详情页',
  //       path: 'advanced',
  //       authority: 'admin',
  //     },
  //   ],
  // },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];

menuList.menuData2 = [
  {
    name: '企业统计汇总2',
    icon: 'dashboard',
    path: 'dashboard',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '按监管行业分布统计',
        path: 'industryDistribution',
      },
      {
        name: '企业注册数量统计',
        path: 'coStatistics',
      },
      // {
      //   name: '按所在地区分布统计',
      //   path: 'monitor1',
      // },
      // {
      //   name: '按重大危险源等级统计',
      //   path: 'monitor2',
      // },
      // {
      //   name: '三无企业按地区分布统计',
      //   path: 'monitor3',
      // },
    ],
  },
  {
    name: '注册信息审核',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '注册信息初审',
        path: 'initial-registration',
      },
      {
        name: '注册信息复核',
        path: 'review-registration',
      },
    ],
  },
  {
    name: '文档说明',
    icon: 'form',
    path: 'doc',
    children: [
      {
        name: '引用说明',
        path: 'document',
      },
    ],
  },
  // {
  //   name: '表单页',
  //   icon: 'form',
  //   path: 'form',
  //   children: [
  //     {
  //       name: '基础表单',
  //       path: 'basic-form',
  //     },
  //     {
  //       name: '分步表单',
  //       path: 'step-form',
  //     },
  //   ],
  // },
  // {
  //   name: '列表页',
  //   icon: 'table',
  //   path: 'list',
  //   children: [
  //     {
  //       name: '查询表格',
  //       path: 'table-list',
  //     },
  //     {
  //       name: '标准列表',
  //       path: 'basic-list',
  //     },
  //     {
  //       name: '卡片列表',
  //       path: 'card-list',
  //     },
  //   ],
  // },
  // {
  //   name: '详情页',
  //   icon: 'profile',
  //   path: 'profile',
  //   children: [
  //     {
  //       name: '基础详情页',
  //       path: 'basic',
  //     },
  //     {
  //       name: '高级详情页',
  //       path: 'advanced',
  //       authority: 'admin',
  //     },
  //   ],
  // },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    hideInMenu: true,  // 隐藏该条
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];


//模块类目
menuList.moduleColumn = [
  {
    name: '烟花爆竹（企业端）',
    menu: menuList.menuData3,
    icon: 'icon-one',
    selected:true
  },
  {
    name: '烟花爆竹（政府端）',
    menu: menuList.menuData2,
    icon: 'icon-two',
  },
  // {
  //   name: '行政执法',
  //   menu: menuList.menuData2,
  //   icon: 'icon-three',
  // },
  // {
  //   name: '职业健康',
  //   menu: menuList.menuData2,
  //   icon: 'icon-four',
  // },
  // {
  //   name: '重大危险源',
  //   menu: menuList.menuData2,
  //   icon: 'icon-five',
  // },
  // {
  //   name: '安全标准化',
  //   menu: menuList.menuData2,
  //   icon: 'icon-six',
  // },
  // {
  //   name: '教育培训',
  //   menu: menuList.menuData2,
  //   icon: 'icon-seven',
  //   color: 'unSelected',
  // },
  // {
  //   name: '诚信管理',
  //   menu: menuList.menuData2,
  //   icon: 'icon-eight',
  //   color: 'unSelected',
  // },
  // {
  //   name: '危化品登记',
  //   menu: menuList.menuData2,
  //   icon: 'icon-nine',
  //   color: 'unSelected',
  // },
  // {
  //   name: '事故管理',
  //   menu: menuList.menuData2,
  //   icon: 'icon-ten',
  //   color: 'unSelected',
  // },
  // {
  //   name: '应急管理',
  //   menu: menuList.menuData2,
  //   icon: 'icon-eleven',
  //   color: 'unSelected',
  // },
  // {
  //   name: '应急值守',
  //   menu: menuList.menuData2,
  //   icon: 'icon-twelve',
  //   color: 'unSelected',
  // },
  // {
  //   name: '信用信息共享',
  //   menu: menuList.menuData2,
  //   icon: 'icon-thirteen',
  //   color: 'unSelected',
  // },
  // {
  //   name: '电子监察',
  //   menu: menuList.menuData2,
  //   icon: 'icon-fourteen',
  //   color: 'unSelected',
  // },
  // {
  //   name: '安全知识库',
  //   menu: menuList.menuData2,
  //   icon: 'icon-fifteen',
  //   color: 'unSelected',
  // },
  // {
  //   name: '通知公告',
  //   menu: menuList.menuData2,
  //   icon: 'icon-sixteen',
  //   color: 'unSelected',
  // },
  // {
  //   name: '监控监测',
  //   menu: menuList.menuData2,
  //   icon: 'icon-seventeen',
  //   color: 'unSelected',
  // },
  // {
  //   name: '中介机构',
  //   menu: menuList.menuData2,
  //   icon: 'icon-eighteen',
  //   color: 'unSelected',
  // },
];

menuList.menuData = [
  {
    name: 'test',
    icon: 'dashboard',
    path: 'dashboard',
    children: [
      {
        name: '分析页',
        path: 'analysis',
      },
      {
        name: '监控页',
        path: 'monitor',
      },
      {
        name: '工作台',
        path: 'workplace',
        // hideInBreadcrumb: true,
        // hideInMenu: true,
      },
    ],
  },
  {
    name: '表单页',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '基础表单',
        path: 'basic-form',
      },
      {
        name: '分步表单',
        path: 'step-form',
      },
      {
        name: '高级表单',
        authority: 'admin',
        path: 'advanced-form',
      },
    ],
  },
  {
    name: '列表页',
    icon: 'table',
    path: 'list',
    children: [
      {
        name: '查询表格',
        path: 'table-list',
      },
      {
        name: '标准列表',
        path: 'basic-list',
      },
      {
        name: '卡片列表',
        path: 'card-list',
      },
      {
        name: '搜索列表',
        path: 'search',
        children: [
          {
            name: '搜索列表（文章）',
            path: 'articles',
          },
          {
            name: '搜索列表（项目）',
            path: 'projects',
          },
          {
            name: '搜索列表（应用）',
            path: 'applications',
          },
        ],
      },
    ],
  },
  {
    name: '详情页',
    icon: 'profile',
    path: 'profile',
    children: [
      {
        name: '基础详情页',
        path: 'basic',
      },
      {
        name: '高级详情页',
        path: 'advanced',
        authority: 'admin',
      },
    ],
  },
  {
    name: '结果页',
    icon: 'check-circle-o',
    path: 'result',
    children: [
      {
        name: '成功',
        path: 'success',
      },
      {
        name: '失败',
        path: 'fail',
      },
    ],
  },
  {
    name: '异常页',
    icon: 'warning',
    path: 'exception',
    children: [
      {
        name: '403',
        path: '403',
      },
      {
        name: '404',
        path: '404',
      },
      {
        name: '500',
        path: '500',
      },
      {
        name: '触发异常',
        path: 'trigger',
        hideInMenu: true,
      },
    ],
  },
  {
    name: '账户',
    icon: 'user',
    path: 'user',
    authority: 'guest',
    children: [
      {
        name: '登录',
        path: 'login',
      },
      {
        name: '注册',
        path: 'register',
      },
      {
        name: '注册结果',
        path: 'register-result',
      },
    ],
  },
];


module.exports = menuList;
