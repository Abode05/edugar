import React, { useState } from 'react';
import './Questions.css';

const Questions = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="question-item" onClick={() => setIsOpen(!isOpen)}>
      <div className="question-header">
        <h6>{question}</h6>
              <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
                    {isOpen && <p className="answer">{answer}</p>}

      </div>
    </div>
  );
};

export default Questions;
