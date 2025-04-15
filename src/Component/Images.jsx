import React from 'react';

const Images = ({ src, alt, width, height }) => {
  return (
    <div>
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} />
    </div>
  );
};

export default Images;
