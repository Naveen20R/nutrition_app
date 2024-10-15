import Form from '@/components/form/Form'
import Navbar01 from '@/components/navbar/Navbar01'
import React from 'react';
import "@/styles/contactStyle.css";
import Button from '@/components/form/Button';
import Footer01 from '@/components/footer/Footer01';

function page() {
    return (
        <>
            <Navbar01 />
            <div className="conatiner-fluid bg-blue py-3 py-md-5">
                <div className="container py-3 py-md-5">
                    <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                            <Form />
                        </div>
                        <div className="col-12 col-md-12 col-lg-6 mt-5 mt-lg-0">
                            <div className="">
                                <h6 className='about-us text-center text-md-start'>BECOME A PARTNER</h6>
                                <h2 className='fw-bold fs-2 w-100 text-center review-heading text-md-start w-md-50'>Join Us Our Training Program</h2>
                                <p className='about-us-para'>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</p>
                                <div className="my-2 my-md-4  d-flex justify-content-start  flex-column flex-md-row align-items-center gap-2 gap-md-5">
                                    <div className="contact-icon-img">
                                        <img className='w-100 h-100' src="/images/contact-img-1.png" alt="mobile img" />
                                    </div>
                                    <div className="">
                                        <p className='text-center text-md-start contact-call-text'>Call for active now</p>
                                        <p className='text-center text-md-start contact-call-address'>+1(888) 1234-5678</p>
                                    </div>
                                </div>
                                <div className="my-2 my-md-4  d-flex justify-content-start  flex-column flex-md-row align-items-center gap-2 gap-md-5">
                                    <div className="contact-icon-img">
                                        <img className='w-100 h-100' src="/images/contact-img-2.png" alt="mobile img" />
                                    </div>
                                    <div className="">
                                        <p className='text-center text-md-start contact-call-text'>Send us a mail</p>
                                        <p className='text-center text-md-start contact-call-address'>info@example.com</p>
                                    </div>
                                </div>
                                <div className="my-2 my-md-4  d-flex justify-content-start  flex-column flex-md-row align-items-center gap-2 gap-md-5">
                                    <div className="contact-icon-img">
                                        <img className='w-100 h-100' src="/images/contact-img-3.png" alt="mobile img" />
                                    </div>
                                    <div className="">
                                        <p className='text-center text-md-start contact-call-text'>Our location</p>
                                        <p className='text-center text-md-start contact-call-address'>121 King St, Melbourne VIC 3000, Australia</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-img text-center py-5">
                <div className="container">
                    <div className="row bg-img-content mx-auto">
                        <div className="col-12">
                            <h2 className="bg-img-heading">Join Today Our Classes & Get Promotional Offers</h2>
                            <p className="bg-img-para">
                                Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae.
                            </p>
                            <div className="d-flex my-2 flex-column flex-md-row mx-auto 
                             justify-content-center align-items-start gap-2">
                                <div className="mx-auto">
                                    <Button className="" whichBtn={'filled'} btn={{ text: "Join Classes", url: "/join-classes" }} />
                                </div>
                                <div className="mx-auto">
                                    <Button className="" whichBtn={'outline'} btn={{ text: "Get Started", url: "/join-classes" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer01 />

        </>
    )
}

export default page