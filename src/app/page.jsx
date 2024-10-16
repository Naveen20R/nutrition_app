import React from 'react';
import '@/styles/homeStyle.css';
import Navbar01 from '@/components/navbar/Navbar01';
import Form from '@/components/form/Form';
import Button from '@/components/form/Button';
import Footer01 from '@/components/footer/Footer01';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 


function page() {
  return (
    <>
      <Navbar01 />
      <div class="container-fluid banner">
        <div className="container">
          <div className="row">
            <div className="col-12 my-auto">
              <div className="banner-content">
                <h1 className='banner-title my-auto'>Healthy food & nutrition gives you good life.</h1>
                <p className='banner-desc'>Curabitur quis velit vel eros mollis viverra. Donec vel nibh vel arcu egesv ulputate finibus ac tincidunt massa. Nulla facilisi pellente.</p>
                <div className="my-1">
                  <Button className="mx-2" whichBtn={'filled'} btn={{ text: "Get Started" }} />

                  <a href="" className='mb-5'> <button className='filled-button button-animation border-0'>Get Started</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards start */}
      {/* <div className="container banner-hover-card" >
        <div className="row banner-main-card" style={{ border: '20px solid purple' }}>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="single-card bg-white">
              <div className="card-img mx-auto my-2">
                <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
              </div>
              <h5 className='card-title text-center'>health strategy</h5>
              <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="single-card bg-white">
              <div className="card-img mx-auto my-2">
                <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
              </div>
              <h5 className='card-title text-center'>health strategy</h5>
              <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="single-card bg-white">
              <div className="card-img mx-auto my-2">
                <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
              </div>
              <h5 className='card-title text-center'>health strategy</h5>
              <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3 my-3">
            <div className="single-card bg-white">
              <div className="card-img mx-auto my-2">
                <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
              </div>
              <h5 className='card-title text-center'>health strategy</h5>
              <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* cards end */}


      <div className="container-fluid  about-us-row">
        <div className="container home-about-us">
          <div className="row banner-main-card">
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="single-card bg-white">
                <div className="card-img mx-auto my-2">
                  <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
                </div>
                <h5 className='card-title text-center'>health strategy</h5>
                <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="single-card bg-white">
                <div className="card-img mx-auto my-2">
                  <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
                </div>
                <h5 className='card-title text-center'>health strategy</h5>
                <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="single-card bg-white">
                <div className="card-img mx-auto my-2">
                  <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
                </div>
                <h5 className='card-title text-center'>health strategy</h5>
                <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div className="single-card bg-white">
                <div className="card-img mx-auto my-2">
                  <img className='img-fluid w-100 h-100' src="/images/icon-1.png" alt="klklk" />
                </div>
                <h5 className='card-title text-center'>health strategy</h5>
                <p className='card-desc text-center'>Teritatis et quasi archite cto perspiciati.</p>
              </div>
            </div>
          </div>
          <div className="row about-us-content">
            <div className="col-12 my-3 my-md-0 col-md-6">
              <div className="about-us-main">
                <div className="about-us-img w-100 h-100">
                  <img className='img-fluid w-100 h-100' src="/images/about-us-image.jpg" alt="about us img" />
                  <div className="about-us-note p-1 p-md-2 row m-0">
                    <h4 className='note-count mb-0'>15 +</h4>
                    <p className='note-desc ms-1'>Years Of Experiene</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="p-2 my-4 my-md-0 p-md-5">
                <div className="">
                  <h6 className='about-us text-center text-md-start'>ABOUT US</h6>
                  <h4 className='fw-bold about-us-title'>we provide best weight loss support in town</h4>
                  <p className='about-us-para'>Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore mque laudantium, totam rem aperiam eaque ipsa quae ab illo invent. Sed ut perspiciatis unde omnis.</p>
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-start gap-3">
                  <div className="">
                    <img className='' src="/images/checkbox-orange.png" alt="check box" />
                  </div>
                  <div className="">
                    <h5 className='about-list-title  fw-medium m-0 mb-2'>weight loss daily service</h5>
                    <p className='about-list-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lobortis rutrum. Maecenas laoreet tristique auctor.</p>
                  </div>
                </div>
                <div className="mb-4 d-flex justify-content-center align-items-start gap-3">
                  <div className="">
                    <img className='' src="/images/checkbox-green.png" alt="check box" />
                  </div>
                  <div className="">
                    <h5 className='about-list-title  fw-medium m-0 mb-2'>weight loss daily service</h5>
                    <p className='about-list-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam lobortis rutrum. Maecenas laoreet tristique auctor.</p>
                  </div>
                </div>
                <div className="my-1">
                  <a href="" className='mb-5'> <button className='filled-button button-animation border-0'>Get Started</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* our services start */}
      <div className="conatiner-fluid apply-bg">
        <div className="container">
          <div className="row service-heading">
            <div className="col-12 col-md-6 my-3 my-md-5">
              <div className="">
                <h6 className='about-us text-center text-md-start'>OUR SERVICE</h6>
                <h2 className='fw-bold fs-2 w-100 text-center service-para text-md-start w-md-50'>We create best program for you</h2>
              </div>
            </div>
            <div className="col-12 col-md-6 my-3 my-md-5 d-flex justify-content-center justify-content-md-end">
              <div className="service-call d-flex justify-content-end align-items-center">
                <div className="">
                  <img className='w-100 h-100' src="/images/call-img.png" alt="call img" />
                </div>
                <div className="call-number d-flex justify-content-center align-items-center">
                  <p className='my-auto'>Call Now: +1(888) 1234-5678</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div class="card border-0 service-card">
                <img class="card-img-top" src="/images/card-img-1.jpg" alt="Card image cap" />
                <div class="card-body">
                  <div className="d-flex p-3 justify-content-between align-items-center">
                    <div className="">
                      <h5 class="service-card-title">Card title</h5>
                      <p class="service-card-para">Therapy</p>
                    </div>
                    <div className="">
                      <a href="">
                        <div className="right-arrow-img">
                          <img className='w-100 h-100' src="/images/right-arrow.png" alt="right arrow" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div class="card border-0 service-card">
                <img class="card-img-top" src="/images/card-img-1.jpg" alt="Card image cap" />
                <div class="card-body">
                  <div className="d-flex p-3 justify-content-between align-items-center">
                    <div className="">
                      <h5 class="service-card-title">Card title</h5>
                      <p class="service-card-para">Therapy</p>
                    </div>
                    <div className="">
                      <a href="">
                        <div className="right-arrow-img">
                          <img className='w-100 h-100' src="/images/right-arrow.png" alt="right arrow" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div class="card border-0 service-card">
                <img class="card-img-top" src="/images/card-img-1.jpg" alt="Card image cap" />
                <div class="card-body">
                  <div className="d-flex p-3 justify-content-between align-items-center">
                    <div className="">
                      <h5 class="service-card-title">Card title</h5>
                      <p class="service-card-para">Therapy</p>
                    </div>
                    <div className="">
                      <a href="">
                        <div className="right-arrow-img">
                          <img className='w-100 h-100' src="/images/right-arrow.png" alt="right arrow" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 my-3">
              <div class="card border-0 service-card">
                <img class="card-img-top" src="/images/card-img-1.jpg" alt="Card image cap" />
                <div class="card-body">
                  <div className="d-flex p-3 justify-content-between align-items-center">
                    <div className="">
                      <h5 class="service-card-title">Card title</h5>
                      <p class="service-card-para">Therapy</p>
                    </div>
                    <div className="">
                      <a href="">
                        <div className="right-arrow-img">
                          <img className='w-100 h-100' src="/images/right-arrow.png" alt="right arrow" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* our services end */}

        {/* weight loss start */}
        <div className="container">
          <div className="row weight-section">
            <div className="col">
              <h2 className='elementor-heading-title text-center'>how to solve weight loss problems</h2>
              <p className='elementor-para text-center'>Teritatis et quasi architecto. Sed ut perspiciatis unde.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 mb-4">
              <div class="card weight-card">
                <div className="d-flex justify-content-center align-items-start  gap-2">
                  <div className="">
                    <img src="/images/health-img-1.png" alt="weight loss img 1" />
                  </div>
                  <div class="card-body">
                    <h5 class="weight-card-title">Weekly diet planning</h5>
                    <p class="weight-card-para">
                      Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                    <a href="#" class="weight-card-link">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div class="card weight-card">
                <div className="d-flex justify-content-center align-items-start  gap-2">
                  <div className="">
                    <img src="/images/health-img-1.png" alt="weight loss img 1" />
                  </div>
                  <div class="card-body">
                    <h5 class="weight-card-title">Weekly diet planning</h5>
                    <p class="weight-card-para">
                      Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                    <a href="#" class="weight-card-link">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div class="card weight-card">
                <div className="d-flex justify-content-center align-items-start  gap-2">
                  <div className="">
                    <img src="/images/health-img-1.png" alt="weight loss img 1" />
                  </div>
                  <div class="card-body">
                    <h5 class="weight-card-title">Weekly diet planning</h5>
                    <p class="weight-card-para">
                      Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                    <a href="#" class="weight-card-link">Read More</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div class="card weight-card">
                <div className="d-flex justify-content-center align-items-start  gap-2">
                  <div className="">
                    <img src="/images/health-img-1.png" alt="weight loss img 1" />
                  </div>
                  <div class="card-body">
                    <h5 class="weight-card-title">Weekly diet planning</h5>
                    <p class="weight-card-para">
                      Proin id commodo nisl. Fusce sollicitudin massa ex, eu volutpat urna auctor in non gravida ante a sagittis.</p>
                    <a href="#" class="weight-card-link">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bg content start */}
        <div className="container-fluid bg-img-2">
          <div className="row ">
            <div className="col p-0">
              <div className="bg-section mx-auto my-auto d-flex justify-content-center align-items-center flex-column">
                <div>
                  <img className="mc-auto" src="/images/roket-img.png" alt="rocket image" />
                </div>
                <h2 className="bg-title">Join today our classes & get promotional offers</h2>
                <p className="bg-para">
                  Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                  dolore mque laudantium, totam rem aperiam eaque ipsa quae.
                </p>
                <div className="my-1">
                  <a href="#"><button className="filled-button button-animation border-0">Join Classes</button></a>
                </div>
                <ul className='bg-ul-list my-3 d-flex justify-content-start gap-1 gap-md-5 align-items-center flex-wrap'>
                  <li>Modern Class Environment</li>
                  <li>15+ students each classes</li>
                  <li>24×7 online support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* bg content end */}

      </div>

      {/* reviews start */}
      <div className="container-fluid review-parent p-0">
        <div className="container-fluid review-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="">
                  <h6 className='about-us text-center text-md-start'>TESTIMONIALS</h6>
                  <h2 className='fw-bold fs-2 w-100 text-center review-heading text-md-start w-md-50'>See Reviews From Our Clients</h2>
                  <p className='fw-normal review-desc'>Curabitur vitae elit orci. Nulla blandit lobortis dolor eget faucibus massa maximus vel. Cras a venenatis erat.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="review-persons-img">
                  <div className="reviwers-img rounded-circle">
                    <img className=' w-100 h-100 rounded-circle' src="/images/review-img-1.jpg" alt="review image" />
                  </div>
                  <div className="reviwers-img rounded-circle">
                    <img className=' w-100 h-100 rounded-circle' src="/images/review-img-1.jpg" alt="review image" />
                  </div>
                  <div className="reviwers-img rounded-circle">
                    <img className=' w-100 h-100 rounded-circle' src="/images/review-img-1.jpg" alt="review image" />
                  </div>
                  <div className="reviwers-img rounded-circle">
                    <img className=' w-100 h-100 rounded-circle' src="/images/review-img-1.jpg" alt="review image" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3 mt-md-0">
              <div className="col-12 col-md-4">
                <div class="card my-2 my-md-5 p-3 border-0 review-card">
                  <div class="card-body">
                    <img className='my-2' src="/images/star-img.png" alt="start images" />
                    <p class="card-text review-card-desc">
                      Voluptatem asantium dolore mque laudan
                      totam rem aperiam eaque ipsa quae invent.
                      Sed ut perspiciatis unde omnis. </p>
                    <h5 class="card-title review-card-name">Michael S. Puckett</h5>
                    <span className='review-card-role'>Students</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div class="card  my-2 my-md-5 p-3 border-0 review-card active">
                  <div class="card-body">
                    <img className='my-2' src="/images/star-img.png" alt="start images" />
                    <p class="card-text review-card-desc">
                      Voluptatem asantium dolore mque laudan
                      totam rem aperiam eaque ipsa quae invent.
                      Sed ut perspiciatis unde omnis. </p>
                    <h5 class="card-title review-card-name">Michael S. Puckett</h5>
                    <span className='review-card-role'>Students</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div class="card  my-2 my-md-5 p-3 border-0 review-card">
                  <div class="card-body">
                    <img className='my-2' src="/images/star-img.png" alt="start images" />
                    <p class="card-text review-card-desc">
                      Voluptatem asantium dolore mque laudan
                      totam rem aperiam eaque ipsa quae invent.
                      Sed ut perspiciatis unde omnis. </p>
                    <h5 class="card-title review-card-name">Michael S. Puckett</h5>
                    <span className='review-card-role'>Students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cinatiner-fluid feedback-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="d-flex mt-5 justify-content-center my-auto align-items-start flex-column">
                  <h6 className='about-us text-center mx-auto mx-md-start w-100 text-md-start'>GET FREE CONSULTATION</h6>
                  <h2 className='fw-medium mb-2 fs-2 w-100 text-center review-heading text-md-start w-md-50'>Visit Our Studio to Understand the Difference</h2>
                  <p className='fw-normal review-desc text-center text-md-start'>Curabitur vitae elit orci. Nulla blandit lobortis dolor, eget faucibus massa maximus vel. Cras a venenatis erat. Aliquam interdum lectus eget fringilla pharetra. Nullam dictum condimentum sagittis.</p>
                  <div className="container my-5">
                    <div className="row gap-2">
                      <div className="col-6 feed-back-border-right">
                        <img src="/images/feed-back-img-1.png" alt="feed back image" />
                        <h3 className='feed-back-title fw-normal'>our office location</h3>
                        <p className='feed-back-para fw-medium'>121 King St, Melbourne VIC 3000, Australia</p>
                      </div>
                      <div className="col">
                        <img src="/images/feed-back-img-2.png" alt="feed back image" />
                        <h3 className='feed-back-title fw-normal'>our office location</h3>
                        <p className='feed-back-para fw-medium'>121 King St, Melbourne VIC 3000, Australia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* reviews end */}

      {/* weight loss end */}

      {/* footer start */}
      <Footer01 />
      {/* footer end */}
    </>
  )
}

export default page