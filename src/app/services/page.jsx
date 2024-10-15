import Navbar01 from '@/components/navbar/Navbar01'
import React from 'react';
import "@/styles/homeStyle.css";
import "@/styles/serviceStyle.css";
import Footer01 from '@/components/footer/Footer01';

function page() {
    return (
        <>
            <Navbar01 />
            <div className="container-fluid p-0 bg-light-gray">
                <div className="container-fluid py-5 bg-light-blue">

                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-center">
                                    <h6 className='about-us text-center'>___ OUR SERVICE </h6>
                                    <h4 className='fw-bold about-us-title'>we help clients solve complex problems</h4>
                                    <p className='about-us-para'>Utenim ad minim veniam nostrud exerci.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card border-0 service-card-img">
                                    {/* <div className="card-nested-img"> */}
                                    <img className='card-nested-img card-img-top' src="/images/service-card-img-1.jpg" alt="card img" />
                                    {/* </div> */}
                                    <div className="card-body service-card-content">
                                        <div className="service-card-style mx-auto my-2"></div>
                                        <h5 className="service-card-heading text-center">Weight Loss Program</h5>
                                        <p className="service-card-para text-center">Curabitur pellentesque nibh.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card border-0 service-card-img">
                                    {/* <div className="card-nested-img"> */}
                                    <img className='card-nested-img card-img-top' src="/images/service-card-img-2.jpg" alt="card img" />
                                    {/* </div> */}
                                    <div className="card-body service-card-content">
                                        <div className="service-card-style mx-auto my-2"></div>
                                        <h5 className="service-card-heading text-center">Weight Loss Program</h5>
                                        <p className="service-card-para text-center">Curabitur pellentesque nibh.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card border-0 service-card-img">
                                    {/* <div className="card-nested-img"> */}
                                    <img className='card-nested-img card-img-top' src="/images/service-card-img-1.jpg" alt="card img" />
                                    {/* </div> */}
                                    <div className="card-body service-card-content">
                                        <div className="service-card-style mx-auto my-2"></div>
                                        <h5 className="service-card-heading text-center">Weight Loss Program</h5>
                                        <p className="service-card-para text-center">Curabitur pellentesque nibh.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card border-0 service-card-img">
                                    {/* <div className="card-nested-img"> */}
                                    <img className='card-nested-img card-img-top' src="/images/service-card-img-1.jpg" alt="card img" />
                                    {/* </div> */}
                                    <div className="card-body service-card-content">
                                        <div className="service-card-style mx-auto my-2"></div>
                                        <h5 className="service-card-heading text-center">Weight Loss Program</h5>
                                        <p className="service-card-para text-center">Curabitur pellentesque nibh.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card border-0 service-card-img">
                                    {/* <div className="card-nested-img"> */}
                                    <img className='card-nested-img card-img-top' src="/images/service-card-img-1.jpg" alt="card img" />
                                    {/* </div> */}
                                    <div className="card-body service-card-content">
                                        <div className="service-card-style mx-auto my-2"></div>
                                        <h5 className="service-card-heading text-center">Weight Loss Program</h5>
                                        <p className="service-card-para text-center">Curabitur pellentesque nibh.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4 mb-5">
                                <div className="card border-0 service-card-img">
                                    {/* <div className="card-nested-img"> */}
                                    <img className='card-nested-img card-img-top' src="/images/service-card-img-1.jpg" alt="card img" />
                                    {/* </div> */}
                                    <div className="card-body service-card-content">
                                        <div className="service-card-style mx-auto my-2"></div>
                                        <h5 className="service-card-heading text-center">Weight Loss Program</h5>
                                        <p className="service-card-para text-center">Curabitur pellentesque nibh.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <h4 className='fw-bold about-us-title'>how to solve weight loss problems</h4>
                                <p className='about-us-para'>Teritatis et quasi architecto. Sed ut perspiciatis unde.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card weight-card">
                                <div className="d-flex justify-content-center align-items-start  gap-2">
                                    <div className="">
                                        <img src="/images/health-img-1.png" alt="weight loss img 1" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="weight-card-title">Weekly diet planning</h5>
                                        <p className="weight-card-para">
                                            Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                                        <a href="#" className="weight-card-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card weight-card">
                                <div className="d-flex justify-content-center align-items-start  gap-2">
                                    <div className="">
                                        <img src="/images/health-img-1.png" alt="weight loss img 1" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="weight-card-title">Weekly diet planning</h5>
                                        <p className="weight-card-para">
                                            Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                                        <a href="#" className="weight-card-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card weight-card">
                                <div className="d-flex justify-content-center align-items-start  gap-2">
                                    <div className="">
                                        <img src="/images/health-img-1.png" alt="weight loss img 1" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="weight-card-title">Weekly diet planning</h5>
                                        <p className="weight-card-para">
                                            Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                                        <a href="#" className="weight-card-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                            <div className="card weight-card">
                                <div className="d-flex justify-content-center align-items-start  gap-2">
                                    <div className="">
                                        <img src="/images/health-img-1.png" alt="weight loss img 1" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="weight-card-title">Weekly diet planning</h5>
                                        <p className="weight-card-para">
                                            Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                                        <a href="#" className="weight-card-link">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container py-0 py-md-5">
                    <div className="row mt-5">
                        <div className="col-12 col-md-12 col-lg-6">
                            <h6 className='about-us text-center text-md-start'>___ OUR PROCESS</h6>
                            <h4 className='fw-bold about-us-title text-center text-md-start'>how to get our service</h4>
                            <p className='about-us-para text-center text-md-start'>Utenim ad minim veniam quis nostrud exercitat ullamco laboris nisi aliquip ex ea commodo consequat pharetra laoreet leo.</p>
                            {/* </div>
                           <div className="col-12 col-md-6"> */}
                            <div className="my-3 d-flex flex-md-row flex-column justify-content-center justify-content-md-start align-items-center gap-2 gap-md-5">
                                <div className="">
                                    <img src="/images/process-img-1.png" alt="process img" />
                                </div>
                                <div className="">
                                    <h5 className='process-heading text-center text-md-start'>health problems options</h5>
                                    <p className='process-desc text-center text-md-start'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                            <div className="my-3 d-flex flex-md-row flex-column justify-content-center justify-content-md-start align-items-center gap-2 gap-md-5">
                                <div className="">
                                    <img src="/images/process-img-2.png" alt="process img" />
                                </div>
                                <div className="">
                                    <h5 className='process-heading text-center text-md-start'>health problems options</h5>
                                    <p className='process-desc text-center text-md-start'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                            <div className="my-3 d-flex flex-md-row flex-column justify-content-center justify-content-md-start align-items-center gap-2 gap-md-5">
                                <div className="">
                                    <img src="/images/process-img-1.png" alt="process img" />
                                </div>
                                <div className="">
                                    <h5 className='process-heading text-center text-md-start'>health problems options</h5>
                                    <p className='process-desc text-center text-md-start'>Duis vel convallis sapien. Aenean ut quam luctus quis
                                        ullamcorper dignissim eu turpis utnulla.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
                            <div className="process-imgs-container d-flex justify-content-center flex-column flex-md-row flex-lg-row flex-wrap align-items-center gap-3">
                                <div className="process-imgs">
                                    <img className='w-100 h-100' src="/images/process-img-1.jpg" alt="process img" />
                                </div>
                                <div className="process-imgs">
                                    <img className='w-100 h-100' src="/images/process-img-2.jpg" alt="process img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row my-3">
                        <div className="col-12 col-md-6 col-lg-3 mb-3 ">
                            <div className="card p-5 service-count">
                                <h2 className='service-count mx-auto fw-bold m-0 p-0'>15K</h2>
                                <span className='service-count-para mx-auto fw-medium p-0 m-0'>satisfied clients</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3 ">
                            <div className="card p-5 service-count">
                                <h2 className='service-count mx-auto fw-bold m-0 p-0'>813K</h2>
                                <span className='service-count-para mx-auto fw-medium p-0 m-0'>active members</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3 ">
                            <div className="card p-5 service-count">
                                <h2 className='service-count mx-auto fw-bold m-0 p-0'>43</h2>
                                <span className='service-count-para mx-auto fw-medium p-0 m-0'>professional experts</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 mb-3 ">
                            <div className="card p-5 service-count">
                                <h2 className='service-count mx-auto fw-bold m-0 p-0'>03</h2>
                                <span className='service-count-para mx-auto fw-medium p-0 m-0'>Office Locations</span>
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
                <div className="container my-5">
                    <div className="row my-5">
                        <div className="col-12">
                            <h4 className='fw-bold about-us-title text-center'>frequently ask questions</h4>
                            <p className='about-us-para text-center'>Vivamus quis tempus mauris ac ultricies massa. Duis vel convallis sapien aenean.</p>
                        </div>
                        <div className="col-12 col-md-6 mx-auto my-5">
                            <div className="accordion border-0 rounded-0" id="accordionExample">
                                <div className="accordion-item border-0 mb-2">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            How I Get This Service Properly?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum ultricies justo, eget aliquam ante lobortis sit amet. Mauris placerat enim iaculis suscipit tincidunt. Donec urna felis, dapibus vitae arcu id, molestie sagittis turpis. Praesent placerat mi vitae ligula bibendum euismod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item  border-0 mb-2">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Can I get Personal Trainer ?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum ultricies justo, eget aliquam ante lobortis sit amet. Mauris placerat enim iaculis suscipit tincidunt. Donec urna felis, dapibus vitae arcu id, molestie sagittis turpis. Praesent placerat mi vitae ligula bibendum euismod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            How To i Get Membership ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum ultricies justo, eget aliquam ante lobortis sit amet. Mauris placerat enim iaculis suscipit tincidunt. Donec urna felis, dapibus vitae arcu id, molestie sagittis turpis. Praesent placerat mi vitae ligula bibendum euismod.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item border-0 mb-2">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button fw-bold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            How Long This Can Work ?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum ultricies justo, eget aliquam ante lobortis sit amet. Mauris placerat enim iaculis suscipit tincidunt. Donec urna felis, dapibus vitae arcu id, molestie sagittis turpis. Praesent placerat mi vitae ligula bibendum euismod.</p>
                                        </div>
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