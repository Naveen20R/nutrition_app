import React from 'react';
import "@/styles/homeStyle.css";
import Button from './Button';

function Form() {
    return (
        <>
            <div className="review-form-parent p-3 p-md-5">
                <h6 className='about-us text-center text-md-start'>BECOME A PARTNER</h6>
                <h2 className='fw-bold fs-2 w-100 text-center review-heading text-md-start w-md-50'>Join Us Our Training Program</h2>

                <form action="" className='mt-4'>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="text" class="form-control p-3 rounded-0" placeholder="First name" />
                        </div>
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="text" class="form-control p-3 rounded-0" placeholder="Last name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="tel" class="form-control p-3 rounded-0" placeholder="Phone" />
                        </div>
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="email" class="form-control p-3 rounded-0" placeholder="Your Email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="text" class="form-control p-3 rounded-0" placeholder="Your Height" />
                        </div>
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="text" class="form-control p-3 rounded-0" placeholder="Body Weight" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-6 mb-3">
                            <input type="text" class="form-control p-3 rounded-0" placeholder="Body Weight Target" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            {/* <a href="" className='mx-auto'> <button className='banner-startbtn border-0'>Get Information Now</button></a> */}
                            <Button className="mx-2" whichBtn={'filled'} btn={{ text: "Join Classes", url: "/join-classes" }} />

                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form