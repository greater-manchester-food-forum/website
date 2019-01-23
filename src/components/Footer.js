import React from 'react';

function Footer() {
  return (
    <div className="bg-safe-green-darker text-white p-6 text-center text-sm">
      <p className="">
        &copy; Greater Manchester Food Forum {new Date().getFullYear()}. All
        rights reserved.
      </p>
    </div>
  );
}

export default Footer;
