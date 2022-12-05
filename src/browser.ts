/**
 * 浏览器标识判断
 */
export const browserRules = [
  { reg: /MicroMessenger\/([\w\.]+).+WindowsWechat/i, name: 'Windows WeChat' },
  { reg: 'MicroMessenger', name: 'WeChat' },
  { reg: /edg(?:e|ios|a)?\/([\w\.]+)/i, name: 'Edge' },
  { reg: /\b(?:crmo|crios)\/([\w\.]+)/i, name: 'Chrome' },
  { reg: 'SogouMSE', name: 'Mobile SogouBrowser' },
  { reg: 'MQQBrowser', name: 'Mobile QQBrowser' },
  { reg: 'QQBrowser' },
  { reg: 'UCBrowser' },
  { reg: 'MiuiBrowser' },
  { reg: 'HuaweiBrowser' },
  { reg: 'HeyTapBrowser' },
  { reg: 'VivoBrowser' },
  { reg: 'SamsungBrowser' },
  { reg: 'MetaSr', name: 'SogouBrowser' },
  { reg: /ba?idubrowser[\/ ]?([\w\.]+)/i, name: 'BaiduBrowser' },
  { reg: 'baiduboxapp', name: 'BaiduBrowser' },
  { reg: 'FireFox' },
  { reg: 'Opera' },
  { reg: /Mobile.+OPR\/([\w\.]+)/i, name: 'Opera Mini' },
  { reg: 'OPR', name: 'Opera' },
  { reg: 'Chrome' },
  { reg: /version\/([\d.]+).*safari/i, name: 'Safari' },
  { reg: /lbbrowser/i, name: 'LieBaoBrowser' }
]

/**
 * 浏览器中文别名
 */
export const browserAlias = {
  'mobile sogoubrowser': '搜狗浏览器移动版',
  qqbrowser: 'QQ浏览器',
  'mobile qqbrowser': 'QQ浏览器移动版',
  sogoubrowser: '搜狗浏览器',
  wechat: '微信',
  'windows wechat': '微信Windows版',
  ucbrowser: 'UC浏览器',
  miuibrowser: 'MIUI浏览器',
  huaweibrowser: '华为浏览器',
  heytapbrowser: 'OPPO浏览器',
  vivobrowser: 'vivo浏览器',
  baidubrowser: '百度浏览器',
  liebaobrowser: '猎豹浏览器'
}
