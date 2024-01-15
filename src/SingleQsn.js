import React from "react";

const SingleQsn = ({options}) => {
  return (
        <div>
            {options.map((opt, index) => (<div key={index} className="choice-container">
        <p className="choice-prefix">{index + 1}</p>
        <p className="p choice-text" data-number="1">
          {opt}
        </p>
      </div>))}
        </div>
    
  );
};

export default SingleQsn;
