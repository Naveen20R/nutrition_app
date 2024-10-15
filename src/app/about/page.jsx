import Navbar01 from '@/components/navbar/Navbar01'
import React from 'react';
import "@/styles/aboutStyle.css";
import "@/styles/serviceStyle.css";
import Button from '@/components/form/Button';
import "@/styles/homeStyle.css";
import Footer01 from '@/components/footer/Footer01';



function page() {
    return (
        <>
            <Navbar01 />
            <div className="container-fluid p-0 bg-light-gray">
                <div className="container-fluid bg-light-blue">
                    <div className="conatiner">
                        <div className="row py-5">
                            <div className="col-12 col-md-6">
                                <div className="process-imgs-container-2 d-flex justify-content-center flex-column flex-md-row flex-lg-row flex-wrap align-items-center gap-3">
                                    <div className="process-imgs-2">
                                        <img className='w-100 h-100' src="/images/process-img-1.jpg" alt="process img" />
                                    </div>
                                    <div className="process-imgs-2">
                                        <img className='w-100 h-100' src="/images/about-img-1.jpg" alt="process img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="">
                                    <h6 className='about-us text-center text-md-start'>___ WHO WE ARE</h6>
                                    <h4 className='fw-bold about-us-title text-center text-md-start'>we care to fill up your nutrition deficiency of health balance</h4>
                                    <p className='about-us-para text-center text-md-start'>Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure dolor reprehen.</p>
                                    <h2>how we keep no1 positions</h2>
                                    <ul className='about-list'>
                                        <li>Mauris at risus a dolor tincidunt viverra vitae vel ipsum.</li>
                                        <li>Nullam consequat sapien eget lectus placerat facilisis.</li>
                                        <li>Integer tempor massa non justo iaculis mattis.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-img">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="bg-content p-3 p-md-5">
                                    <h2 className='about-bg-title fw-bold'>Our Service Statistics</h2>
                                    <p className='about-bg-para fw-normal mb-4 p-0 m-0'>Utenim ad minim veniam quis nostrud.</p>
                                    <div className="my-2">
                                        <h5 className='bar-title fw-bold my-1'>Morder Exercise</h5>
                                        <div className="row">
                                            <div className="col-8 col-lg-10 my-auto">
                                                <div class="skill-bar">
                                                    <div class="skill-track"></div>
                                                    <span class="bar-pointer">
                                                        <span class="pointer-dot"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h5 className='fw-bold text-black my-auto'>92%</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h5 className='bar-title fw-bold my-1'>Morder Exercise</h5>
                                        <div className="row">
                                            <div className="col-8 col-lg-10 my-auto">
                                                <div class="skill-bar">
                                                    <div class="skill-track"></div>
                                                    <span class="bar-pointer">
                                                        <span class="pointer-dot"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h5 className='fw-bold text-black my-auto'>92%</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-2">
                                        <h5 className='bar-title fw-bold my-1'>Morder Exercise</h5>
                                        <div className="row">
                                            <div className="col-8 col-lg-10 my-auto">
                                                <div class="skill-bar">
                                                    <div class="skill-track"></div>
                                                    <span class="bar-pointer">
                                                        <span class="pointer-dot"></span>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <h5 className='fw-bold text-black my-auto'>92%</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="conatiner-fluid">
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="col-12 col-md-7 mx-auto">
                                <h6 className='about-us text-center'>___ WHO WE ARE</h6>
                                <h4 className='fw-bold about-us-title text-center'>we care to fill up your nutrition deficiency of health balance</h4>
                                <p className='about-us-para text-center'>Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure dolor reprehen.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 my-2 my-md-4">
                            <div className="my-3 d-flex flex-column justify-content-center justify-content-md-start align-items-center gap-2">
                                <div className="">
                                    <img src="/images/process-img-1.png" alt="process img" />
                                </div>
                                <div className="mx-auto">
                                    <h5 className='process-heading text-center'>health problems options</h5>
                                    <p className='process-desc text-center'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2 my-md-4">
                            <div className="my-3 d-flex flex-column justify-content-center justify-content-md-start align-items-center gap-2">
                                <div className="">
                                    <img src="/images/process-img-1.png" alt="process img" />
                                </div>
                                <div className="mx-auto">
                                    <h5 className='process-heading text-center'>health problems options</h5>
                                    <p className='process-desc text-center'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2 my-md-4">
                            <div className="my-3 d-flex flex-column justify-content-center justify-content-md-start align-items-center gap-2">
                                <div className="">
                                    <img src="/images/process-img-1.png" alt="process img" />
                                </div>
                                <div className="mx-auto">
                                    <h5 className='process-heading text-center'>health problems options</h5>
                                    <p className='process-desc text-center'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 my-2 my-md-4">
                            <div className="my-3 d-flex flex-column justify-content-center justify-content-md-start align-items-center gap-2">
                                <div className="">
                                    <img src="/images/process-img-1.png" alt="process img" />
                                </div>
                                <div className="mx-auto">
                                    <h5 className='process-heading text-center'>health problems options</h5>
                                    <p className='process-desc text-center'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-light-gray">
                <div className="container py-5">
                    <div className="row py-5">
                        <div className="col-12 col-md-6">
                            <div className="goal-img">
                                <img className='w-100 h-100' src="/images/about-our-goal-img.jpg" alt="goal img" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="">
                                <h6 className='about-us text-center text-md-start'>___ WHO WE ARE</h6>
                                <h4 className='fw-bold about-us-title text-center text-md-start'>we care to fill up your nutrition deficiency of health balance</h4>
                                <p className='about-us-para text-center text-md-start'>Utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure dolor reprehen.</p>
                                <div className="my-3 d-flex  p-3 flex-md-row flex-column justify-content-center justify-content-md-start align-items-center gap-2 gap-md-5">
                                    <div className="">
                                        <img src="/images/apple-img.png" alt="process img" />
                                    </div>
                                    <div className="">
                                        <h5 className='process-heading text-center text-md-start'>health problems options</h5>
                                        <p className='process-desc text-center text-md-start'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                            ullamcorper dignissim eu turpis utnulla.</p>
                                    </div>
                                </div>
                                <div className="my-3 d-flex bg-white p-3 rounded flex-md-row flex-column justify-content-center justify-content-md-start align-items-center gap-2 gap-md-5">
                                    <div className="">
                                        <img src="/images/person-img.png" alt="process img" />
                                    </div>
                                    <div className="">
                                        <h5 className='process-heading text-center text-md-start'>health problems options</h5>
                                        <p className='process-desc text-center text-md-start'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                            ullamcorper dignissim eu turpis utnulla.</p>
                                    </div>
                                </div>
                                <div className="my-3 d-flex  p-3 flex-md-row flex-column justify-content-center justify-content-md-start align-items-center gap-2 gap-md-5">
                                    <div className="">
                                        <img src="/images/gym-img.png" alt="process img" />
                                    </div>
                                    <div className="">
                                        <h5 className='process-heading text-center text-md-start'>health problems options</h5>
                                        <p className='process-desc text-center text-md-start'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                            ullamcorper dignissim eu turpis utnulla.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row py-5">
                    <div className="col-12 col-md-6 mx-auto">
                        <h6 className='about-us text-center'>___ WHO WE ARE</h6>
                        <h4 className='fw-bold about-us-title text-center'>we care to fill up your nutrition deficiency of health balance</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 my-auto">
                        <div className="d-flex our-plane-card justify-content-center align-items-center flex-column mx-auto">
                            <div className="my-2">
                                <img src="/images/basic-img-1.png" alt="plane img 1" />
                            </div>
                            <h5>basic Plan</h5>
                            <h5>$19 <sub>/ Month </sub> </h5>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste eius, delectus nihil debitis libero consequuntur eaque reprehenderit. Incidunt aut ut unde molestias earum ad minus, saepe officia quia quas!</p>
                            <div className="my-3">
                                <Button className="" whichBtn={'filled'} btn={{ text: "Join Classes", url: "/join-classes" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-auto">
                        <div className="d-flex our-plane-card active justify-content-center align-items-center flex-column mx-auto">
                            <div className="my-2">
                                <img src="/images/basic-img-1.png" alt="plane img 1" />
                            </div>
                            <h5>basic Plan</h5>
                            <h5>$19 <sub>/ Month </sub> </h5>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste eius, delectus nihil debitis libero consequuntur eaque reprehenderit. Incidunt aut ut unde molestias earum ad minus, saepe officia quia quas!</p>
                            <div className="my-3">
                                <Button className="" whichBtn={'filled'} btn={{ text: "Join Classes", url: "/join-classes" }} />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 my-auto">
                        <div className="d-flex our-plane-card justify-content-center align-items-center flex-column mx-auto">
                            <div className="my-2">
                                <img src="/images/basic-img-1.png" alt="plane img 1" />
                            </div>
                            <h5>basic Plan</h5>
                            <h5>$19 <sub>/ Month </sub> </h5>
                            <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non iste eius, delectus nihil debitis libero consequuntur eaque reprehenderit. Incidunt aut ut unde molestias earum ad minus, saepe officia quia quas!</p>
                            <div className="my-3">
                                <Button className="" whichBtn={'filled'} btn={{ text: "Join Classes", url: "/join-classes" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid p-0 bg-light-gray">
                <div className="container-fluid bg-light-blue py-5">
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12">
                                <h6 className='about-us text-center text-md-start'>___ TESTIMONIALS </h6>
                                <h4 className='fw-bold about-us-title text-center text-md-start'>See Reviews From Our Clients</h4>
                                <p className='about-us-para text-center text-md-start'>Vivamus quis aenean mauris, ac ultricies massa. Duis vel convallis sapien aenean ut quam.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="card my-2 my-md-5 p-3 border-0 review-card active">
                                    <div className="card-body">
                                        <img className='my-2' src="/images/star-img.png" alt="start images" />
                                        <p className="card-text review-card-desc">
                                            Voluptatem asantium dolore mque laudan
                                            totam rem aperiam eaque ipsa quae invent.
                                            Sed ut perspiciatis unde omnis. </p>
                                        <h5 className="card-title review-card-name">Michael S. Puckett</h5>
                                        <span className='review-card-role'>Students</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <div className="card my-2 my-md-5 p-3 border-0 review-card">
                                    <div className="card-body">
                                        <img className='my-2' src="/images/star-img.png" alt="start images" />
                                        <p className="card-text review-card-desc">
                                            Voluptatem asantium dolore mque laudan
                                            totam rem aperiam eaque ipsa quae invent.
                                            Sed ut perspiciatis unde omnis. </p>
                                        <h5 className="card-title review-card-name">Aurora C. King</h5>
                                        <span className='review-card-role'>Students</span>
                                    </div>
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