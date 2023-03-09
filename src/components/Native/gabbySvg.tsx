import React from 'react';

interface SVGProps {
  src: string; // the url of the svg file
  alt: string; // the alternative text for the svg
  width?: number; // the width of the svg
  height?: number; // the height of the svg
  className?: string; // the class name for the svg
  style?: React.CSSProperties; // the style for the svg
}

const SVGComponent: React.FC<React.PropsWithChildren<SVGProps>> = ({
  src,
  alt,
  width,
  height,
  className,
  style,
  children,
}) => {
  return (
    <div className={className} style={style}>
      <img src={src} alt={alt} width={width} height={height} />
      {children}
    </div>
  );
};

export default SVGComponent;




// const SVGComponent: React.FC<SVGProps> = ({
//   src,
//   alt,
//   width,
//   height,
//   className,
//   style,
// }) => {
//   return (
//     <img
//       src={src}
//       alt={alt}
//       width={width}
//       height={height}
//       className={className}
//       style={style}
//     />
//   );
// };

// export default SVGComponent;
