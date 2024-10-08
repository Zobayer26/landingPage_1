import { CiSearch } from "react-icons/ci";
import Container from "./Container";

const Header = () => {
    return (
        <Container>
            <div className=" flex  justify-between mt-[49px] mb-[63px]">
                <div className=" w-[160px] h-10">
                    <img  className=" w-full h-full object-cover" src="/Logo.png" alt=" logo"/>
                </div>
                <div className="w-[509px] rounded-[66px] py-[12px] px-[28px] bg-[#F1F1F1] font-[400] leading-[24px] text-[16px] relative items-center">
                    <input type="  text" placeholder="Search" className=" w-full outline-none bg-inherit" />
                    <CiSearch className=" absolute top-4 right-[14px] text-[#BABABA]" size={22} />
                </div>
                <div>
                    <ul className=" flex items-center gap-[30px] text-[#707070] font-[400] text-[16px] leading-6">
                        <li>Home</li>
                        <li>Product</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default Header