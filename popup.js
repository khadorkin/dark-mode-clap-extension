import "regenerator-runtime/runtime";
import "babel-polyfill";

async function start() {
  await chrome.tabs.query(
    { active: true, currentWindow: true },
    function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { data: "start" },
        function (response) {}
      );
    }
  );
}

// chrome.tabs.onUpdated.addListener(async function (tabId, info, tab) {
//   await chrome.tabs.query(
//     { active: true, currentWindow: true },
//     function (tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         { data: "start" },
//         function (response) {}
//       );
//     }
//   );
// });

start();
