import React from 'react';

const Mybtn = ({ text, type, onClick }) => {
  const btnType = ['positive', 'negative'].includes(type) ? type : 'default';

  return (
    <button
      className={['Mybtn', `Mybtn_${btnType}`].join(' ')}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Mybtn.defaultProps = {
  type: 'default',
};

export default Mybtn;
