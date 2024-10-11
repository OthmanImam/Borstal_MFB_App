import React from 'react';



function Footer() {
  const today = new Date();
  const currentYear = today.getFullYear();
  return (
    <div className="relative bottom-0 w-full text-center p-4 md:p-6 z-40 flex items-center justify-center bg-white px-6 shadow-xl border-t border-gray-200">
      <p className="m-auto text-center text-sm md:text-base lg:text-lg ">
        Copyright © {currentYear} <span className="text-yellow-300">Borstal Micro Finance Bank.</span> All rights reserved
      </p>
      {/* <p>Terms and Conditions | Privacy Policy</p> */}
    </div>
  );
}

export default Footer;
