import React, { useState } from 'react';

const ReadMoreButton = ({ text, maxLength }) => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      {showAll ? (
        <div>
          {text}
          <br />
          <button className='btn' onClick={toggleShowAll}>Read Less</button>
        </div>
      ) : (
        <div>
          {text.length > maxLength ? `${text.slice(0, maxLength)}...` : text}
          {text.length > maxLength && <button className='btn' onClick={toggleShowAll}>Read More</button>}
        </div>
      )}
    </div>
  );
};

export default ReadMoreButton;
