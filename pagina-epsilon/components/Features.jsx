import React from 'react'
import '../src/index.css'

const Features = () => {
    return (
        <section className="bg-white border-b py-8">
            <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                    ¿Qué ofrecemos?
                </h2>
                <div className="w-full mb-4">
                    <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>

                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                ★★★★★
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Calidad Premium.
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Creemos en la calidad sobre todas las cosas. Todas nuestras prendas están confeccionadas con los mejores materiales para ofrecerte la máxima comodidad y durabilidad.
                            </p>
                        </a>
                    </div>                  
                </div>

                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                ★★★★★
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Variedad en Talles
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Sabemos que cada cuerpo es único. Por eso, ofrecemos una amplia gama de tallas para que todos encuentren algo que les quede perfecto.
                            </p>
                        </a>
                    </div>                    
                </div>

                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                ★★★★★
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Envío Rápido y Seguro
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Entendemos que quieres recibir tus prendas lo más rápido posible. Ofrecemos envíos rápidos y seguros para que puedas disfrutar de tus compras en tiempo récord y con total tranquilidad.
                            </p>
                        </a>
                    </div>                   
                </div>

                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                ★★★★★
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Garantía de Devolución sin Problemas.
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Si alguna vez no estás completamente satisfecho con tu compra, ofrecemos una garantía de devolución sin problemas. Puedes devolver o cambiar cualquier prenda que no cumpla con tus expectativas.                            </p>
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                            <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                ★★★★★
                            </p>
                            <div className="w-full font-bold text-xl text-gray-800 px-6">
                                Ofertas y Descuentos Exclusivos
                            </div>
                            <p className="text-gray-800 text-base px-6 mb-5">
                                Mantente atento a nuestras ofertas y descuentos exclusivos para clientes.
                            </p>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Features;
