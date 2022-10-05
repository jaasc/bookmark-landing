import React, { useState } from "react";
import featureImg0 from "../assets/images/illustration-features-tab-1.svg";
import featureImg1 from "../assets/images/illustration-features-tab-2.svg";
import featureImg2 from "../assets/images/illustration-features-tab-3.svg";
import featurelist from "../featurelist";

function Features(){
    const tabImgs = [featureImg0, featureImg1, featureImg2]
    const [activeTab, setActiveTab] = useState(0)
    
    return(
        <div className="p-[2em] pl-0 text-[18px] sm:pr-[3em] text-grayishBlue">
            <div className="text-center mx-auto max-w-[500px] pl-[2em]">
                <h2 className="text-3xl font-[500] text-veryDarkBlue">
                    Features
                </h2>
                <p className="leading-[1.8] pt-[1em]">
                    Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <div className="pt-[3em]">
                <div className="flex flex-col ml-[2em] sm:flex-row sm:justify-center">
                    {
                        featurelist.map((list, index) => 
                            <div 
                                key={index}
                                className="w-[80%] mx-auto sm:w-[200px] sm:mx-0"
                                >
                                <div className="h-full odd:border-y-[1px] odd:border-grayishBlue/30 flex flex-col justify-center">
                                    <button 
                                        className={`py-[.5em] h-full ${activeTab === index && 'text-veryDarkBlue'} hover:text-softRed`}
                                        onClick={() => setActiveTab(index)}
                                        >
                                        {list.tabname}
                                    </button>
                                    {activeTab === index && <hr className="w-[30%] h-[4px] bg-softRed mb-[-1px] mx-auto mt-auto sm:w-[90%]"/>}
                                </div>
                            </div>    
                        )
                    }
                </div>
                <div className="mt-[3em]">
                    {
                        featurelist.map((list, index) =>
                            <div 
                                key={index}
                                className={`flex-col sm:flex-row sm:items-center ${activeTab === index ? 'flex animate-fade-short' : 'hidden'}`}
                                >                                    
                                <div className="h-fit relative flex items-end mb-[2em] sm:w-[50%]">
                                    <img 
                                        src={tabImgs[index]} 
                                        alt="illustration"
                                        className="relative z-50 sm:max-h-[400px] ml-auto sm:my-[auto] pb-[3em] pl-[2em]"
                                        />
                                    <div className="h-[85%] w-[85%] absolute z-0 left-0 bg-softBlue rounded-br-[30%] rounded-tr-[50%]"></div>
                                </div>
                                <div className="flex flex-col ml-[2em] text-center sm:ml-[1em] sm:w-[50%] sm:text-left lg:max-w-[450px] lg:mx-auto">
                                    <h2 className="text-3xl font-[500] text-veryDarkBlue">
                                        {list.title}
                                    </h2>
                                    <p className="leading-[1.8] pt-[1em] sm:pb-[1em]">
                                        {list.description}
                                    </p>
                                    <button className="capitalize text-[16px] w-fit rounded px-[2em] py-[.8em] bg-softBlue text-white font-[500] shadow-md hidden sm:flex border-[2px] border-softBlue hover:text-softBlue hover:bg-white">
                                        More info
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Features