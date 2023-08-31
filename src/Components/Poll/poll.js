
import React, { useState } from 'react';
import "./poll.css";

const PollApp = () => {
  const [options, setOptions] = useState(['Option1', 'Option2']);
  var newOptions;
  const addOption = () => {
    if(options.length <4 ){
       newOptions = [...options, `Option${options.length + 1}`];
      setOptions(newOptions);
    }
  };

  return (
    <>
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
            {
              options.length <4 ?   <div className="add-option" onClick={addOption}>
              +<span className='add-option-span'>Add Option</span>
            </div>:null
            }
          </div>  
        </div>

       
          <div className="post"><button className='post-button'>Post</button></div>
        
      </div>
    </>
  );
};

export default PollApp;
