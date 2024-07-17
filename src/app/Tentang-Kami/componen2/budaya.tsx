import img1 from "@/app/assets/Pompa1 (1).jpg";
import img2 from "@/app/assets/9.jpg";
import img3 from "@/app/assets/spk.jpg";
import img4 from "@/app/assets/Foto Bersama.jpg";
import Image from "next/image";


export default function Budaya() {
    return (
        <div className="pt-20 pb-20 p-5 lg:pl-24 lg:pr-24 lg:pt-20 bg-white">
            <div className="text-center">
                <h3 className="font-semibold text-xl text-black lg:text-3xl">Budaya Bekerja</h3>
                <h1 className="text-primary text-2xl font-bold lg:text-4xl">Mekanikal Hidro Jaya Teknik</h1>
            </div>
            <div className="bg-white flex flex-wrap gap-10 xl:gap-32 justify-center pt-10">
                <div className="pt-10">
                    <div className="card card-side bg-primary shadow-xl w-[386px] h-[250px] lg:w-[500px]">
                        <figure>
                            <Image
                                src={img3.src}
                                alt="Jaminan Pekerjaan" className="w-[500px] h-[250px]"  width={500}
                                height={300}
                                 />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-lg">Jaminan Pekerjaan/Proyek</h2>
                            <p className="text-white text-sm lg:text-base lg:text-justify">Potensi proyek harus didasari dengan kesepakatan pelaksanaan proyek yang jelas dan sesuai dengan peraturan dalam pasal pelaksanaan konsturksi.</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 lg:pt-10">
                    <div className="card card-side bg-primary shadow-xl w-[386px] h-[250px] lg:w-[500px]">
                        <figure>
                            <Image
                                src={img2.src}
                                alt="Jaminan Pekerjaan" className="w-[740px] h-[250px]"
                                width={500}
                                height={300} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-lg">Keselamatan Kerja</h2>
                            <p className="text-white text-sm lg:text-base lg:text-justify">Prinsip keselamatan kerja tidak pernah luput dari pengawasan kami. Kami percaya bahwa menghasilkan konstruksi berkualitas premium juga harus didukung dengan budaya keselamatan kerja tanpa kecelakaan.</p>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="card card-side bg-primary shadow-xl w-[386px] h-[250px] lg:w-[500px]">
                        <figure>
                            <Image
                                src={img1.src}
                                alt="Jaminan Pekerjaan" className="w-[740px] h-[250px]" 
                                width={500}
                                height={300}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-lg">Kualitas</h2>
                            <p className="text-white text-sm lg:text-base lg:text-justify">MJT selalu mengedepankan kinerja dengan kualitas tinggi untuk para pelanggan. Telah terbukti kami telah berhasil menyelesaikan beragam hasil konstruksi premium dan ikonik di berbagai proyek.</p>
                        </div>
                    </div>
                </div>
                <div className="pb-5">
                    <div className="card card-side bg-primary shadow-xl w-[386px] h-[250px] lg:w-[500px]">
                        <figure>
                            <Image
                                src={img4.src}
                                alt="Jaminan Pekerjaan" className="w-[740px] h-[250px]" 
                                width={500}
                                height={300}/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black text-lg lg:text-xl">Peningkatan Mutu</h2>
                            <p className="text-white text-sm lg:text-base lg:text-justify">Keberhasilan dalam berbagai proyek yang dijalankan, membuat MJT selalu dapat meningkatkan kualitas produk maupun kemampuan internal kontraktor.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}