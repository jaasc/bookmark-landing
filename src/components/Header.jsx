import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import React, { useState } from "react";
import close from "../assets/images/icon-close.svg";
import facebook from "../assets/images/icon-facebook.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import twitter from "../assets/images/icon-twitter.svg";
import logoWhite from "../assets/images/logo-bookmark-white.svg";
import logo from "../assets/images/logo-bookmark.svg";

function Header(){
    const navigations = ["features", "pricing", "contact"]
    const socials = [facebook, twitter]
    const [toggleMenu, setToggleMenu] = useState(false)

    toggleMenu ? disableBodyScroll(document) : enableBodyScroll(document)

    return(
        <header className={`p-[2em] md:px-[3em] flex justify-between 
            ${toggleMenu && 'bg-veryDarkBlue/[95%] absolute w-full h-full text-white flex-col z-[100]'}
            `}>
            <div className="flex justify-between items-center w-full">
                <div>
                    <img 
                        src={toggleMenu ? logoWhite : logo} 
                        alt="bookmark logo"
                        
                        />
                </div>
                <div className="flex items-center cursor-pointer h-fit my-auto">
                    <img 
                        src={toggleMenu ? close : hamburger} 
                        alt="menu"
                        onClick={() => setToggleMenu(!toggleMenu)}
                        className="block sm:hidden"
                        />
                </div>
            </div>
            <div className={`sm:flex ${toggleMenu ? 'flex flex-col h-full justify-between' : 'hidden'}`}>
                <nav className={`flex text-center items-center ${toggleMenu && 'flex-col'}`}>
                    <ul className={`flex w-full ${toggleMenu && 'flex-col pt-[3em] pb-[2em]'}`}>
                        {
                            navigations.map(nav => 
                                <a 
                                    key={nav}
                                    href="#" 
                                    className={`uppercase ${toggleMenu ? 'w-[80%] mx-auto py-[1em] odd:border-y-[1px] odd:border-white/20' : 'even:mx-[1em] md:even:mx-[1.5em] lg:even:mx-[2em]'}`}>
                                    <li className={`tracking-[1px] text-grayishBlue ${toggleMenu && 'text-2xl text-[white] font-[300] tracking-[2px]'} hover:text-softRed`}>
                                        {nav}
                                    </li>
                                </a>    
                            )
                        }
                    </ul>
                    <button className={`uppercase text-white bg-softRed rounded tracking-[1px] px-[2em] py-[.5em] shadow-md ${toggleMenu ? 'bg-transparent text-2xl font-[300] border-[2px] tracking-[2px] border-white w-[80%] hover:bg-transparent hover:border-white' : 'ml-[1em] md:ml-[1.5em] lg:ml-[2em]'} hover:text-softRed hover:bg-white border-softRed border-[2px]`}>
                        Login
                    </button>
                </nav>
                <div className={toggleMenu ? 'flex justify-center' : 'hidden'}>
                    {
                        socials.map(icon =>
                            <a 
                                key={icon}
                                href="#"
                                className="mx-[1em] cursor-pointer hover:scale-[1.1]"
                                >
                                <img 
                                    src={icon} 
                                    alt="social" 
                                    className="h-full"
                                    />
                            </a>    
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header