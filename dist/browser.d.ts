/**
 * 浏览器标识判断
 */
export declare const browserRules: ({
    reg: RegExp;
    name: string;
} | {
    reg: string;
    name: string;
} | {
    reg: string;
    name?: undefined;
})[];
/**
 * 浏览器中文别名
 */
export declare const browserAlias: {
    'mobile sogoubrowser': string;
    qqbrowser: string;
    'mobile qqbrowser': string;
    sogoubrowser: string;
    wechat: string;
    'windows wechat': string;
    ucbrowser: string;
    miuibrowser: string;
    huaweibrowser: string;
    heytapbrowser: string;
    vivobrowser: string;
    baidubrowser: string;
    liebaobrowser: string;
};
