const copying = async(text) =>{
    try{
        await navigator.clipboard.writeText(text)
    }catch{
        alert('Text Captured - Failed to copy');
    }
   
  }
  
export const isFocus = () =>{
    
    let activeElement = document.activeElement.tagName.toLowerCase();
   
    let elements = ['input','textarea','div','ntp-app'];
  
    let output = elements.indexOf(activeElement) < 0  ? false : true
   
    return {output,activeElement}                 
  }
  
  
export const capturedText = (text) =>{
    
    if(text.length && isFocus().output){
        copying(text)
        return ''
    }
  
  }