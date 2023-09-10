import React from 'react'
import Header from '../Components/Header'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import { fetchapi } from '../Store/apiSlice1'
import { STATUS } from '../Store/apiSlice1'

import { compose } from '@reduxjs/toolkit'


export default function Character() {

    const item = useSelector((state) => state.search.item)

    //here data and status is fetch by useSelector that can be used for rendering all the search Character data
    const data = useSelector((state) => state.api.data)
    const status = useSelector((state) => state.api.status)

    const navigate = useNavigate();




    const dispatch = useDispatch();

    //here orderby state  is created for filtering the api data
    const [orderby, setorderby] = useState("modified")

    const Input = (e) => {
        const { value } = e.target;
        setorderby(value)

    }
    //here variables are set for creating pagination system
    const [currentpage, setcurrenpage] = useState(1)
    const recordsperpage = 10
    const lastindex = currentpage * recordsperpage
    const firstindex = lastindex - recordsperpage
    const records = data.slice(firstindex, lastindex)
    const npage = Math.ceil(data.length / recordsperpage)

    const numbers = [...Array(npage + 1).keys()].slice(1)

    //to go to previous page
    const prevpage = () => {
        if (currentpage != 1) {
            setcurrenpage(currentpage - 1)
        }
    }
    //to go to next page 
    const nextpage = () => {
        if (currentpage != npage) {
            setcurrenpage(currentpage + 1)
        }
    }

    useEffect(() => {


        dispatch(fetchapi([item, orderby]))
    }, [dispatch, item, orderby])



    return (
        <>
            <Header />


            <div className='flex flex-col w-full border-t-[1px] border-[#adadad] h-[493px] lg:flex-row '>
                <div className='flex flex-col mx-[auto] w-[300px] h-[100px] lg:h-[492px]  lg:border-r-[1px]  lg:border-[#adadad]  '>
                    <div className='flex flex-row mx-[auto]'>
                        <h1 className='text-[white] mx-[auto] text-[20px]'> ORDER BY</h1>
                    </div>

                    <div className='flex flex-row w-full mx-[auto] lg:flex-col'>
                        <div className='mx-[auto] w-[80px] mt-[2px]'>
                            <div class="flex items-center mb-4 mx-[auto] ">
                                <input type="radio" name="orderby" defaultChecked={true} value="modified" onClick={Input} />
                                <label for="default-radio-1" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Modified</label>
                            </div>
                            <div class="flex items-center mb-4 mr-[auto] sm:mx-[auto]">
                                <input type="radio" name="orderby" value="name" onClick={Input}></input>
                                <label for="default-radio-1" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            </div>

                        </div>







                    </div>

                </div>
                <div className='w-full flex flex-col overflow-y-auto '>

                    {status === STATUS.loading && <p className='text-[white] text-[30px] '>loading.....</p>}
                    {status === STATUS.error && <p className='text-[white] text-[30px]'>something went wrong please check your internet connection</p>}

                    {status === STATUS.idle && records.map((elem) => {
                        return (<>


                            <div className=' flex flex-col flex-shrink-0 w-[240px] h-[500px]  bg-[#011e1e] mt-[20px] mx-[auto]  lg:flex-row lg:w-[1000px] lg:h-[130px]' onClick={() => { navigate('./View', { state: elem }) }}>
                                <div className='flex flex-col w-[240px] h-[200px]  lg:w-[100px] lg:h-[100px]  lg:mt-[15px] lg:ml-[8px]'>

                                    <img src={elem.thumbnail?.path + ".jpg"} className='w-[240px] h-[200px] rounded-[5px] lg:w-[100px] lg:h-[100px] lg:rounded-[5px]'></img>
                                </div>
                                <div className='flex flex-col  text-[white] h-[200px] w-[240px] lg:ml-[20px] lg:w-[700px] lg:h-[100px]'>
                                    <h1 className='font-bold text-[20px]'>{elem.name}</h1>
                                    <p className='text-[grey] text-ellipsis overflow-hidden ... lg:truncate ...'>{elem.description}</p>
                                    <div className='flex flex-row text-[black] text-[15px] font-bold mt-[25px] lg:mt-[8px]'>

                                        <h1 className='w-[150px]  bg-[#ffffa3] rounded-[5px] lg:ml-[8px]'>COMICS: {elem.comics?.available}</h1>
                                        <h2 className='w-[150px]  bg-[#ff9c9c] rounded-[5px] lg:ml-[8px]'>STORIES: {elem.stories?.available}</h2>
                                    </div>

                                </div>

                            </div>

                        </>)
                    })


                    }




                </div>




            </div>
            <div className=' mt-[24px] w-full h-[60px] bg-[#00020f]  text-[white]'>
                <div className='float float-right mr-[100px]'>
                    <button onClick={prevpage} className=''><i className="fa-solid fa-chevron-left" style={{ color: '#ffdd00' }} ></i></button>

                    {
                        numbers.map((n) => {
                            return (<>



                                <span className=" ml-[9px] px-[10px] rounded-[5px]" style={{ color: currentpage === n ? 'black' : '', background: currentpage === n ? 'yellow' : '' }}>{n}</span >

                            </>)
                        })

                    }

                    <button onClick={nextpage} className='ml-[9px]'><i className="fa-solid fa-chevron-right" style={{ color: '#ffdd00' }}></i></button>
                </div>



            </div >
        </>

    )
}

