import img1 from '@/app/assets/Workshop 1.jpg';
import img2 from '@/app/assets/Workshop 2.jpg';
import img3 from '@/app/assets/Workshop 3.jpg';
import Image from 'next/image';


export default function Workshop() {
    return (
        <div className="pt-10 pb-20 p-5 bg-white">
            <div className="text-center pb-10">
                <h3 className="font-semibold text-yellow-500 text-lg lg:text-2xl">Workshop Kami</h3>
                <h1 className="text-primary font-bold text-2xl lg:text-4xl">Mekanikal Hidro Jaya Teknik</h1>
            </div>
            <div className='hidden p-5 lg:flex justify-center gap-1'>
                <Image src={img1.src} alt="Workshop" width="480" height={100} />
                <Image src={img2.src} alt="Workshop" width="480" height={100} />
                <Image src={img3.src} alt="Workshop" width="475" height={100}/>
            </div>
            <div className="carousel rounded-mg w-full lg:hidden pb-10">
                <div className="carousel-item w-[425px] h-[300px]">
                    <Image
                        src={img1.src}
                        alt="Tailwind CSS Carousel component"
                        width="480" height={100} />
                </div>
                <div className="carousel-item w-[425px] h-[300px]">
                    <Image
                        src={img2.src}
                        alt="Tailwind CSS Carousel component"
                        width="480" height={100} />
                </div>
                <div className="carousel-item w-[425px] h-[300px]">
                    <Image
                        src={img3.src}
                        alt="Tailwind CSS Carousel component"
                        width="480" height={100} />
                </div>
            </div>
            <div className='font-normal justify-center text-black lg:pt-10'>
                <p className='pb-5 text-center lg:text-lg'>Workshop untuk melakukan produksi produk maupun melakukan perbaikan peralatan hidro mekanikal.</p>
                <p className='font-semibold text-center text-base lg:text-xl'>Alamat di Jalan Karangroto Raya No. 21 Kel. Karangroto, Kec. Genuk, Kota Semarang, Jawa Tengah </p>
            </div>

        </div>
    )
}