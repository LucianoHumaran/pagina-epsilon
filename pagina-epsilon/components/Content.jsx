import React from 'react';
import '../src/index.css';
import Cards from './sub-components/Cards'

const Content = () => {
    // Define un array de objetos con los datos
    const productos = [
        {
            id: 1,
            nombre: 'Roronoa Zoro',
            imagenSrc: 'zoro.png',
            descripcion: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi velit dignissimos doloremque eum voluptatum tempore eligendi blanditiis aut aliquid. Libero?',
            tallas: ['S', 'M', 'L', 'XL', 'XXL'],
            descuento: '$7400.99',
            precioOriginal: '$9200.20',
            nuevo: 'NUEVO', // Cambiado a string
        },
        {
            id: 2,
            nombre: 'Monkey D. Luffy',
            imagenSrc: 'Luffy.png',
            descripcion: 'eum voluptatum tempore eligendi blanditiis aut aliquid. Libero?',
            tallas: ['S', 'M', 'L', 'XL', 'XXL'],
            descuento: '$11400.99',
            precioOriginal: '$6200.99',
            nuevo: 'NUEVO', // Cambiado a string
        },
        {
            id: 3,
            nombre: 'Gold D. Roger',
            imagenSrc: 'gold.png',
            descripcion: 'eum voluptatum tempore eligendi blanditiis aut aliquid. Libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde itaque quos illum nam nulla??',
            tallas: ['S', 'M', 'L', 'XL', 'XXL'],
            descuento: '$8110.99',
            precioOriginal: '$5220.20',
            nuevo: 'NUEVO', // Cambiado a string
        },
        {
            id: 4,
            nombre: 'Edward Newgate',
            imagenSrc: 'barbablanca.png',
            descripcion: 'eum voluptatum tempore eligendi blanditiis aut aliquid. Libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde itaque quos illum nam nulla??',
            tallas: ['S', 'M', 'L', 'XL', 'XXL'],
            descuento: '$6110.99',
            precioOriginal: '$4220.20',
            nuevo: 'NUEVO', // Cambiado a string
        },
        {
            id: 5,
            nombre: 'Portgas D. Ace',
            imagenSrc: 'ace.png',
            descripcion: 'eum voluptatum tempore eligendi blanditiis aut aliquid. Libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde itaque quos illum nam nulla??',
            tallas: ['S', 'M', 'L', 'XL', 'XXL'],
            descuento: '$12110.99',
            precioOriginal: '$9220.20',
            nuevo: 'NUEVO', // Cambiado a string
        },
        {
            id: 6,
            nombre: 'Donquixote Doflamingo',
            imagenSrc: 'Doflamingo.png',
            descripcion: 'eum voluptatum tempore eligendi blanditiis aut aliquid. Libero Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde itaque quos illum nam nulla??',
            tallas: ['S', 'M', 'L', 'XL', 'XXL'],
            descuento: '$999999.99',
            precioOriginal: '$99999.99',
            nuevo: 'NUEVO', // Cambiado a string
        },
        // Agrega más productos si es necesario
    ];

    return (
        <Cards productos={productos} />
    );
};

export default Content;
