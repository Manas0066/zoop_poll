import React from 'react'
import "./pollgraph.css"
function pollgraph() {
  return (
    <>
       <div className="poll-page-2">
        <div className="poll-box-graph">
          <div className="poll-question-graph">
            <div className="poll-question-box-graph">Here is your question ?</div>
          </div>
          <div className="poll-options-graph">

          <button className='poll-option-graph'>Option 1</button><span className='percent-option1'>50%</span>
          <div className="option1-poll-percent"></div>
          <button  className='poll-option-graph'>Option 2</button><span className='percent-option2'>25%</span>
          <div className="option2-poll-percent"></div>
          <button  className='poll-option-graph'>Option 3</button><span className='percent-option3'>25%</span>
          <div className="option3-poll-percent"></div>

          </div>  

         <div className="vote-number">100k Votes</div>

        </div>

       
          <div className="post"><button className='post-button'>End Poll</button></div>
        
      </div>
    </>
  )
}

export default pollgraph
