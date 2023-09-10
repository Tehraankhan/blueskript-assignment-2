import React from 'react'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Comicview() {
    //here useNavigate is used to go back to previous page 
    const navigate = useNavigate()

    const location = useLocation();
    const data = [location.state];

    const creators = location.state.creators?.items
    const stories = location.state.stories?.items

    return (
        <>
            <div className='flex flex-row text-[red]'>
                <h1 className='mx-[auto] text-[40px]'>Marvel Explorer</h1>
            </div>


            <div className=' w-full mx-[auto] md:w-[1050px] md:mx-[auto]'>
                <button className='text-[yellow] ' onClick={() => { navigate(-1) }}><i className="fa-solid fa-arrow-left " style={{ color: '#ffdd00' }}></i>back</button>
                {data.map((elem) => {
                    return (
                        <>
                            <div className='flex flex-col text-[white]' >
                                <h1 className='text-[#565656] text-[20px] mx-[auto] md:mx-[0px]'>COMIC</h1>
                                <div className='flex flex-col md:flex-row'>
                                    <h1 className='text-[red] font-bold text-[30px] mx-[auto] md:mx-[0px]'>{elem.title}</h1>
                                    <img src={elem.thumbnail?.path + ".jpg"} className='mt-[10px] mx-[auto] w-[200px] h-[200px] rounded-[5px]'></img>
                                </div>
                                <div className='flex flex-col mt-[20px]'>

                                    <h1 className='text-[white] text-[30px] first-letter:'>ISBN NUMBER</h1>
                                    <p className='text-[#565656] text-[25px] '>{elem.isbn}</p>
                                </div>
                                <div className='flex flex-col mt-[20px]'>

                                    <h1 className='text-[white] text-[30px]'>DISCRIPTION</h1>
                                    <p className='text-[#565656] text-[25px]'>{elem.description}</p>
                                </div>



                                <h1 className='text-[white] text-[30px] mt-[20px]'>PRICE :- <span className='text-[#565656] text-[25px]'>{elem.prices[0].price}</span></h1>
                                <div className='flex flex-col mt-[20px]'>
                                    <h1>ON SALE DATE :- <span>{elem.dates[0].date.slice(0, 10)}</span></h1>
                                    <h1>FINAL ORDER CUTOFF :- <span>{elem.dates[1].date.slice(0, 10)}</span></h1>

                                </div>



                                <div className='flex flex-col mt-[20px]'>
                                    <h1 className='text-[white] text-[30px]'>RESOURCE URI</h1>
                                    <p className='text-[#565656] text-[17px]'>{elem.resourceURI}</p>

                                </div>
                                <div className='flex flex-col mt-[20px]'>
                                    <h1 className='text-[white] text-[30px]'>PAGE COUNT <span>{elem.pageCount}</span></h1>


                                </div>
                                <div className='flex flex-col mt-[20px]'>
                                    <h1 className='text-[white] text-[30px]'>SERIES</h1>
                                    <p className='text-[#565656] text-[25px]'>{elem.series.name}</p>

                                </div>
                                <div className='flex flex-col h-[200px] mt-[20px]'>
                                    <h1 className='text-[white] text-[30px]'>CREATORS <span className='bg-[#fdfd3e] rounded-[5px] text-[black]'>{elem.creators.available}</span></h1>

                                    <div className='h-[100px] overflow-y-auto'>
                                        {
                                            creators.map((elem1) => {
                                                return (<>

                                                    <h1 className='text-[white] text-[20px]'>{elem1.name}</h1>

                                                </>)
                                            })

                                        }</div>

                                </div>
                                <div className='flex flex-col h-[200px] mt-[20px]'>
                                    <h1 className='text-[white] text-[30px]'>STORIES <span className='px-[10px] py-[1px] bg-[#fdfd3e] rounded-[20px] text-[black]'>{elem.stories.available}</span></h1>

                                    <div className='h-[100px] overflow-y-auto'>
                                        {
                                            stories.map((elem1) => {
                                                return (<>

                                                    <h1 className='text-[#a1a1a1] text-[20px]'>{elem1.name}</h1>

                                                </>)
                                            })

                                        }</div>

                                </div>

                            </div >


                        </>


                    )



                })





                }
            </div>



        </>
    )
}
