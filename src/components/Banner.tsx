
import { FaArrowRight } from "react-icons/fa";
import Container from "./Container";

const Banner = () => {
    return (
        <div className="bg-[#FEEAE9] w-[1212px] rounded-xl  mx-auto">
            <Container>
                <div className=" flex gap-[140px] py-10 items-center justify-center " >
                    <div className=" flex flex-col gap-[8px]">
                        <h1 className=" font-bold text-[56px] leading-[84px] text-[#1F1F1F]">Mi LED TV 4A PRO 32</h1>
                        <div className=" w-[456px]">
                            <p className=" font-[400] text-[16px] leading-[26px] text-[#4E4E4E]">Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                                amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>
                        </div>
                        <h2 className=" font-[400] text-[41px] leading-[62px] text-[#FF136F]">$1289</h2>
                        <div className=" bg-gradient-to-r from-[#FF589B] to-[#FF136F] w-[168px]
                px-5 py-[14px] flex items-center gap-[10px] rounded-md">
                            <button className=" text-white flex items-center gap-[10px]">
                                <p className=" uppercase font-[500] text-[16px] leading-[20px]">Buy now</p>
                                <FaArrowRight />
                            </button>
                        </div>
                    </div>
                    <div className=" w-[400px] h-[378px]">
                        <img className=" w-full h-full object-cover"
                            src="/Image 6 1.png" alt="Banner Image" />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Banner