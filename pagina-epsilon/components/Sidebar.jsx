import React from 'react'
import { RiWhatsappLine , RiHome3Line, RiInstagramLine, RiTShirt2Line} from "react-icons/ri";
import '../src/index.css'

function Sidebar() {
    return (
        <nav className='fixed bottom-0 left-0 bg-[#1F1D2B] w-full h-[8%] rounded-tl-xl rounded-tr-xl 
        border border-gray-700 flex text-slate-400 text-4xl items-center py-2 px-2 justify-between
        lg:hidden'>
            <button><RiHome3Line className='hover:text-white p-1' /></button>
            <button><RiInstagramLine className='hover:text-white p-1' /></button>
            <button><RiWhatsappLine className='hover:text-white p-1' /></button>            
            <button><RiTShirt2Line className='hover:text-white p-1' /></button>
        </nav>
    )
}

export default Sidebar