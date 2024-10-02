import React from 'react';

function Footer() {
  return (
    <div className="fixed bottom-0 w-full h-20 z-40 flex items-center justify-center bg-white px-6 shadow-xl border-t border-gray-200">
      <p className="m-auto text-center">
        Copyright © 2021 <span className="text-yellow-300">Borstal Micro Finance Bank.</span> All rights reserved
      </p>
      {/* <p>Terms and Conditions | Privacy Policy</p> */}
    </div>
  );
}

export default Footer;
