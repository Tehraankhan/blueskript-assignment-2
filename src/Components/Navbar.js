import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className='flex flex-row border-b-[0.1px] border-t-[0.1px] w-full h-[60px] border-[#565656] text-[white]'>
            <Link className='text-[23px] mx-[auto]  hover:text-[yellow] mt-[8px]' to={'/'} >CHARACTERS</Link>
            <Link className='text-[23px] mx-[auto] hover:text-[yellow] mt-[8px]' to={{ pathname: '/Comic' }}>COMICS</Link>

        </div>
    )
}

export default Navbar
