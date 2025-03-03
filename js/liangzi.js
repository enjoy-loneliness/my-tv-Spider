/*
 * @File     : liangzi.js
 * @Author   : jade
 * @Date     : 2024/1/24 9:15
 * @Email    : jadehh@1ive.com
 * @Software : Samples
 * @Desc     : 量子资源(已失效)
 */
import { VodSpider } from './vodSpider.js';
import { utilsClassFun } from './utilsClass.js';

class LiangziSpider extends VodSpider {
  constructor() {
    super();
    this.siteUrl = 'https://cj.lzcaiji.com';
    this.remove18 = true;
  }

  getAppName() {
    return '量子资源';
  }

  getName() {
    return `🐝┃量子资源┃🐝`;
  }

  getJSName() {
    return 'liangzi';
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

const { spider, __jsEvalReturn } = utilsClassFun(LiangziSpider);

export { spider, __jsEvalReturn };
