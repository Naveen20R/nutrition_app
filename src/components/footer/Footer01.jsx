import React from 'react'

function Footer01() {
    return (
        <>
            <div className="conatiner-fluid">
                <div className="container py-4">
                    <div className="row footer-row border-bottom">
                        <div className="col-12 col-md-6 py-3">
                            <div className="flex-wrap d-flex justify-content-center gap-3 gap-md-5  justify-content-md-start align-items-center">
                                <img className='' src="/images/footer-logo-1.png" alt="logo img" />
                            </div>
                        </div>
                        <div className="col-12 col-md-6 py-3">
                            <ul className='footer-linkls flex-wrap d-flex justify-content-center gap-3 gap-md-3 gap-lg-4  justify-content-md-end align-items-center'>
                                <li><a href="">Home</a></li>
                                <li><a href="">About</a></li>
                                <li><a href="">Service</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Contact</a></li>
                                <li><a href="">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row py-3" >
                        <div className="col-12 col-md-6">
                            <p className='text-center text-md-start'>© 2022 RadiantThemes. All Rights Reserved.</p>
                        </div>
                        <div className="col-12 col-md-6">
                            <ul className='footer-share-links my-2 flex-wrap d-flex justify-content-center gap-3 gap-md-4  justify-content-md-end align-items-center'>
                                <li><a href=""><i class="fa-brands fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer01