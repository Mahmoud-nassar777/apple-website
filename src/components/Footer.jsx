import React from 'react'
import { footerLinks } from '../constants'

const footer = () => {
  return (
    <footer className='py-5 sm:px-10 px-5' >
        <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-center text-sm " > 
                    more ways to shop: {''}
                    <span className="underline text-blue">
                         Find an Apple Store 
                    </span>
                    {''} or {''}
                    <span className="underline text-blue">
                         other retaier 
                    </span>
                    {''} near you.
                </p>
                <p className="font-semibold text-gray text-center text-sm " > 
                    or call +20-102-345-6789
                </p>
            </div>
            <div className='bg-neutral-700 my-5 h-[1px] w-full ' />

            <div className="flex md:flex-row flex-col md:items-center justify-between text-center ">
                <p className='font-semibold text-gray text-sm mb-6 ' >  Copright @ 2025 Apple Inc. All rights reserved </p>
                <div className="flex justify-center text-center flex-wrap ">
                    {footerLinks.map((link , i) => (
                        <p key={link} className='font-semibold text-gray text-xs  text-center' >
                            {link} {' '}
                            {i !== footerLinks.length - 1 && (
                                <span className='mx-2' > | </span>
                            ) }
                        </p>
                    ) )}
                </div>
            </div>

        </div>
    </footer>
  )
}

export default footer