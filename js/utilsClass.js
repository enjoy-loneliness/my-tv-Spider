export const utilsClassFun = classFunName => {
  let spider = new classFunName();

  async function init(cfg) {
    await spider.init(cfg);
  }

  async function home(filter) {
    return await spider.home(filter);
  }

  async function homeVod() {
    return await spider.homeVod();
  }

  async function category(tid, pg, filter, extend) {
    return await spider.category(tid, pg, filter, extend);
  }

  async function detail(id) {
    return await spider.detail(id);
  }

  async function play(flag, id, flags) {
    return await spider.play(flag, id, flags);
  }

  async function search(wd, quick) {
    return await spider.search(wd, quick);
  }

  async function proxy(segments, headers) {
    return await spider.proxy(segments, headers);
  }

  const __jsEvalReturn = () => {
    return {
      init: init,
      home: home,
      homeVod: homeVod,
      category: category,
      detail: detail,
      play: play,
      search: search,
      proxy: proxy,
    };
  };

  return { spider, __jsEvalReturn };
};
