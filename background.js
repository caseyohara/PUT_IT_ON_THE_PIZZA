chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, { text: "PUT_IT_ON_THE_PIZZA" }, function(){});
});

