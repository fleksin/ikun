import basketball from "./basketball.js";
import tie from "./tieShanKao.js";

let busy = false;

function ikun(text = "loading", type = "tieShanKao") {
  let started = false;
  let cnt = 0;
  let frames = tie;
  if (type === "basketball") {
    frames = basketball;
  }
  function clearLines() {
    process.stdout.moveCursor(0, -17);
    process.stdout.clearLine(17);
  }

  if (busy) {
    return;
  } else {
    busy = true;
  }

  const interval = setInterval(() => {
    if (started) {
      clearLines();
    } else {
      started = true;
    }
    cnt = cnt >= frames.length ? 0 : cnt;
    process.stdout.write(frames[cnt++] + "\n");
    let lineLeft = 40 - text.length;
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
    process.stdout.write(formatLine + "\n");
  }, 100);
  return () => {
    clearInterval(interval);
    clearLines();
  };
}

export function ikunBasketball(text = "loading") {
  return ikun(text, "basketball");
}

export function ikunDance(text = "loading") {
  return ikun(text, "tieShanKao");
}
