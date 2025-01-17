import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className='w-full'>
            <div className='bg-secondary p-6 flex justify-center '>
                <h2 className='text-white'>
                    &copy;{currentYear} StrikeClimate, All Rights Reserved.
                </h2>
            </div>
        </footer>
    )
}

export default Footer