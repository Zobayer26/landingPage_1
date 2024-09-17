
const Categories = () => {
    return (
        <div className=" w-[1128px] mx-auto  mt-[100px] mb-[15px]">
                <div className=" mb-[24px]">
                    <h2 className=" font-semibold text-[36px] leading-[54px] text-[#1F1F1F]">Categories</h2>
                </div>
                <div className=" flex space-x-[26px]">
                    <div className=" bg-gradient-to-r from-[#FF9C35] to-[#FFD019] w-[360px] h-[120px] py-[15px] px-[46px]
                     rounded-xl flex items-center gap-[76px]">
                        <h1 className=" text-[#FFFFFF] font-normal text-[36px] leading-[54px]">
                            Watch
                        </h1>
                        <div className=" w-[70px] h-[90px]">
                            <img className=" w-full h-full object-cover"
                                src="/trzcacak 1.png" alt=" Watch image" />
                        </div>
                    </div>
                    <div className=" bg-gradient-to-r from-[#FF589B] to-[#FF136F] w-[360px] h-[120px] py-[13px] pl-[58px] pr-[18px]
                     rounded-xl flex items-center gap-[117px]">
                        <h1 className=" text-[#FFFFFF] font-normal text-[36px] leading-[54px]">
                            Bag
                        </h1>
                        <div className=" w-[94px] h-[94px]">
                            <img className=" w-full h-full object-cover"
                                src="/trzcacak 3.png" alt=" Watch image" />
                        </div>
                    </div>
                    <div className=" bg-gradient-to-r from-[#4289FF] to-[#3F07F8] w-[360px] h-[120px] pt-[13px] pb-[10px] pl-[40px] pr-[28px]
                     rounded-xl flex items-center gap-[30px]">
                        <h1 className=" text-[#FFFFFF] font-normal text-[36px] leading-[54px]">
                            Shoes
                        </h1>
                        <div className=" w-[152px] h-[97px]">
                            <img className=" w-full h-full object-cover "
                                src="/trzcacak 2.png" alt=" Watch image" />
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

export default Categories