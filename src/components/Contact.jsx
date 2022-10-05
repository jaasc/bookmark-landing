import React, { useState } from "react";
import errorIcon from "../assets/images/icon-error.svg";

function Contact(){
    const [email, setEmail] = useState("")
    const [warning, setWarning] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        const validate = /\S+@\S+\.\S+/.test(email)
        validate ? setWarning(false) : setWarning(true)
    }
    
    return(
        <div className="px-[2em] pt-[4em] pb-[3em] sm:px-[3em] bg-softBlue text-white text-center">
            <h4 className="uppercase tracking-[4px] text-[14px]">
                35,000+ already joined
            </h4>
            <h2 className="text-3xl max-w-[450px] font-[500] mx-auto my-[1em]">
                Stay up-to-date with what we're doing
            </h2>
            <form className="flex flex-col sm:flex-row max-w-[500px] mx-auto" onSubmit={handleSubmit}>
                <div className={`relative w-[80%] mx-auto mb-[1em] rounded p-[3px] flex flex-col items-end ${warning && 'bg-softRed'}`}>
                    <input 
                        type="text" 
                        placeholder="Enter you email address"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full p-[1em] text-[14px] text-veryDarkBlue rounded placeholder:text-grayishBlue/50 sm:mb-0 focus:outline-none"
                        />
                        {
                            warning &&
                            <>
                                <img 
                                    src={errorIcon}
                                    alt="error"
                                    className="absolute mt-[1em] mr-[.5em]"
                                    />
                                <p className="italic text-left w-full px-[1em] pt-[3px] text-[12px]">
                                    Whoops, make sure it's an email
                                </p>
                            </>
                        }
                </div>
                <button 
                    type="submit" 
                    className="w-[80%] h-fit mx-auto capitalize rounded text-[14px] py-[1em] px-[2em] bg-softRed text-white font-[500] shadow-md sm:ml-[1em] sm:w-[30%] hover:text-softRed hover:bg-white border-softRed border-[2px]"
                    >
                    Contact us
                </button>
            </form>
        </div>
    )
}

export default Contact