import React from 'react'
import {createRoot} from 'react-dom/client'
import  '../style.css'
import {PiCursorClickDuotone} from 'react-icons/pi'


const Popup = () => {  
   
  return (
    
      <div id='mainDiv'>
        <h2>Blind typed ?</h2> 
        <div className='details'>
          <h3>We got you!</h3>
          <b>
            <div>
            Choose desired input
            </div>
          </b>
          <b>
            <div>
            Right click &nbsp;&nbsp;  
            <PiCursorClickDuotone color='black' size={10}/>
            </div>
          </b>
          <b>
            <div>Copy captured text</div>
          </b>
        </div>
      </div>

  )
}

const root = createRoot(document.getElementById('react-target'));
root.render(<Popup/>)