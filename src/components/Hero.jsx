import React from "react";
import heroImg from "../assets/images/illustration-hero.svg";

function Hero(){
    return(
        <div className="p-[2em] pr-0 sm:pl-[3em] text-grayishBlue h-full flex flex-col-reverse text-center sm:text-left sm:flex-row sm:items-center">
            <div className="sm:w-[50%] pr-[2em] py-[2em] sm:pr-[1em]">
                <h1 className="text-veryDarkBlue capitalize font-[500] text-4xl leading-[1.3] lg:max-w-[450px] lg:mx-auto">
                    A simple bookmark manager
                </h1>
                <p className="pt-[1em] pb-[2em] text-[18px] lg:max-w-[450px] lg:mx-auto">
                    A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
                </p>
                <div className="flex justify-between lg:justify-start lg:max-w-[450px] lg:mx-auto">
                    <button className="w-[50%] capitalize rounded px-[2em] py-[.8em] bg-softBlue text-white font-[500] shadow-md lg:w-fit border-[2px] border-softBlue hover:text-softBlue hover:bg-white">
                        get it on chrome
                    </button>
                    <button className="w-[50%] capitalize rounded px-[2em] py-[.8em] bg-grayishBlue/[15%] text-veryDarkBlue font-[500] ml-[1em] shadow-md lg:w-fit border-[2px] border-bg-grayishBlue/[15%] hover:text-grayishBlue hover:bg-white hover:border-veryDarkBlue">
                        get it on firefox
                    </button>
                </div>
            </div>
            <div className="h-fit relative flex items-end sm:w-[50%]">
                <img 
                    src={heroImg} 
                    alt="illustration"
                    className="max-h-full relative z-50 sm:my-[auto]"
                    />
                <div className="h-[75%] w-[80%] absolute z-0 right-0 bg-softBlue rounded-bl-[30%]">
                </div>
            </div>
        </div>
    )
}

export default Hero