import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show, setHandleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                setHandleShow(true);
            } else setHandleShow(false);
        });

        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img  
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <img  
                className="nav_avatar"
                src="https://avatars1.githubusercontent.com/u/39636292?s=460&u=a29bef077d71d9e8eff9624c63d6451cbd8f79df&v=4"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
