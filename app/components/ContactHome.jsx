import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactHome() {
    return (
        <>
            <div className="contact-home-wrapper bg-[#F0F4FF] py-12">
                <h1 className="max-w-7xl text-center p-4 pb-6 mx-auto text-3xl font-extrabold text-blue-900 sm:text-4xl">
                    Get in Touch with Us
                </h1>
                <div className=" contact-home-container mx-auto max-w-7xl flex gap-4 px-4 sm:px-6 lg:px-8 sm:flex-row flex-col">
                    <div className="contact-card contact-home-content sm:w-2/4 w-full text-center p-5 sm:p-6 md:p-8 lg:p-10 ">
                        <div className="icon-content flex gap-8 pt-4 pb-4 border-b border-gray-200">
                            <div className="icon-wrapper mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <MapPin/>
                            </div>
                            <div className="icon-text-content text-left">
                                <h4 className="text-[14px] uppercase font-bold text-blue-900">
                                    Our Address
                                </h4>
                                <p className="mt-1 text-md text-gray-600">
                                   2/275, Krishnagiri Main Road, Dharmapuri, Tamil Nadu 636702
                                </p>
                            </div>
                        </div>
                        <div className="icon-content flex gap-8 pt-4 pb-4 border-b border-gray-200">
                            <div className="icon-wrapper mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <Phone/>
                            </div>
                            <div className="icon-text-content text-left">
                                <h4 className="text-[14px] uppercase font-bold text-blue-900">
                                    Admissions
                                </h4>
                                <p className="mt-1 text-md text-gray-600">
                                   <a href="tel:04342 288 882" className="text-gray-600 hover:text-blue-800">04342 288 882</a>
                                </p>
                            </div>
                        </div>
                        <div className="icon-content flex gap-8 pt-4 pb-4 border-b border-gray-200">
                            <div className="icon-wrapper mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                                <Mail/>
                            </div>
                            <div className="icon-text-content text-left">
                                <h4 className="text-[14px] uppercase font-bold text-blue-900">
                                    Email
                                </h4>
                                <p className="mt-1 text-md text-gray-600">
                                   <a href="mailto:admissions@pachamuthu.edu.in" className="text-gray-600 hover:text-blue-800">admissions@pachamuthu.edu.in</a>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className="contact-card sm:w-2/4 w-full contact-home-map overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7800.2169070725695!2d78.16598282547434!3d12.173018999999998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac16255def8017%3A0xace1e0de2f7d4c7!2sPachamuthu%20College%20of%20Arts%20%26%20Science%20for%20Women!5e0!3m2!1sen!2sin!4v1791083827536!5m2!1sen!2sin" 
                            width="100%" 
                            height="400" style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}