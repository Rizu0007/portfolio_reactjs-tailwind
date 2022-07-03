import React from 'react';

// import social data
import { social } from '../data';

const Footer = () => {
  return (
    <footer className='bg-tertiary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between'>
         
          <div>
            
          </div>
          <p className='text-paragraph opacity-80 text-[22px]'>
            &copy; 2022 Rizwan Ali  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
