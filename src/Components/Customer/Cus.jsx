import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from 'react-icons/fa6';

const Cus = () => {
    return (
        <div>
            <div className='text-center mt-20 md:px-[300px]'>
                <h3 className='font-inter text-xl font-bold text-[#FF3811]'>Testimonial</h3>
                <h1 className="font-inter font-bold text-[45px] ">What Customer Says</h1>
                <p className='font-inter font-normal  text-base text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex my-20 justify-center items-center gap-5 flex-wrap'>
                <div className='w-[558px] p-10'>
                    <div className='flex items-center gap-2'>
                        <img className='rounded-full w-[80px]' src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" alt="" />
                        <div>
                            <h1 className='font-inter font-bold text-2xl'>Awlad Hossain</h1>
                            <p className='font-inter text-xl font-semibold text-gray-600'>Businessman</p>
                        </div>
                    </div>
                    <p className='mt-2 text-gray-700 capitalize font-inter text-base font-normal'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div className='flex gap-2 text-xl text-orange-500 mt-5'>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStarHalfStroke /></p>

                    </div>
                </div>
                <div className='w-[558px] p-10'>
                    <div className='flex items-center gap-2'>
                        <img className='rounded-full w-[80px]' src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" alt="" />
                        <div>
                            <h1 className='font-inter font-bold text-2xl'>Awlad Hossain</h1>
                            <p className='font-inter text-xl font-semibold text-gray-600'>Businessman</p>
                        </div>
                    </div>
                    <p className='mt-2 text-gray-700 capitalize font-inter text-base font-normal'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <div className='flex gap-2 text-xl text-orange-500 mt-5'>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStar /></p>
                        <p><FaStarHalfStroke /></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cus;