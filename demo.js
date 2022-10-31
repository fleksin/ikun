const { ikunBasketball, ikunDance } = require("./cjs/ikun.js");

// var basketball = require("./cjs/basketball.js").default;

function sleep(m) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, m);
  });
}

(async () => {
  console.time('timer')
  console.log('Running Ikun....');
  await sleep(1660);
  console.log('全民制作人们 大家好。。。。')
  await sleep(1660);
  console.log('我是练习时长两年半的。。。。')
  await sleep(1660);
  console.log('个人练习生 蔡徐坤。。。。')
  await sleep(1660);
  console.log('喜欢唱 跳 rap 篮球。。。。')
  await sleep(1660);
  console.log('music !')
  await sleep(5000);
  const inst = ikunBasketball("loading");
  await sleep(10000);
  inst.failed("!!failed !!!!");
  await sleep(2000);
  const inst2 = ikunDance("loading");
  await sleep(4000);
  inst2.succeed("!!succeed !!!!");
  // console.timeEnd('timer')
})();

// (async () => {
//   const inst = ikunDance("loading first one");
//   await sleep(4000);
//   inst.succeed("!!succeed !!!!");
//   await sleep(2000);
//   const inst2 = ikunBasketball("loading second one");
//   await sleep(4000); 
//   inst2.failed("!!failed !!!!");
// })();
