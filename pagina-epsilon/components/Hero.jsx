import React from 'react'
import '../src/index.css'
//Components
import Countdown from '../components/sub-components/Countdown'

function Hero() {
    return (
        <section className='flex flex-col justify-center items-center bg-[#262837] h-[80vh] lg:flex-row'>
            <img src="epsilon.png" alt="" className='w-64 h-64 mt-10 md:h-96 md:w-96' />
            <div className="hero h-full bg-[#262837]">
                <div className="hero-content text-center flex flex-col">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold text-gray-300">Epsilon</h1>
                        <p className="pt-4 text-gray-300">¡No te pierdas nuestras exclusivas ofertas por tiempo limitado! 💎 ¡Date el gusto de lucir con la máxima calidad en cada prenda</p>
                    </div>
                    <button className="bg-[#1DCDBC] hover:bg-[#1dcdbbce] text-white font-bold mb-6 py-2 px-4 rounded-full w-[80%]">
                        Ver diseños
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Hero