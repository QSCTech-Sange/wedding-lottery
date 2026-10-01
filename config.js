/* =========================================================
 * 婚庆抽奖 · 配置文件（本地双击打开页面时生效）
 * ---------------------------------------------------------
 * 推荐使用 config.json（纯 JSON）：以 http/https 方式打开页面时
 * 会自动读取它；本地双击打开时浏览器会拦截读取本地 JSON，
 * 此时自动使用本 config.js 兜底，两者内容请保持一致。
 * 修改本文件后，刷新页面即可生效。
 * 也可以在页面右上角「设置」面板里修改并保存
 * （保存后优先使用页面里保存的配置；点「恢复配置文件默认值」
 *   即可重新以本文件为准）。
 * 注意：图片路径请填写相对路径（相对本 html 所在目录）。
 * ========================================================= */

window.WEDDING_CONFIG = {

  /* —— 婚礼信息（大屏顶部展示）—— */
  "婚礼标题": "杨宇昊 & 冉淼 的婚礼",
  "副标题": "喜 迎 宾 客 · 幸 运 抽 奖",
  "祝福语": "感谢各位来宾的见证，愿好运与幸福常伴左右！",

  /* —— 号码范围：从「起始」到「结束」连续编号 —— */
  "号码范围": {
    "起始": 1,
    "结束": 300
  },

  /* —— 抽奖档次：按数组顺序依次抽取 ——
   * 可自由增删档次，例如 prize3/prize2/prize1/prize0/阳光普照奖…
   *  name       : 档次名称
   *  prize      : 奖品名称（在大屏上展示）
   *  count      : 该档次总中奖人数
   *  batch      : 每次抽取人数（一次定格抽几个人）。
   *               若 count 大于 batch，本档次会分成多轮抽取，
   *               例如 count=15、batch=5，则抽 3 轮三等奖。
   *               留空或填 0 表示一次抽完（等于 count）。
   *  prizeImage : 奖品图片路径，支持多张用英文逗号分隔（如
   *               "assets/prizes/a.jpg, assets/prizes/b.jpg"），
   *               中奖后会轮播展示；不需要图片就留空 ""。 */
  "抽奖档次": [
    { "name": "三等奖", "prize": "旺旺零食大礼包", "count": 15,
      "prizeImage": "prize3/p3-1.jpg,prize3/p3-2.jpg,prize3/p3-3.jpg",
      "prizes": [ { "name": "旺旺零食大礼包", "count": 15 } ] },
    { "name": "二等奖", "prize": "咖啡杯", "count": 11, "prizeImage": "prize2/p2-1.jpg,prize2/p2-2.jpg,prize2/p2-3.jpg,prize2/p2-4.jpg,prize2/p2-5.jpg,prize2/p2-6.jpg,prize2/p2-7.jpg,prize2/p2-8.jpg,prize2/p2-9.jpg,prize2/p2-10.jpg,prize2/p2-11.jpg",
      "prizes": [
        { "name": "咖啡杯", "count": 1 },
        { "name": "电热水壶", "count": 1 },
        { "name": "泡泡玛特盲盒", "count": 1 },
        { "name": "体脂秤", "count": 1 },
        { "name": "U型枕", "count": 4 },
        { "name": "香薰机", "count": 1 },
        { "name": "小米充电宝", "count": 1 },
        { "name": "吹风机", "count": 1 }
      ] },
    { "name": "一等奖", "prize": "按摩眼罩", "count": 6, "prizeImage": "prize1/p1-1.jpg,prize1/p1-2.jpg,prize1/p1-3.jpg,prize1/p1-4.jpg,prize1/p1-5.jpg,prize1/p1-6.jpg",
      "prizes": [ { "name": "按摩眼罩", "count": 1 }, { "name": "K歌音箱", "count": 1 },
        { "name": "小米手环11", "count": 1 }, { "name": "腰部按摩仪", "count": 1 },
        { "name": "小爱触屏音箱", "count": 1 }, { "name": "TWS耳夹耳机", "count": 1 } ] },
    { "name": "特等奖", "prize": "美的空气净化器", "count": 1,  "prizeImage": "prize0/p0-1.jpg" }
  ],

  /* —— 背景音乐（循环歌单播放）——
   * 开启   : true=首次点击页面后自动开始播放
   * 音量   : 0~100
   * 歌单   : 音频文件路径数组（MP3/WAV），按顺序循环播放。
   *          把歌曲文件放进 assets/music/ 目录后填写相对路径，
   *          例如 "assets/music/haoyunlai.mp3"。
   *          可放多首（好运来、今天你要嫁给我、好日子…），
   *          播放完一首自动切下一首，播完整个歌单回到第一首。
   *          数组留空则不显示播放器。 */
  "背景音乐": {
    "开启": true,
    "音量": 11,
    "歌单": ["assets/music/haoyunlai.m4a"]
  },

  /* —— 背景照片：放新人照片，支持多张自动轮播 ——
   * 把照片放进 assets/photos/ 目录后，把文件名填进数组，
   * 例如 ["assets/photos/photo1.jpg", "assets/photos/photo2.jpg"]。
   * 留空则使用内置的喜庆红金背景图。 */
  "背景照片": ["background/bg-01.jpg", "background/bg-02.jpg", "background/bg-03.jpg", "background/bg-04.jpg", "background/bg-05.jpg", "background/bg-06.jpg", "background/bg-07.jpg", "background/bg-08.jpg", "background/bg-09.jpg", "background/bg-10.jpg", "background/bg-11.jpg", "background/bg-12.jpg", "background/bg-13.jpg", "background/bg-14.jpg", "background/bg-15.jpg", "background/bg-16.jpg", "background/bg-17.jpg", "background/bg-18.jpg", "background/bg-19.jpg"],

  /* —— 展示设置 —— */
  "展示设置": {
    "显示奖品图片": true,   // 中奖后是否轮播该档奖品图片
    "播放音效":     true,   // 抽奖音效开关
    "结束烟花":     true    // 最后一档抽完后的烟花大屏
  }

};
