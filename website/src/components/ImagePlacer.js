import React from 'react';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

const ImagePlacer = ({ data, wrapperClassName, elementClassName }) => {
  const imageElements = data.map(({ width, height, top, left, rotation, image }, key) => {
    
    const style = {
      top: `${top}%`,
      left: `${left}%`,
      width: width,
      height: height,
      position: 'absolute',
      transform: `rotate(${rotation}deg)`
    };

    return (
        <div style={style} className={elementClassName} key={key}>
          <GatsbyImage
            image={getImage(image)}
            width={width}
            height={height}
            placeholder="tracedSVG"
            loading="eager"
            />
        </div>
    );
  });

  const wrapperStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }

  return (
    <div style={wrapperStyle} className={wrapperClassName}>
      {imageElements}
    </div>
  );
};

export default ImagePlacer;