import {BsCheckCircleFill, BsArrowUp, BsQuestionCircleFill} from "react-icons/bs";
import {HiFlag} from "react-icons/hi";

const index = () => {
    return (
        <div className="flex flex-col justify-around my-shadow bg-white p-4 m-2 rounded-md">
            <h3 className="font-normal"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores incidunt sequi recusandae veniam molestiae explicabo?</h3>
            <div className="inline-block w-auto mt-4"> <span className="font-semibold inline-block rounded-md bg-yellow-400 px-1 ">Refactoring</span></div>
            <div className="flex justify-between mt-4">
                <div className="flex space-x-2 items-center">
                    <span className="">
                        <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm11 1H3v8l4-2 4 2V3Z" fill="#47D16C" /></svg>
                    </span>
                    <span className="">
                        <svg width="12" height="13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M.293 12.707a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L6 8.414l-4.293 4.293a1 1 0 0 1-1.414 0Zm0-6a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L6 2.414 1.707 6.707a1 1 0 0 1-1.414 0Z" fill="#F76659" /></svg>
                    </span>
                    <span className="rounded-full bg-gray-300 w-6 h-6 text-center relative font-bold text-gray-600">
                        3
                    </span>
                </div>
                <div className="flex space-x-2 items-center ">
                    <h1 className="font-light text-gray-500 text-xl"> FC-7</h1>
                    <span className="rounded-full flex items-center justify-center bg-blue-300 w-6 h-6 text-center relative text-xs font-semibold text-blue-700 ">
                       <p>PG</p>
                        <span className="svgspan absolute top-0">
                            <svg viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                                <circle fill="green" cx="4" cy="4" r="4" />
                            </svg> 
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default index


//red
{/* <svg width="14" height="15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 3a3 3 0 0 1 3-3h10a1 1 0 0 1 .8 1.6L11.25 5l2.55 3.4A1 1 0 0 1 13 10H3a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0V3Z" fill="#F76659"/></svg> */ }