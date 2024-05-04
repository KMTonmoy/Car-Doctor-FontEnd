import React from 'react';
import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";

const Team = () => {
    return (
        <div>
            <div className='text-center mt-20 md:px-[300px]'>
                <h3 className='font-inter text-xl font-bold text-[#FF3811]'>Team</h3>
                <h1 className="font-inter font-bold text-[45px] ">Meet Our Team</h1>
                <p className='font-inter font-normal  text-base text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex justify-center gap-4 flex-wrap my-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={team1} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='font-inter font-bold'>Car Engine Plug</h2>
                        <p className='font-inter font-semibold text-gray-500'>Engine Expert</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiFacebook /></button>
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiInstagram /></button>
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiTwitter /></button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={team2} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='font-inter font-bold'>Car Engine Plug</h2>
                        <p className='font-inter font-semibold text-gray-500'>Engine Expert</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiFacebook /></button>
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiInstagram /></button>
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiTwitter /></button>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={team3} alt="Shoes" /></figure>
                    <div className="card-body text-center">
                        <h2 className='font-inter font-bold'>Car Engine Plug</h2>
                        <p className='font-inter font-semibold text-gray-500'>Engine Expert</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiFacebook /></button>
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiInstagram /></button>
                            <button className="btn text-[40px] bg-orange-600 text-white rounded-full"><CiTwitter /></button>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Team;