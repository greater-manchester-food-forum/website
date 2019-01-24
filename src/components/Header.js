import React from 'react';

const navBarHeight = '89px';

export default function Header({ image, title }) {
  return (
    <div
      className="h-64 flex items-center bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${image})`,
      }}
    >
      <div className="mx-auto">
        <h1
          className="text-white text-5xl font-bold tracking-tight leading-tight mb-3 text-center"
          style={{ marginTop: navBarHeight }}
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
