
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
        return ""
    }
  
  }

let regexTest = /^[\p{L}0-9\s'()\-\/\\!@#$%^&*_,.?":;{}~+=<>/\]\[/]+$/u;

export const regex = (text) => {
    
   if(regexTest.test(text) && text.length < 2 || text === 'Backspace'){
   
      if(text === 'Backspace'){
        return 'delete'
      }
      return 'valid'
    }
  }