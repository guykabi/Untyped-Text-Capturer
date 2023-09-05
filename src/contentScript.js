import { capturedText, isFocus, regex } from "./utils/utils";

let textStore = "";

chrome.runtime.sendMessage({ message: "Start" }, (response) => {
  if (response !== "OK") return;

  window.addEventListener("keydown", function (e) {
    if (!isFocus().output || isFocus().activeElement === "div") {
      let valid = regex(e.key);
     
      if (valid === 'valid') {
        textStore += e.key;
      } else if (valid === "delete" && textStore.length > 0) {
        textStore = textStore.slice(0, -1);
      }
    }
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.ping) {
    sendResponse({ pong: true });
    return;
  }

  if (request.copy === "Copy" && textStore.length) {
    textStore = capturedText(textStore);
  }
});
