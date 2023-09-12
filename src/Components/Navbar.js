import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
    //
    const [charactercolortab, setcharactercolortab] = useState({ color: 'white', borderBottomColor: '' })
    const [comiccolortab, setcomiccolortab] = useState({ color: 'white', borderBottomColor: '' })
    const location = useLocation()

    // here addColor() function is created so that whenever user click on the character tab or comic tab it will set the text color
    //and the bottom border color to yellow 
    const addColor = () => {
        if (location.pathname === "/") {
            setcharactercolortab({ color: 'yellow', borderBottom: '1px solid yellow' })
            setcomiccolortab({ color: 'white', borderBottom: '' })

        }
        else if (location.pathname === "/Comic") {
            setcharactercolortab({ color: 'white', borderBottom: '' })
            setcomiccolortab({ color: 'yellow', borderBottom: '1px solid yellow' })
        }

    }
    useEffect(() => {
        console.log("fh")
        addColor()

    }, [location])



    return (
        <div className='flex flex-row border-b-[0.1px] border-t-[0.1px] w-full h-[60px] border-[#565656] text-[white]' >
            <Link className='text-[30px]  mx-[auto]   mt-[7px]' to={'/'} style={charactercolortab} >CHARACTERS
            </Link>
            <Link className='text-[30px] mx-[auto]  mt-[7px]' to={{ pathname: '/Comic' }} style={comiccolortab}>COMICS</Link>

        </div>
    )
}

export default Navbar
