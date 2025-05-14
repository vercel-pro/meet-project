import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const HomeComponent = () => {

    const [romeCode, setRoomCode] = useState("");

    const navigate = useNavigate();

    const handleNavigate = (e) =>{
        e.preventDefault()
        if( !romeCode ){
            alert("Please Enter your room code.");
            return
        }
        navigate("/call-room")
    }
    return (
        <>
            {/* To change Title text use <helmet> */}
            <Helmet>
                <title>Meet Room</title>
            </Helmet>
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="w-[500px] bg-white border border-gray-200 rounded-md shadow-md p-5">
                        <h1 className='text-xl text-[#333] font-bold'>Add the Room Link here</h1>
                        <form className='flex flex-col mt-5'>
                            <input type="text" placeholder='Enter your meeting code' onChange={(e)=>setRoomCode(e.target.value)} className='w-full border border-gray-200 rounded-md p-2 outline-0'/>
                            <button onClick={handleNavigate} className='bg-blue-100 p-5 text-lg font-bold rounded-md mt-3 cursor-pointer duration-300 hover:bg-blue-300 hover:text-white'>Join Room</button>
                        </form>
                    </div>  
                </div>
        </>
    );
};

export default HomeComponent;