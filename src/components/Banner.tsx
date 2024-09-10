
import { FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className=" bg-[#FEEAE9] px-[46px] py-[68px] rounded-xl " >
            
            <div className=" flex flex-col gap-[8px]">
                <div >
                    <h1 className=" font-bold text-[56px] leading-[84px] text-[#1F1F1F]">Mi LED TV 4A PRO 32</h1>
                </div>
                <div className=" w-[456px]">
                    <p className=" font-[400] text-[16px] leading-[26px] text-[#4E4E4E]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                        amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt nostrud amet.
                    </p>
                </div>
                <div>
                    <h2 className=" font-[400] text-[41px] leading-[62px] text-[#FF136F]">$1289</h2>
                </div>
                <div className=" bg-gradient-to-r from-[#FF589B] to-[#FF136F] w-[168px]
                px-5 py-[14px] flex items-center gap-[10px] rounded-md">
                    <button className=" text-white flex items-center gap-[10px]">
                        <p className=" uppercase font-[500] text-[16px] leading-[20px]">Buy now</p>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div> image</div>
        </div>
    )
}

export default Banner