import React from 'react';

function Button({ whichBtn, btn = {} }) {
    const { url = '#', text = "Get Information Now" } = btn; // Destructure with default values

    return (
        // {
        //     whichBtn == "filled" ? <a href={url} className='mb-5'>
        //     <button className='banner-startbtn button-animation border-0'>
        //         {text}
        //     </button>
        // </a> :
        //     <a href={url} className='mb-5'>
        //         <button className='banner-startbtn button-animation border-0'>
        //             {text}
        //         </button>
        //     </a> 

        // }

        <a href={url} className='mb-5'>
            <button className={`${whichBtn == "outline" ? "outline" : "filled"}-button button-animation border-0`}>
                {text}
            </button>
        </a>

    );
}

export default Button;
