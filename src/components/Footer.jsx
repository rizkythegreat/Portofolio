import React from "react";

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <div className="bg-gradient-to-b from-gray-800 to-black text-black">
            <div className="flex justify-center items-center">
                <div className="p-2 text-gray-400"
                >
                    <footer>
                    <p>Copyright © Rizky Rahman Salam {date}</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default Footer;