chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.text && (msg.text == "PUT_IT_ON_THE_PIZZA")) {
    v=document.getElementsByTagName('video')[0];
    v.pause();
    v.playbackRate = 0.5;
    v.play();
  }
});

