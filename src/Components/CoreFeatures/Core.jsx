import React from 'react';
import img1 from '../../assets/icons/group.svg';
import img2 from '../../assets/icons/Group 38729.svg';
import img3 from '../../assets/icons/person.svg';
import img4 from '../../assets/icons/Wrench.svg';
import img5 from '../../assets/icons/check.svg';
import img6 from '../../assets/icons/deliveryt.svg';
const Core = () => {
    return (
        <div className='my-10'>
            <div className='text-center my-5 md:px-[300px]'>
                <h3 className='font-inter text-xl font-bold text-[#FF3811]'>Core Features</h3>
                <h1 className="font-inter font-bold text-[45px] ">Why Choose Us</h1>
                <p className='font-inter font-normal  text-base text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised  words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-center items-center gap-10 flex-wrap mt-10'>
                <div className='w-[170px] rounded-md h-[156px] bg-gray-200 text-center py-10' ><img src={img1} className='mx-auto mb-2' alt="" /> <p className='font-inter text-lg font-bold'>Expert Team</p> </div>
                <div className='w-[170px] rounded-md h-[156px] text-white bg-[#FF3811] text-center py-10' ><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqt5FnSebLX_FDPiX8gf_-bD59kBsMaqawWGan-GLlg&s' className='mx-auto mb-2 w-[60px] rounded-full' alt="" /> <p className='font-inter text-lg font-bold'>Timely Delivery</p> </div>
                <div className='w-[170px] rounded-md h-[156px] bg-gray-200 text-center py-10' ><img src={img3} className='mx-auto mb-2' alt="" /> <p className='font-inter text-lg font-bold'>24/7 Support</p> </div>
                <div className='w-[170px] rounded-md h-[156px] bg-gray-200 text-center py-10' ><img src={img4} className='mx-auto mb-2' alt="" /> <p className='font-inter text-lg font-bold'>Best Equipment</p> </div>
                <div className='w-[170px] rounded-md h-[156px] bg-gray-200 text-center py-10' ><img src={img5} className='mx-auto mb-2' alt="" /> <p className='font-inter text-lg font-bold'>100% Guranty</p> </div>
                <div className='w-[170px] rounded-md h-[156px] bg-gray-200 text-center py-10' ><img src={img6} className='mx-auto mb-2' alt="" /> <p className='font-inter text-lg font-bold'>Timely Delivery</p> </div>
            </div>
        </div>
    );
};

export default Core;