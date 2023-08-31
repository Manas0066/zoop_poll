import React from 'react';
import { useHistory } from 'react-router-dom';

function PollGraph() {
  const history = useHistory();

  const handleEndPoll = () => {
    // Simulate ending the poll
    console.log('Poll ended!');
  };

  return (
    <div className="poll-page-2">
      <div className="poll-box-graph">
        <div className="poll-question-graph">
          <div className="poll-question-box-graph">Here is your question ?</div>
        </div>
        <div className="poll-options-graph">
          <div className="option1-with-graph">
            <button className='poll-option-graph'>Option 1</button>
            <span className='percent-option1'>50%</span>
          </div>
          {/* ... other options ... */}
        </div>
        <div className="vote-number">100k Votes</div>
      </div>
      <div className="post">
        <button className='post-button' onClick={handleEndPoll}>End Poll</button>
      </div>
    </div>
  );
}

export default PollGraph;
