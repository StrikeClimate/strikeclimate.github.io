import React, { ReactNode } from 'react';

const HeroComponent = ({ 
  id = '/', 
  height = '80vh', 
  bgImage = '', 
  bgColor = '', 
  gradientClass = '', 
  children 
}: { 
  id?: string;
  height?: string;
  bgImage?: string;
  bgColor?: string;
  gradientClass?: string;
  children?: ReactNode;
}) => {
  return (
    <section 
      id={id} 
      className={`relative w-full ${bgColor} ${bgImage ? '' : gradientClass}`} 
      style={{ 
        height: height, 
        backgroundImage: bgImage ? `url(${bgImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {gradientClass && (
        <div className={`absolute inset-0 ${gradientClass}`} />
      )}
      <div className="relative container mx-auto md:max-w-[1280px] flex flex-row h-full justify-between items-center z-10">
        {children}
      </div>
    </section>
  );
};

export default HeroComponent;
