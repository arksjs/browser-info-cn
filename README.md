# browser-info-cn

通过 User-Agent 获取浏览器及其设备信息。

聚焦于国内比较常见的浏览器和系统信息，常用于数据采集和登录信息记录。

如果追求大而全请考虑 [UAParser](https://github.com/faisalman/ua-parser-js) 。

## Usage

### 通过 CDN 方式引入

```js
<script src="https://cdn.jsdelivr.net/npm/browser-info-cn/dist/index.js"></script>
```

### 通过 NPM 方式引入

```sh
npm i browser-info-cn -S
```

在 module 中引入

```js
import BrowserInfo from 'browser-info-cn'
```

### 具体使用方式

```js
const info = BrowserInfo(navigator.userAgent)
```

### 返回的数据释义

| 字段                     | 说明                                                                       |
| ------------------------ | -------------------------------------------------------------------------- |
| platform                 | 平台，主要有 Windows, iOS, Android 等                                      |
| system                   | 系统，大体是平台+大版本号，如 Window 7, iOS 16 等                          |
| browser                  | 浏览器，如 Chrome, QQBrowser, Mobile SogouBrowser 等                       |
| browserCN                | 浏览器中文，主要针对国内的浏览器改为中文名字，如 微信，搜狗浏览器移动版 等 |
| browserVersion           | 浏览器版本，大体是浏览器+大版本号，如 Chrome 108                           |
| browserVersionNumber     | 浏览器版本号，大体是浏览器+大版本号，如 108.0.0.0                          |
| browserVersionCN         | 浏览器版本中文，同上                                                       |
| baseBrowser              | 基座浏览器，如 Chrome, Firefox, IE 等，大部分浏览器基于 Chrome             |
| baseBrowserVersion       | 基座浏览器版本，大体是浏览器+大版本号，如 Chrome 108                       |
| baseBrowserVersionNumber | 基座浏览器版本号，大体是浏览器+大版本号，如 108.0.0.0                      |
