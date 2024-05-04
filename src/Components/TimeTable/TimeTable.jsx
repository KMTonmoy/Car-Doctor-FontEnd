import React from 'react';
import { SlCalender, SlCallIn, SlLocationPin } from "react-icons/sl";

const TimeTable = () => {
    return (
        <div>
            <div className='flex justify-between items-center my-5 rounded-md p-10 gap-4 h-[250px] bg-black text-white font-inter'>
                <div className='flex gap-2 items-center'><p className='text-3xl mr-2 text-[#FF3811]'><SlCalender /></p> <div><p className='text-base font-medium'>We are open monday-friday</p> <h2 className='text-2xl font-bold '>7:00 am - 9:00 pm</h2></div></div>
                <div className='flex gap-2 items-center'><p className='text-3xl mr-2 text-[#FF3811]'><SlCallIn /></p> <div><p className='text-base font-medium'>Have a question?</p> <h2 className='text-2xl font-bold '>+2546 251 2658</h2></div></div>
                <div className='flex gap-2 items-center'><p className='text-3xl mr-2 text-[#FF3811]'><SlLocationPin /></p> <div><p className='text-base font-medium'>Need a repair? our address</p> <h2 className='text-2xl font-bold '>Liza Street, New York</h2></div></div>
            </div>
        </div>
    );
};

export default TimeTable;