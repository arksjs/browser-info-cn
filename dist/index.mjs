var tridentMap = {
    '4.0': 8,
    '5.0': 9,
    '6.0': 10,
    '7.0': 11
};
// 其他浏览器标识判断
var browserRules = [
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
];
// 浏览器中文别名
var browserAlias = {
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
};

var winMap = (function () {
    var map = {};
    [
        ['nt 5.0', '2000'],
        ['2000', '2000'],
        ['nt 5.1', 'XP'],
        ['xp', 'XP'],
        ['nt 5.2', '2003'],
        ['2003', '2003'],
        ['nt 6.0', 'Vista'],
        ['vista', 'Vista'],
        ['nt 6.1', '7'],
        ['7', '7'],
        ['nt 6.2', '8'],
        ['8', '8'],
        ['nt 6.3', '8.1'],
        ['8.1', '8.1'],
        ['nt 10.0', '10'],
        ['nt 6.4', '10'],
        ['10.0', '10'],
        ['arm', 'RT']
    ].forEach(function (_a) {
        var v1 = _a[0], v2 = _a[1];
        map["windows ".concat(v1)] = "Windows ".concat(v2);
    });
    return map;
})();
var linuxMap = {
    harmonyos: 'HarmonyOS',
    android: 'Android',
    linux: 'Linux'
};
var systemRules = [
    ['win32', winMap],
    ['windows', winMap],
    ['ipad', 'iOS'],
    ['iphone', 'iOS'],
    ['macintosh', 'macOS'],
    ['macIntel', 'macOS'],
    ['mac', 'macOS'],
    ['linux', linuxMap],
    ['x11', 'Unix']
];

/**
 * 通过 User-Agent 获取浏览器及其设备信息
 * @param ua navigator.userAgent
 * @returns
 */
function getBrowserInfo(ua) {
    var system = ''; // 系统
    var platform = ''; // 平台 ios android pc 等
    var browser = ''; // 浏览器
    var browserVersion = ''; // 浏览器版本
    var lua = ua.toLowerCase();
    for (var i = 0; i < systemRules.length; i++) {
        var key = systemRules[i][0];
        var value = systemRules[i][1];
        if (lua.indexOf(key) !== -1) {
            if (typeof value === 'string') {
                system = value;
            }
            else {
                for (var j in value) {
                    if (value.hasOwnProperty(j) && lua.indexOf(j) > -1) {
                        system = value[j];
                        break;
                    }
                }
            }
            break;
        }
    }
    var matches;
    if (system.indexOf('Windows') === 0) {
        platform = 'Windows';
    }
    else {
        platform = system;
    }
    if (platform === 'iOS') {
        if ((matches = /(Version)[\/]([\d.]+)/i.exec(ua))) {
            system += " ".concat(parseInt(matches[2]));
        }
        else if ((matches = /(OS)[\s]([\d_]+)/i.exec(ua))) {
            system += " ".concat(parseInt(matches[2]));
        }
    }
    else if (platform === 'Android') {
        if ((matches = /(Android)[\s]([\d.]+)/i.exec(ua))) {
            system += " ".concat(parseInt(matches[2]));
        }
    }
    if (platform === 'Windows') {
        // 在window系统下
        if ((matches = /(trident)[\/]([\w.]+)/i.exec(ua))) {
            // IE 8+ 通过Trident判断
            browser = 'IE';
            browserVersion = (tridentMap[matches[2]] || 11).toString();
        }
        else if ((matches = /ms(ie)\s([\w.]+)/i.exec(ua))) {
            browser = 'IE';
            browserVersion = parseInt(matches[2]).toString();
        }
    }
    if (!browser) {
        // 没有判断到ie
        for (var i = 0; i < browserRules.length; i++) {
            var _a = browserRules[i], reg = _a.reg, name_1 = _a.name;
            var verIndex = 2;
            if (typeof reg === 'string') {
                matches = new RegExp('(' + reg.toLowerCase() + ')[\\/\\s]([\\w.]+)', 'i').exec(ua);
            }
            else {
                matches = reg.exec(ua);
                verIndex = 1;
            }
            if (matches) {
                browser = name_1 || matches[1] || '';
                matches[verIndex] &&
                    (browserVersion = parseInt(matches[verIndex]).toString());
                break;
            }
        }
    }
    var browserCN = browser;
    var browserVersionCN = browserVersion;
    if (!browser) {
        browser = 'unknown';
        browserVersion = browser;
    }
    else {
        if (browserAlias[browser.toLowerCase()]) {
            // 转为中文别名
            browserCN =
                browserAlias[browser.toLowerCase()];
        }
        if (browserVersion) {
            browserVersion = "".concat(browser, " ").concat(browserVersion);
            browserVersionCN = "".concat(browserCN, " ").concat(browserVersionCN);
        }
        else {
            browserVersion = browser;
            browserVersionCN = browserCN;
        }
    }
    return {
        platform: platform,
        system: system,
        browser: browser,
        browserVersion: browserVersion,
        browserCN: browserCN,
        browserVersionCN: browserVersionCN
    };
}

export { getBrowserInfo as default };
