

const Contact = () => {
    return (
        <div className=" w-[1212px]  px-[245px] py-[146px] bg-[#FFF2F1] my-[70px] rounded-lg mx-auto">
            <div className=" flex flex-col items-center">
                <div className=" text-center">
                    <h1 className="font-semibold text-[30px] leading-[45px] text-[#1F1F1F]">LET'S STAY IN TOUCH</h1>
                    <p className="font-normal text-[16px] leading-6 text-[#707070]">Get updates on sales specials and more</p>
                </div>
                <div className=" w-full bg-white flex gap-1 rounded-md">
                    <div className="pl-[35px] flex-grow py-5">
                        <input type="text" className="w-full  outline-none font-normal text-[#CCCCCC] text-[24px] leading-9" placeholder="Enter your email" />
                    </div>
                    <div className="bg-gradient-to-r from-[#FF589B] to-[#FF136F] text-white 
                    font-normal text-[24px] leading-9 px-12 pt-5 pb-4 rounded-tr-md rounded-br-md" >
                        Send
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact