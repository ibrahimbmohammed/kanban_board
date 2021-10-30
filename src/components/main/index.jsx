import Card from "../../components/card"
import CardS from "../../components/card2"

const  index = () => {
    return (
        <main className="w-auto mt-87 h-screen flex xl:ml-91 2xl:ml-96 overflow-auto ">
            <div className="my w-1/4  flex-shrink-0 overflow-visible rounded-md bg-gray-150 mr-5 flex flex-col items-center scrollbar-hide ">
                <h2 className="text-gray-400 font-bold m-4 self-start">TO DO</h2>
                <Card/>
                <CardS/>
                <Card/>
                <Card/>
                <CardS/>
                <Card/>
            </div>
            <div className="my w-1/4 h-screen flex-shrink-0 overflow-visible rounded-md bg-gray-150 mr-5  flex flex-col items-center">
            <h2 className="text-gray-400 font-bold m-4 self-start">IN PROGRESS</h2>
            <CardS/>
                <Card/>
                <CardS/>
                <Card/>
                <CardS/>
                <Card/>
            </div>
            <div className="my w-1/4 flex-shrink-0  rounded-md bg-gray-150 mr-5  flex flex-col items-center">
            <h2 className="text-gray-400 font-bold m-4 self-start">DONE</h2>
            <Card/>
                <CardS/>
            </div> 
            <div className="my w-1/4  flex-shrink-0 rounded-md bg-gray-150 mr-5  flex flex-col items-center">
            <h2 className="text-gray-400 font-bold m-4 self-start">DONE</h2>
            <CardS/>
                <Card/>
            </div>  
            <div className="my w-1/4  flex-shrink-0 rounded-md bg-gray-150 mr-5  flex flex-col items-center">
            <h2 className="text-gray-400 font-bold m-4 self-start">DONE</h2>
            <CardS/>
                <Card/>
            </div>    
        </main>
    )
}

export default index
