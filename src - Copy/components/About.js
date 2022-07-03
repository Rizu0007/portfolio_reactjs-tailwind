import React from 'react';

// import img
import rizz from '../assets/ex/rizz.png'

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24'>
          <img
            className='object-cover w-[366px] md:mx-auto lg:mx-0 rounded-2xl'
            src={rizz}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
               Rizwan
              </h2>
              <p className='mb-4 text-accent'>
                Freelance Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>
              My aspiration to live creativity and meet people’s actual needs when it comes to media consumption led me to complete my Bachelor’s in software . My aim is always to combine a pragmatic approach with aesthetics, while improving communication between people..
. <br />
                <br />
                We believe that great work comes from building great relationships.

We work one on one with our clients and collaborate with them every step

of the way.              </p>
            </div>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover transition-all'>
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
