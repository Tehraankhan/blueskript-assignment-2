import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setsearch } from '../Store/searchSlice';
import Navbar from './Navbar'

function Header() {

    const dispatch = useDispatch()



    const Input = (e) => {

        dispatch(setsearch(e.target.value))
    }




    return (
        <>

            <div className=' flex flex-col w-full h-[200px] '>
                <div className='w-[300px] mx-[auto]'>

                    <h1 className="text-[40px] text-[#ca1515] mx-[auto] font-bold'>">Marvel Explorer</h1>
                </div>



                <Navbar />
                <div className='w-full border-b-[1px] border-[#565656] h-[80px]' >
                    <div className='flex flex-row w-full mx-[auto] '>
                        <input type='text' className='text-[white] pl-[9px] text-[20px] w-[350px] h-[50px] mx-[auto] mt-[18px] bg-[black] border-[1px] border-[#565656] lg:w-[900px]' placeholder='SEARCH' onChange={Input} ></input>

                    </div>


                </div>




            </div>
        </>

    )
}

export default Header
