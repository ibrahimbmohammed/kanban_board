import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaStar, FaShareAlt } from "react-icons/fa";
import { BsThreeDots, BsSearch } from "react-icons/bs";

const img1 = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbGUlMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=244&q=80";
const img2 = "https://images.unsplash.com/photo-1588731234159-8b9963143fca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=244&q=80";
const img3= "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbGUlMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=244&q=80";
const img4= "https://images.unsplash.com/photo-1632653581068-f0ba935a3de6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hbGUlMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=244&q=80";
const img5="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbGUlMjBwb3RyYWl0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=144&h=244&q=80";

function index() {
    return (
        <div className="flex  flex-col flex-grow  cus-width mr-8 max-h-42 mt-16  xl:ml-91 2xl:ml-96 justify-around fixed bg-white z-50">
            <div className="my flex items-center justify-start space-x-2">
                <p className="text-gray-400">Projects</p>
                <span className=""><MdOutlineKeyboardArrowRight color="#d3d3d3" /></span>
                <p className="text-gray-400">International</p>
                <span className=""><MdOutlineKeyboardArrowRight color="#d3d3d3"/></span>
                <p className="">Product Web</p>
            </div>
            {/* end of first col */}
            <div className="my flex justify-between mr-8">
                <div className="my">
                    <h1 className="text-2xl font-semibold"> All Sprints</h1>
                </div>
                <div className="flex space-x-2 items-center">
                    <span className=""><FaStar color="#808080" /></span>
                    <button className=" p-2 bg-blue-500 text-white font-semibold rounded-md"> Complete sprint</button>
                    <span className=""><FaShareAlt color="#808080" /></span>
                    <button className="py-3 px-3 rounded-md border border-gray-300"><BsThreeDots /></button>
                </div>
            </div>
            {/* end of second col */}
            <div className=" flex justify-start items-center space-x-8">
                <div className="relative">
                    <input className="border border-gray-200 pl-8 py-2 rounded-md " type="text" placeholder="Search" />
                    <span className="absolute left-2   top-3">
                        <BsSearch color="#d3d3d3" size="1rem" />
                    </span>
                </div>
                <div className="flex justify-start">
                    <span className="rounded-full w-8 h-8 border-2 border-white bg-blue-400 -ml-2 "> <img className="h-8 w-8 rounded-full object-cover" src={img1} alt="face1" /></span>
                    <span className="rounded-full w-8 h-8 border-2 border-white bg-blue-400 -ml-2 "> <img className="h-8 w-8 rounded-full object-cover" src={img2} alt="face1" /></span>
                    <span className="rounded-full w-8 h-8 border-2 border-white bg-blue-400 -ml-2 "> <img className="h-8 w-8 rounded-full object-cover" src={img3} alt="face1" /></span>
                    <span className="rounded-full w-8 h-8 border-2 border-white bg-blue-400 -ml-2 "> <img className="h-8 w-8 rounded-full object-cover" src={img4} alt="face1" /></span>
                    <span className="rounded-full w-8 h-8 border-2 border-white bg-blue-400 -ml-2 "> <img className="h-8 w-8 rounded-full object-cover" src={img5} alt="face1" /></span>
                </div>
                <div className="flex justify-evenly space-x-3">
                    <span>
                        <h3 className="font-normal" >Only My Issues</h3>
                    </span>
                    <span>
                        <h3 className="font-normal" >Recently Updated</h3>
                    </span>
                    <span className="flex items-center justify-center">
                        <h3 className="font-normal">All Sprints</h3>
                        <span className="inner_span  mt-1 pl-1 text-gray-800 ">
                            <svg width="10" height="6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m1 .5 4 4 4-4" stroke="#6E7C87" /></svg>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default index
