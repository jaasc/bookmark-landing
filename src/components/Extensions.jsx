import React from "react";
import chrome from "../assets/images/logo-chrome.svg";
import firefox from "../assets/images/logo-firefox.svg";
import opera from "../assets/images/logo-opera.svg";

function Extensions(){
    const extensions = [
        {name: "Chrome", logo: chrome, version: "62"}, 
        {name: "Firefox", logo: firefox, version: "55"}, 
        {name: "Opera", logo: opera, version: "46"}
    ]

    return(
        <div className="px-[2em] pt-[4em] pb-[2em] sm:px-[3em] text-grayishBlue text-[18px]">
            <div className="text-center mx-auto max-w-[500px]">
                <h2 className="text-3xl font-[500] text-veryDarkBlue">
                    Download the extension
                </h2>
                <p className="leading-[1.8] pt-[1em]">
                    We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div className="pt-[2em] md:flex md:justify-center">
                {
                    extensions.map(ext => 
                        <div 
                            key={ext.name}
                            className="shadow-lg rounded-2xl text-center mb-[2em] max-w-[350px] md:w-[350px] h-fit mx-auto md:mb-0 md:mx-0 md:even:mx-[1em] lg:even:mx-[2em] md:even:mt-[40px] md:last:mt-[80px]"
                            >
                            <div className="py-[2em]">
                                <img 
                                    src={ext.logo} 
                                    alt={`${ext.name}`}
                                    className="mx-auto"
                                    />
                            </div>
                            <h3 className="text-2xl font-[500] text-veryDarkBlue">
                                Add to {ext.name}
                            </h3>
                            <p className="mt-[.5em] mb-[2em]">
                                Minimum version {ext.version}
                            </p>
                            <div className="w-full h-[4px] bg-[url('./assets/images/bg-dots.svg')]">
                            </div>
                            <button className="my-[2em] w-[80%] capitalize text-[16px] rounded px-[2em] py-[.8em] bg-softBlue text-white font-[500] shadow-md border-[2px] border-softBlue hover:text-softBlue hover:bg-white">
                                Add &amp; install extension
                            </button>
                        </div>    
                    )
                }
            </div>
        </div>
    )
}

export default Extensions