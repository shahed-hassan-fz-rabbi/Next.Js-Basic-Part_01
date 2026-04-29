import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const navItem = [
        {
            path : "/",
            text: "Home"
        },

        {
            path: "/blogs",
            text: "Blogs"
        },

        {
            path: "/contact",
            text: "Contact"
        }
    ]

    return (
        <div>

            {
                navItem.map((item) =>(

                    <Link key={item.path} href={item.path}>
                        {item.text}
                    
                    </Link>

            ))}
            
        </div>
    );
};

export default Navbar;