import Image from "next/image"
import img1 from "@/app/assets/Proyek3.jpg"
import { title } from "process";

interface IProps{
    title : string;
    content : string;
    imgSrc : string;
}
export default function Blog1({title,content,imgSrc}:IProps) {
    return (
        <div className="p-5 pt-10 pb-10 bg-white">
            <div className="lg:flex justify-center gap-10 lg:pl-32">
                <div className="lg:w-1/2">
                    <h1 className="text-black text-2xl lg:text-3xl font-semibold">{title}</h1>
                    <p className="text-black py-6 text-justify">
                        {content}
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <Image src={`https:${imgSrc}`} alt="foto1" width={500} height={500} />
                </div>
                {/* <div className="lg:w-1/2">
                    <h1 className="text-black text-2xl lg:text-3xl font-semibold">1. Pelaksanaan Konstruksi</h1>
                    <p className="text-black py-6 text-justify">
                        Pelaksanaan konstruksi, khususnya dibidang mekanikal hidro merupakan layanan utama kami sebagai Kontraktor untuk melakukan pelaksanaan kegiatan lapangan mulai dari perencanaan proyek, perhitungan estimasi budget, pelaksanaan/pemasangan di lokasi konstruksi, Uji coba, dan penyerahaan kepada konstumer. Layanan ini terdiri dari Water Treatment Plan (WTP),Waste Water Treatment Plant, Sewage Treatment Plan, Hydropower Dan Bendungan, Pengendalian Banjir. Semua pelaksanaan konstruksi yang Kami kerjakan selalu sesuai dengan peraturan Konstruksi, pengerjaan cepat, harga sangan kompetitif, dan bergaransi.
                    </p>
                </div>
                <div className="lg:w-1/2">
                    <Image src={img1.src} alt="foto1" width={500} height={500} />
                </div> */}
            </div>

        </div >
    )
}