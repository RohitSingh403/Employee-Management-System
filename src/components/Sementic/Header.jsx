export const Header = function(){
    return(
        <div className=" bg-[#0A2947] h-25 border w-screen flex justify-between items-center pl-25 pr-25 rounded-b-full">
            <div className="text-white">
                <h4 className="font-light text-[25px]">Hello</h4>
                <h1 className="text-4xl">Employee 👋</h1>
            </div>
            <div>
                <button className="border border-white bg-red-700 text-white w-30 h-10 rounded-full cursor-pointer text-[20px]">Log Out</button>
            </div>
        </div>
    )
} 