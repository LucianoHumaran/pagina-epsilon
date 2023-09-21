import React from 'react';
import '../src/index.css';

function Footer() {
    return (
        <footer className="footer flex justify-center p-4 bg-[#262837] text-neutral-content border border-t
        border-gray-300 w-full">
            <div className="flex items-center justify-center">
                <img src="epsilon.png" alt="" className="w-10 h-10" />
                <p className="text-gray-300">Copyright © 2023 - All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
