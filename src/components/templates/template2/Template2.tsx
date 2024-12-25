
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLocation, IoPersonCircle, IoSchool } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const Template2 = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-4 md:p-8">
            <div className="mx-auto max-w-5xl bg-white shadow-lg">

                <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2">

                    <div className="bg-[#DD4B39] text-white p-6">
                        <div className="mb-8">
                            <div className="bg-white text-[#DD4B39] p-2 mb-4 inline-block">
                                <h3 className="font-bold text-base md:text-lg">COMPUTER SCIENCE</h3>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <section>
                                <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                                    <IoLocation className="w-5 h-5 md:w-6 md:h-6" />
                                    ADDRESS
                                </h3>
                                <p className="text-xs md:text-sm break-words">
                                    House Number 188 area Baloch colony Shaheed Milat road Karachi
                                </p>
                            </section>

                            <section>
                                <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                                    <FaPhoneAlt className="w-4 h-4 md:w-5 md:h-5" />
                                    CONTACT
                                </h3>
                                <p className="text-xs md:text-sm">+92 305 2894 339</p>
                            </section>

                            <section>
                                <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                                    <MdEmail className="w-5 h-5 md:w-6 md:h-6" />
                                    EMAIL
                                </h3>
                                <p className="text-xs md:text-sm break-words">meerbaloch5225@gmail.com</p>
                            </section>

                            <section>
                                <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                                    <IoPersonCircle className="w-5 h-5 md:w-6 md:h-6" />
                                    PROFILE
                                </h3>
                                <p className="text-xs md:text-sm">DOB: 10 DEC 1997</p>
                                <p className="text-xs md:text-sm">GENDER: Male</p>
                            </section>

                            <section>
                                <h3 className="font-bold mb-2 flex items-center gap-2 text-sm md:text-base">
                                    <IoSchool className="w-5 h-5 md:w-6 md:h-6" />
                                    EDUCATION
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-bold text-xs md:text-sm">Graduation:</h4>
                                        <p className="text-xs md:text-sm">BSCS (Computer Science)</p>
                                        <p className="text-xs md:text-sm">University of Sindh Jamshoro in 2020</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs md:text-sm">Intermediate:</h4>
                                        <p className="text-xs md:text-sm">B.I.S.E Pre-Engineering Mirpurkhas in 2015</p>
                                        <p className="text-xs md:text-sm italic">1ST DIVISION</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-xs md:text-sm">Matriculation:</h4>
                                        <p className="text-xs md:text-sm">B.I.S.E Science Mirpurkhas in 2013</p>
                                        <p className="text-xs md:text-sm italic">1ST DIVISION</p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>


                    <div className="p-6">
                        <header className="mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-[#DD4B39] mb-1">AMEER BUX</h1>
                            <h2 className="text-lg md:text-xl font-bold text-[#DD4B39]">NETWORKING ENGINEER</h2>
                        </header>

                        <div className="space-y-6">
                            <section>
                                <h3 className="font-bold text-[#DD4B39] mb-2 text-sm md:text-lg border-b-2 border-[#DD4B39]">
                                    OBJECTIVE
                                </h3>
                                <p className="text-xs md:text-sm">
                                    Motivated and skilled Network Engineer, recently graduated with a bachelor's
                                    degree in Computer Science from University of Sindh Jamshoro. Possessing a
                                    strong foundation in networking principles, with a focus on Cisco technologies.
                                    Recently completed CCNA and currently pursuing Routing and Switching
                                    certification. Seeking opportunities to apply theoretical knowledge and
                                    hands-on skills in a dynamic professional environment.
                                </p>
                            </section>

                            <section>
                                <h3 className="font-bold text-[#DD4B39] mb-2 text-sm md:text-lg border-b-2 border-[#DD4B39]">
                                    EXPERIENCE
                                </h3>
                                <ul className="text-xs md:text-sm list-disc list-inside">
                                    <li>
                                        02-Year Working Experience As a Computer Operator In Sindh Education
                                        Foundation (SEF) School.
                                    </li>
                                    <li>Working As a Business Development officer (BDO) in Bankislami</li>
                                </ul>
                            </section>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template2;
