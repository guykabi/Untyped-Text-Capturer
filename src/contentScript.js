import { capturedText, isFocus } from "./utils/utils";

let textStore = ''


chrome.runtime.sendMessage({message:'Start'}, response =>{
  
  if(response !== 'OK') return 
              
   window.addEventListener('keypress', function (e) {

     if(!isFocus().output || isFocus().activeElement === 'div'){
         textStore += e.key
      }
      
    }); 
      
   }
  )  



chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 
  if(request.ping){ 
      sendResponse({pong: true}); 
      return;
  }    

  
   if(request.copy === 'Copy' && textStore.length) {
     textStore = capturedText(textStore)
   }

}); 

 