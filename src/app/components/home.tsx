import Image from 'next/image';
import img1 from "@/app/assets/Foto Tirta 5.jpg";
import img2 from "@/app/assets/Foto Tirta 4.jpg";
import img3 from "@/app/assets/Foto Tirta.jpg";
import img4 from "@/app/assets/Foto Tirta 2.jpg";
import img5 from "@/app/assets/Foto Tirta 3.jpg";
import { link } from 'fs';
import Link from 'next/link';

export default function HomePage() {
    return (
        <div className='bg-white pb-10'>
            <div className="bg-white">
                <div className="p-5 lg:pl-20 self-center">
                    <h3 className="bg-yellow-400 font-semibold text-base lg:font-bold  text-white rounded-md px-5 w-60 justify-center mb-2 ">GENERAL CONTRACTOR</h3>
                    <h1 className="font-bold text-primary text-2xl lg:text-5xl pb-2">Partner Untuk Memberikan Jasa Pelaksanaan Konstruksi</h1>
                    <p className="font-normal text-black leading-relaxed lg:text-xl">Demi solusi terbaik dalam arahan yang tepat sesuai standar tahapan tata aturan teknis pembangunan</p>
                </div>
                <div className="carousel h-[170px] w-[425px] lg:h-[300px] lg:w-[1519px]">
                    {/* h-[180px] w-[497px] lg:h-[350px] w-[1520px] */}
                    <div id="item1" className="carousel-item w-full">
                        <Image
                            src={img1.src}
                            alt='gambar'
                            className="w-full"
                            width={1000}
                            height={170} />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <Image
                            src={img2.src}
                            alt='gambar'
                            className="w-full"
                            width={1000}
                            height={170} />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <Image
                            src={img3.src}
                            alt='gambar'
                            className="w-full"
                            width={1000}
                            height={170} />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <Image
                            src={img4.src}
                            alt='gambar'
                            className="w-full"
                            width={1000}
                            height={170} />
                    </div>
                </div>
            </div>
            <div className='flex justify-center p-5 pt-7'>
                <div className="stats shadow bg-yellow-400">
                    <div className="stat place-items-center">
                        <div className="stat-title text-black">Total Proyek</div>
                        <div className="stat-value text-black">30</div>
                        <div className="stat-desc text-black">Mulai Januari 2022 - Saat Ini</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-black">Proyek Berhasil</div>
                        <div className="stat-value text-green-500">27</div>
                        <div className="stat-desc text-black">(92%)</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className="stat-title text-black">Proyek Berjalan</div>
                        <div className="stat-value text-white">3</div>
                        <div className="stat-desc text-black">Tahap Pelaksanaan</div>
                    </div>
                </div>
            </div>
        </div>
    )
}