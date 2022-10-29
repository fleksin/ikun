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
  const inst = ikunDance("loading first one");
  await sleep(4000);
  inst.succeed("!!succeed !!!!");
  await sleep(2000);
  const inst2 = ikunBasketball("loading second one");
  await sleep(4000);
  inst2.failed("!!failed !!!!");
})();
