import React, { useState, useEffect } from 'react';
import 'lazysizes';
import 'lazysizes/plugins/attrchange/ls.attrchange';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  placeholderColor?: string;
  srcSet?: string;
  sizes?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  placeholderColor = '#f3f4f6', // Default light gray placeholder
  srcSet,
  sizes
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Check if the image is already in the browser cache
  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    if (img.complete) {
      setLoaded(true);
    }
  }, [src]);

  // Generate a placeholder with the specified dimensions
  const placeholderStyle = {
    backgroundColor: placeholderColor,
    width: width ? `${width}px` : '100%',
    height: height ? `${height}px` : '0',
    paddingBottom: !height && width ? '75%' : undefined, // Default aspect ratio if only width is provided
    display: loaded ? 'none' : 'block',
    borderRadius: 'inherit'
  };

  return (
    <div className="relative overflow-hidden" style={{ width: width ? `${width}px` : '100%' }}>
      {/* Placeholder */}
      {!loaded && !error && (
        <div 
          className="absolute inset-0 animate-pulse" 
          style={placeholderStyle}
          aria-hidden="true"
        />
      )}
      
      {/* Actual image with lazysizes */}
      <img
        data-src={src}
        data-srcset={srcSet}
        data-sizes={sizes || 'auto'}
        className={`lazyload ${className} ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
      />
      
      {/* Error fallback */}
      {error && (
        <div 
          className="flex items-center justify-center bg-gray-200 text-gray-500 text-sm"
          style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '200px' }}
        >
          {alt || 'Image failed to load'}
        </div>
      )}
    </div>
  );
};

export default LazyImage;