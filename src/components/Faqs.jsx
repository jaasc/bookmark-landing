import React, { useEffect, useState } from "react";
import arrow from "../assets/images/icon-arrow.svg";
import faqlist from "../faqlist";

function Faqs(){
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        setFaqs(faqlist.map(qas => ({...qas, isOpen: false})))
    }, [])

    function toggleFAQ(id){
        setFaqs(faqs.map((qas, ind) => ind === id ? ({...qas, isOpen: !qas.isOpen}) : qas))
    }

    return(
        <div className="px-[2em] pt-[2em] pb-[4em] sm:pt-[4em] sm:px-[3em] text-grayishBlue text-[18px] flex flex-col items-center">
            <div className="text-center max-w-[500px]">
                <h2 className="text-3xl font-[500] text-veryDarkBlue capitalize">
                    frequently asked questions
                </h2>
                <p className="leading-[1.8] pt-[1em]">
                Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.
                </p>
            </div>
            <div className="w-full mt-[2em] p-[1em]">
                {
                    faqs.map((faq, index) => 
                        <div 
                            key={index}
                            className="h-full px-[.5em] odd:border-y-[1px] odd:border-grayishBlue/30 last:border-b-[1px] last:border-grayishBlue/30 max-w-[500px] mx-auto"
                            >
                            <div 
                                className="flex items-center justify-between cursor-pointer text-veryDarkBlue hover:text-softRed"
                                onClick={() => toggleFAQ(index)}
                                >
                                <h3 
                                    className={`py-[.8em] h-full`}
                                    >
                                    {faq.question}
                                </h3>
                                <img 
                                    src={arrow} 
                                    alt="arrow down"
                                    className={`h-fit ${faq.isOpen && 'origin-center rotate-180'}`}
                                    />
                            </div>
                            <div className={`pt-[.2em] pb-[.8em] ${faq.isOpen ? 'animate-bounce-short' : 'hidden'}`}>
                                <p className="text-[16px] leading-[1.8]">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    )
                }
            </div>
            <button className="capitalize rounded text-[16px] mt-[1em] px-[2em] py-[.8em] bg-softBlue text-white font-[500] shadow-md border-[2px] border-softBlue hover:text-softBlue hover:bg-white">
                More info
            </button>
        </div>
    )
}

export default Faqs