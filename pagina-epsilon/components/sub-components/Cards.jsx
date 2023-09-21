import React from 'react';
import '../../src/index.css'

const Cards = ({ productos }) => {
    return (
        <main className='grid grid-cols-1 p-4 bg-[#262837] gap-28 pt-28 pb-20 md:grid-cols-2  lg:grid-cols-3'>
            {productos.map((producto) => (
                <div key={producto.id} className='flex flex-col rounded-xl items-center bg-slate-200 h-[100%] shadow-2xl justify-between'>
                    <img src={producto.imagenSrc} alt="" className='w-52 h-52 object-cover -mt-24' />
                    <div className='px-8 pt-2 flex flex-col gap-2 justify-center items-center'>
                        <h3 className='text-2xl text-gray-700'>{producto.nombre}{producto.nuevo && <span className='ml-4 badge badge-accent'>{producto.nuevo}</span>}</h3>
                        <p className='text-gray-700 -mb-2'>{producto.descripcion}</p>
                        <h3 className='text-lg text-gray-600 mb-1'>Talles disponibles:</h3>
                    </div>
                    <div className='flex flex-row justify-between w-full px-12 mb-1'>
                        {producto.tallas.map((talla, index) => (
                            <span key={index} className='badge badge-neutral text-lg text-white'>{talla}</span>
                        ))}
                    </div>
                    <h3 className='text-lg text-gray-600 mb-2'>¡Descuento por tiempo limitado!</h3>
                    <div className='flex flex-row justify-between w-full px-12'>
                        <span className='badge badge-neutral line-through text-lg'>{producto.precioOriginal}</span>
                        <span className='badge badge-accent text-lg'>{producto.descuento}</span>
                    </div>
                    <button className="bg-[#202020] hover:bg-[#262837] text-white font-bold mt-4 mb-2 py-2 px-4 rounded-full w-[80%]">
                        ¡La quiero!
                    </button>
                </div>
            ))}
        </main>
    );
};

export default Cards;
