import React from "react";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import logo from "../assets/images/logo-bookmark-white.svg";

function Footer(){
    const navigations = ["features", "pricing", "contact"]
    const socials = [facebook, twitter]

    return(
        <div className="p-[2em] bg-veryDarkBlue text-white flex flex-col items-center md:flex-row md:justify-between md:px-[3em] lg:px-[5em]">
            <div>
                <img 
                    src={logo} 
                    alt="bookmark logo"
                    />
            </div>
            <nav className="py-[1em] md:mr-auto">
                    <ul className="flex flex-col w-full text-center md:ml-[3em] md:flex-row lg:even:ml-[4em]">
                        {
                            navigations.map(nav => 
                                <a 
                                    key={nav}
                                    href="#" 
                                    className="uppercase odd:my-[1em] md:odd:my-0 md:even:mx-[2em] lg:even:mx-[3em] hover:text-softRed">
                                    <li className="tracking-[1px]">
                                        {nav}
                                    </li>
                                </a>    
                            )
                        }
                    </ul>
                </nav>
                <div className="flex justify-center">
                    {
                        socials.map(icon =>
                            <a 
                                key={icon}
                                href="#"
                                className="mx-[1em] cursor-pointer hover:scale-[1.1]"
                                >
                                <img src={icon} alt={'social'} className="h-full"/>
                            </a>    
                        )
                    }
                </div>
        </div>
    )
}

export default Footer