/*
 * @File     : feifan.js
 * @Author   : jade
 * @Date     : 2024/02/06 14:58
 * @Email    : jadehh@1ive.com
 * @Software : Samples
 * @Desc     : 非凡资源 (已失效)
 */

import { VodSpider } from './vodSpider.js';
import { utilsClassFun } from './utilsClass.js';

class FeiFanSpider extends VodSpider {
  constructor() {
    super();
    this.siteUrl = 'http://cj.ffzyapi.com';
    this.remove18 = true;
    this.type_id_18 = 34;
  }

  getAppName() {
    return '非凡资源';
  }

  getName() {
    return `🥗┃非凡资源┃🥗`;
  }

  getJSName() {
    return 'feifan';
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

const { spider, __jsEvalReturn } = utilsClassFun(FeiFanSpider);

export { spider, __jsEvalReturn };
