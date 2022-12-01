/**
 * 通过 User-Agent 获取浏览器及其设备信息
 * @param ua navigator.userAgent
 * @returns
 */
export default function getBrowserInfo(ua: string): {
    platform: string;
    system: string;
    browser: string;
    browserVersion: string;
    browserCN: string;
    browserVersionCN: string;
};
