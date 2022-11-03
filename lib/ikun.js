import basketball from "./basketball.js";
import basketballInvert from "./basketball-invert";
import tie from "./tieShanKao.js";
import tieInvert from "./tieShanKaoInvert.js";
import { succeed, failed } from "./states";

let busy = false;

function clearLines(height) {
  process.stdout.moveCursor(0, -height - 1);
  process.stdout.clearLine(height + 1);
}

function formatMsg(text, width) {
  let lineLeft = width - text.length;
  let formatLine;
  if (lineLeft < 0) {
    formatLine = text;
  } else {
    lineLeft = Math.floor(lineLeft / 2);
    let side = "";
    for (let i = 0; i < lineLeft; i++) {
      side += ".";
    }
    formatLine = `${side}${text}${side}`;
  }
  return formatLine;
}

function ikun(text = "loading", frames) {
  let started = false;
  let cnt = 0;
  const lines = frames[0].split("\n");
  const height = lines.length;
  const width = lines[0].length;

  if (busy) {
    return;
  } else {
    busy = true;
  }

  const interval = setInterval(() => {
    if (started) {
      clearLines(height);
    } else {
      started = true;
    }
    cnt = cnt >= frames.length ? 0 : cnt;
    process.stdout.write(frames[cnt++] + "\n");
    const formatLine = formatMsg(text, width);
    process.stdout.write(formatLine + "\n");
  }, 100);

  function exit() {
    if (!interval) return;
    clearInterval(interval);
    interval = null;
    // clearLines(height);
    busy = false;
  }

  return {
    succeed(msg = '!! succeed !!') {
      exit();
      process.stdout.write(succeed + "\n");
      process.stdout.write(formatMsg(msg, width) + "\n");
    },
    failed(msg = '!! failed !!') {
      exit();
      process.stdout.write(failed + "\n");
      process.stdout.write(formatMsg(msg, width) + "\n");
    },
  };
}

export function ikunBasketball(text = "loading") {
  return ikun(text, basketball);
}

export function ikunDance(text = "loading") {
  return ikun(text, tie);
}
export function ikunDanceInvert(text = "loading") {
  return ikun(text, tieInvert);
}

export function ikunBasketballInvert(text = "loading") {
  return ikun(text, basketballInvert);
}
