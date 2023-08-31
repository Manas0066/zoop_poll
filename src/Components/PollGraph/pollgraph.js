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

          <button className='poll-option-graph'>Option 1</button>
          <div className="option-flex-with-percent"><div className="option1-poll-percent"></div><div className="percent-option1">50%</div></div>
          <button  className='poll-option-graph'>Option 2</button>
          <div className="option-flex-with-percent"><div className="option2-poll-percent"></div><div className="percent-option2">25%</div></div>
          <button  className='poll-option-graph'>Option 3</button>
          <div className="option-flex-with-percent"><div className="option3-poll-percent"></div><div className="percent-option3">25%</div></div>

          </div>  

         <div className="vote-number">100k Votes</div>

        </div>

       
          <div className="post"><button className='post-button'>End Poll</button></div>
        
      </div>
    </>
  )
}

export default pollgraph
