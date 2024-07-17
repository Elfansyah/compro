import Link from "next/link";
import Image from "next/image";

export default function Sejarah() {
    return (
        <div className="p-5 pt-10 pb-10 bg-white flex flex-wrap gap-20 justify-center">
            <div className="lg:w-1/2">
                <h1 className="text-center lg:text-left text-xl lg:text-3xl text-black font-semibold">Sejarah</h1>
                <h3 className="text-center lg:text-left text-primary text-2xl lg:text-4xl font-semibold pb-5">PT. Mekahidro Jaya Teknik</h3>
                <p className="text-justify text-black">Kami berdiri sejak tahun 2022 di Kota Semarang. Tujuan utama adalah untuk menjadi perusahaan yang handal dibidangnya mekanikal hidro dengan nama PT. MEKAHIDRO JAYA TEKNIK yang berperan sebagai solusi untuk kegiatan teknis konstruksi dan juga teknis pelaksanaan instalasi.
                </p>
                <p className="pt-5 text-justify text-black">Menjadi perusahaan dengan kompetensi handal dalam bidangnya untuk memberikan pelayanan teknis pada hal perhitungan biaya, hingga pelaksanaan konstruksi secara tepat, berkualitas, dan tepat waktu.</p>
            </div>
            <div className="carousel lg:w-1/3">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image
                        src="/Proyek1.jpg"
                        alt="foto1"
                        className="w-full" 
                        width={400}
                        height={300}/>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link href="#slide4" className="btn btn-circle">❮</Link>
                        <Link href="#slide2" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <Image
                        src="/proyek2.jpg"
                        alt="foto2"
                        className="w-full" 
                        width={400} height={300}/>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link href="#slide1" className="btn btn-circle">❮</Link>
                        <Link href="#slide3" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image
                        src="/proyek3.jpg"
                        alt="foto3"
                        className="w-full" 
                        width={400}
                        height={300}/>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link href="#slide2" className="btn btn-circle">❮</Link>
                        <Link href="#slide4" className="btn btn-circle">❯</Link>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <Image
                        src="/proyek5.jpg"
                        alt="foto4"
                        className="w-full" 
                        width={400}
                        height={300}/>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <Link href="#slide3" className="btn btn-circle">❮</Link>
                        <Link href="#slide1" className="btn btn-circle">❯</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}