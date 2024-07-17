import Image from "next/image"
import img1 from '@/app/assets/logo2-1.png';
import img2 from '@/app/assets/logo2.png';
import Marquee from "react-fast-marquee";

export default function OurClients () {
    return (

        <div className="pb-20 bg-white">
            <div className="pt-5 pb-5">
                <h1 className="font-semibold text-lg lg:text-xl text-black text-center">*Klien Kami</h1>
            </div>
            <div className="w-full">
                    <Marquee autoFill className="">
                        <Image src={img1} alt="proyek1" className="w-[425px] h-[100px] lg:w-[600px] lg:h-[100px]" />
                        <Image src={img2} alt="proyek2" className="w-[425px] h-[100px] lg:w-[450px] lg:h-[100px]" />
                    </Marquee>
                </div>
        </div>
    )
}