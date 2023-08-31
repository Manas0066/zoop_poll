import React from 'react'
import "./pollresult.css"
function pollresult() {
  return (
    <>
       
       <div className="poll-page-1">
        <div className="poll-box-result">
          <div className="poll-question-result">
            <div className="poll-question-box">Here is your question ?</div>
          </div>
          <div className="poll-options">

          <button className='poll-option'>Option 1</button>
          <button  className='poll-option'>Option 2</button>
          <button  className='poll-option'>Option 3</button>

          </div>  

         <div className="vote-number">100k Votes</div>

        </div>

       
          <div className="post"><button className='post-button'>Vote</button></div>
        
      </div>
       
    </>
  )
}

export default pollresult
