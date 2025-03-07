import Marquee from "react-fast-marquee";
import Image from "next/image";
import Link from "next/link";


export default function Layanan1() {
    return (
        <div className="pt-10 lg:pt-0 pb-10 bg-white">
            <div id="layanan1" className="p-5 lg:pl-20 lg:pr-20">
                <div className="text-center">
                    <h1 className="text-primary text-3xl font-bold lg:text-4xl">PRODUK & LAYANAN</h1>
                    <h3 className="font-semibold text-2xl text-black lg:text-3xl">Mekahidro Jaya Teknik</h3>
                </div>
                <div className="pt-5">
                    <h1 className="text-black text-2xl lg:text-3xl font-semibold">1. Pelaksanaan Konstruksi</h1>
                    <p className="text-black py-6 text-justify">Pelaksanaan konstruksi yang berkaitan dengan mekanikal seperti
                        <span className="text-black italic text-justify"> Water Treatment Plan, Waste Water Treatment PlantSewage Treatment Plan, Hydropower </span>Dan Bendungan, Pengendalian Banjir
                    </p>
                </div>
            </div>
                <div className="w-full">
                    <Marquee autoFill>
                        <Image src="/Proyek1.jpg" alt="proyek1" width={500} height={500} className="w-[400px] h-[200px] lg:w-[450px] lg:h-[250px]" />
                        <Image src="/proyek2.jpg" alt="proyek2" width={500} height={500} className="w-[400px] h-[200px] lg:w-[450px] lg:h-[250px]" />
                        <Image src="/proyek3.jpg" alt="proyek3" width={500} height={500} className="w-[400px] h-[200px] lg:w-[450px] lg:h-[250px]" />
                        <Image src="/proyek4.jpg" alt="proyek4" width={500} height={500} className="w-[400px] h-[200px] lg:w-[450px] lg:h-[250px]" />
                        <Image src="/proyek5.jpg" alt="proyek5" width={500} height={500} className="w-[400px] h-[200px] lg:w-[450px] lg:h-[250px]" />
                    </Marquee>
                </div>
                <div className="p-5 pt-10 lg:pl-20 lg:pr-20">
                    <button> <Link href="https://wa.me/6281222064484" target="_blank" className="btn btn-primary text-white">Mulai Konsultasi</Link></button>
                </div>

        </div>
    )
}