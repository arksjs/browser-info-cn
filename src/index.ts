import { browserRules, browserAlias } from './browser'
import { systemRules } from './system'

/**
 * 通过 User-Agent 获取浏览器及其设备信息
 * @param ua navigator.userAgent
 * @returns
 */
export default function getBrowserInfo(ua: string) {
  let system = '' // 系统
  let platform = '' // 平台 ios android pc 等
  let browser = '' // 浏览器
  let browserVersion = '' // 浏览器版本

  const lua = ua.toLowerCase()

  for (let i = 0; i < systemRules.length; i++) {
    const key = systemRules[i][0]
    const value = systemRules[i][1]

    if (lua.indexOf(key) !== -1) {
      if (typeof value === 'string') {
        system = value
      } else {
        for (let j in value) {
          if (value.hasOwnProperty(j) && lua.indexOf(j) > -1) {
            system = value[j]
            break
          }
        }
      }
      break
    }
  }

  if (system === 'Windows 10') {
    /**
     * See: https://learn.microsoft.com/zh-cn/microsoft-edge/web-platform/how-to-detect-win11
     */
    try {
      ;(navigator as any).userAgentData
        .getHighEntropyValues(['platformVersion'])
        .then((ua: any) => {
          if ((navigator as any).userAgentData.platform === 'Windows') {
            const majorPlatformVersion = parseInt(
              ua.platformVersion.split('.')[0]
            )
            if (majorPlatformVersion >= 13) {
              // 'Windows 11 or later'
              system = 'Windows 11'
            } else if (majorPlatformVersion > 0) {
              // 'Windows 10'
            } else {
              // 'Before Windows 10'
            }
          } else {
            // 'Not running on Windows'
          }
        })
    } catch (e) {}
  }

  if (system.indexOf('Windows') === 0) {
    platform = system.indexOf('Windows Phone') === 0 ? system : 'Windows'
  } else {
    platform = system
  }

  let matches

  if (platform === 'iOS') {
    if ((matches = /(Version)[\/]([\d.]+)/i.exec(ua))) {
      system += ` ${parseInt(matches[2])}`
    } else if ((matches = /(OS)[\s]([\d_]+)/i.exec(ua))) {
      system += ` ${parseInt(matches[2])}`
    }
  } else if (platform === 'Android') {
    if ((matches = /(Android)[\s]([\d.]+)/i.exec(ua))) {
      system += ` ${parseInt(matches[2])}`
    }
  }

  if (system.indexOf('Windows') === 0) {
    // 在window系统下
    if ((matches = /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i.exec(ua))) {
      // IE 8+ 通过Trident判断
      browser = 'IE'
      browserVersion = parseInt(matches[1]).toString()
    } else if ((matches = /ms(ie)\s([\w.]+)/i.exec(ua))) {
      browser = 'IE'
      browserVersion = parseInt(matches[2]).toString()
    }
  }

  if (!browser) {
    // 没有判断到ie
    for (let i = 0; i < browserRules.length; i++) {
      const { reg, name } = browserRules[i]
      let verIndex = 2

      if (typeof reg === 'string') {
        matches = new RegExp(
          '(' + reg.toLowerCase() + ')[\\/\\s]([\\w.]+)',
          'i'
        ).exec(ua)
      } else {
        matches = reg.exec(ua)
        verIndex = 1
      }

      if (matches) {
        browser = name || matches[1] || ''
        matches[verIndex] &&
          (browserVersion = parseInt(matches[verIndex]).toString())
        break
      }
    }
  }

  let browserCN = browser
  let browserVersionCN = browserVersion

  if (!browser) {
    browser = 'unknown'
    browserVersion = browser
  } else {
    if (browserAlias[browser.toLowerCase() as keyof typeof browserAlias]) {
      // 转为中文别名
      browserCN =
        browserAlias[browser.toLowerCase() as keyof typeof browserAlias]
    }

    if (browserVersion) {
      browserVersion = `${browser} ${browserVersion}`
      browserVersionCN = `${browserCN} ${browserVersionCN}`
    } else {
      browserVersion = browser
      browserVersionCN = browserCN
    }
  }

  return {
    platform,
    system,
    browser,
    browserVersion,
    browserCN,
    browserVersionCN
  }
}
