/*
 * @File     : dubo.js
 * @Author   : jade
 * @Date     : 2024/4/16 18:46
 * @Email    : jadehh@1ive.com
 * @Software : Samples
 * @Desc     :
 */
import { TianTianSpider } from './tiantian.js';
import { utilsClassFun } from './utilsClass.js';

class DuboSpider extends TianTianSpider {
  constructor() {
    super();
    this.siteUrl = 'http://v.rbotv.cn';
    this.cookie = '';
    this.extendObj = { 'extend': '类型', 'area': '地区', 'year': '年代' };
    this.parseMap = {};
  }

  getName() {
    return '🛶┃四方影视┃🛶';
  }
  getAppName() {
    return '四方影视';
  }
  getJSName() {
    return 'sifang';
  }
  getType() {
    return 3;
  }
  async init(cfg) {
    await super.init(cfg);
    this.danmuStaus = false;
  }
}

const { spider, __jsEvalReturn } = utilsClassFun(DuboSpider);

export { spider, __jsEvalReturn };
