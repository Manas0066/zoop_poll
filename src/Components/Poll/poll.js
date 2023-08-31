import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PollContext } from '../../PollContext'; // Correct path to PollContext
import './poll.css';

function PollApp() {
  const { pollData, setPollData } = useContext(PollContext);
  const history = useHistory();
  const [options, setOptions] = useState(['Option1', 'Option2']); // Options state

  const handlePost = () => {
    const question = document.querySelector('.poll-question-box').value;

    // Simulate setting poll data
    setPollData({
      question,
      options: options.map(option => ({ text: option, votes: 0 })),
    });

    // Simulate navigating to the next component
    history.push('/result');
  };

  const addOption = () => {
    if (options.length < 4) {
      const newOption = `Option${options.length + 1}`;
      setOptions([...options, newOption]);
    }
  };

  return (
    <div className="poll-page-1">
      <div className="poll-box">
        <div className="poll-question">
          <input className='poll-question-box' type="text" placeholder='Ask a question ?' />
        </div>
        <div className="poll-options">
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={option}
              className="poll-option-input"
            />
          ))}
          {options.length < 4 && (
            <div className="add-option" onClick={addOption}>
              +<span className='add-option-span'>Add Option</span>
            </div>
          )}
        </div>  
      </div>
      <div className="post">
        <button className='post-button' onClick={handlePost}>Post</button>
      </div>
    </div>
  );
}

export default PollApp;

