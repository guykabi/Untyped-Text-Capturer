
chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    "title": "Copy Captured Text",
    "contexts": ["all"],
    "id": "capturedT"
  });


  //Onboarding page
  
  // if (reason === 'install') {
  //   chrome.tabs.create({
  //     url: "cuptured.html"
  //   });
  // }

});





chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if(request.message === 'Start') 
         sendResponse('OK')
  }
) 

function ensureSendMessage(tabId, message, callback){ 
  chrome.tabs.sendMessage(tabId, {ping: true}, function(response){ 

    if(response && response.pong) { // Content script ready
      chrome.tabs.sendMessage(tabId, message, callback);
    }
     else { // No listener on the other end
      console.log("Injecting script programmatically");
      chrome.scripting.executeScript({
        target:{tabId,allFrames: true}, 
        files:["contentScript.js"]}, function(){
        if(chrome.runtime.lastError) {
          console.error(chrome.runtime.lastError);
          throw Error("Unable to inject script into tab " + tabId);
        }
        // OK, now it's injected and ready
        chrome.tabs.sendMessage(tabId, message, callback);
      });

    }
    
  });

}


chrome.contextMenus.onClicked.addListener(function(info, tab){
  ensureSendMessage(tab.id, {copy: "Copy"});
});




