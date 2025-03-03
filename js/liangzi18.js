/*
 * @File     : liangzi18.js
 * @Author   : jade
 * @Date     : 2024/1/24 9:15
 * @Email    : jadehh@1ive.com
 * @Software : Samples
 * @Desc     : 量子资源18+ (已失效)
 */
import { VodSpider } from './vodSpider.js';
import { utilsClassFun } from './utilsClass.js';
class Liangzi18Spider extends VodSpider {
  constructor() {
    super();
    this.siteUrl = 'https://cj.lzcaiji.com';
    this.remove18 = false;
  }

  getAppName() {
    return '量子资源18+';
  }

  getName() {
    return `🔞┃量子资源18+┃🔞`;
  }

  getJSName() {
    return 'liangzi18';
  }

  getType() {
    return 3;
  }

  async spiderInit(inReq) {
    await super.spiderInit(inReq);
  }

  async init(cfg) {
    await super.init(cfg);
    await this.spiderInit(null);
  }
}

const { spider, __jsEvalReturn } = utilsClassFun(Liangzi18Spider);

export { spider, __jsEvalReturn };
