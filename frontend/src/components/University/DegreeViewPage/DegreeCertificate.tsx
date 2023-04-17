import React from 'react';
import VerifiedTickIcon from './VerifiedTickIcon';
import { IMAGES } from '../../../constants/images';


// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

interface Props {
  name: string,
  program: string,
  // date: "string",
  graduatingYear: string,

}
function goBack() {
  window.history.back();
}
function DegreeCertificate({ name, program, graduatingYear }: Props) {
  return (
    <div className='relative'>
      <button onClick={goBack} className='absolute top-0 right-0 mt-2 mr-2 p-2 rounded-full border-2 border-black focus:outline-none'>
        <svg className='w-4 h-4 text-black fill-current' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'><path d='M10 8.586L6.879 5.464a2 2 0 00-2.828 2.828L7.172 11 4.05 14.121a2 2 0 002.828 2.828L10 13.828l3.121 3.121a2 2 0 002.828-2.828L12.828 11l3.121-3.121a2 2 0 00-2.828-2.828L10 8.586z' /></svg>
      </button>

      <div className='w-screen h-screen p-4 flex flex-col justify-center items-center'>
        <div className="h-5/6 w-4/6 max-w-4xl bg-white border-2 border-black border-solid relative shadow-xl">
          <div className="absolute inset-2 bg-red-900">
            <div className="absolute inset-10 bg-white flex flex-col items-center justify-center">
              <div className="flex justify-between px-2 py-2 absolute top-0 left-0 w-full">
                {/* ADD RELEVANT UNI LOGO */}
                <img className='w-10 sm:w-20' src={IMAGES.iba_logo} alt="IBA logo"></img>
                <img className="h-10 sm:h-16" src={IMAGES.unverified_icon} alt="Unverified icon" title="This degrees is pending approval from the Higher Education Commission" />
              </div>
              <h1 className="text-5xl font-bold mb-4 font-certificate">Certificate of Completion</h1>
              <p className="text-xl mb-4">This certifies that</p>
              <h2 className="text-3xl font-bold mb-4">{name}</h2>
              <p className="text-xl mb-4">has successfully completed the</p>
              <h2 className="text-xl font-bold mb-4">{program}</h2>
              <p className="text-xl mb-4">from IBA</p>
              <h2 className="text-xl font-bold mb-4">Class of 2023</h2>
            </div>
          </div>
        </div>
        {/* <VerifiedTickIcon size={'8'} visible={true} /> */}
      </div>
    </div>


  );
}

export default DegreeCertificate;