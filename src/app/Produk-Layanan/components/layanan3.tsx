import Link from "next/link"
import Image from "next/image"
import img1 from "@/app/assets/Perbaikan1.png"
import img2 from "@/app/assets/Perbaikan2.png"
import img3 from "@/app/assets/Perbaikan Pompa Irigasi 1.jpg"

export default function Layanan3() {
    return (
        <div id="layanan3" className="bg-white pt-10 lg:pb-20 lg:p-5 lg:pl-20 lg:pr-20">
            <div className="flex flex-wrap">
                <div className="flex flex-wrap lg:w-1/2 lg:hidden">
                    <div className="p-5">
                        <h1 className="text-black text-2xl font-semibold">3. Perbaikan Dan Pemeliharaan</h1>
                        <p className="text-black py-6 text-justify">
                            Pemakaian alat mekanikal hidro yang berjalan terus-menerus selama 24jam non stop, sangat diperlukan perawatan maupun perbaikan secara berkala.
                        </p>
                        <p className="text-black text-justify">
                            Hal ini perlukan agar untuk memaksimalkan atau optimalisasi kinerja dari alat hidro yang telah terpasang. Selain itu fungsi perawatan atau mengganti part yang sudah pada masanya, dapat meminimalisir biaya yang besar atau mengganti unit baru jika mengalami kerusakan yang menyebabkan kinerja alat sudah tidak bisa diperbaiki lagi.
                        </p>
                    </div>
                    <div className="diff w=[400px] h-[500px] lg:w-1/2 lg:hidden">
                        <div className="diff-item-1">
                            <Image src={img2.src}
                                alt="daisy"
                                width={500}
                                height={20}
                            />
                        </div>
                        <div className="diff-item-2">
                            <Image
                                src={img1.src}
                                alt="daisy"
                                width={500}
                                height={200}
                            />
                        </div>
                        <div className="diff-resizer">
                        </div>
                    </div>
                    <Image
                        src={img3.src}
                        alt="daisy"
                        width={500}
                        height={10}
                        className="pt-5"
                    />
                    
                    <div className="p-5 pt-10 flex justify-center">
                        <button> <Link href="https://wa.me/6281222064484" target="_blank" className="btn btn-primary text-white">Mulai Konsultasi</Link></button>
                    </div>
                </div>
                <div className="hidden lg:flex w-full gap-10">
                    <div className="card rounded-box grid h-100 flex-grow pt-20">
                        <div className="diff w=[1000px] h-[700px]">
                            <div className="diff-item-1">
                                <Image src={img2.src}
                                    alt="daisy"
                                    width={600}
                                    height={10}
                                />
                            </div>
                            <div className="diff-item-2">
                                <Image
                                    src={img1.src}
                                    alt="daisy"
                                    width={500}
                                    height={10}
                                />
                            </div>
                            <div className="diff-resizer">
                            </div>
                        </div>
                    </div>

                    <div className="card rounded-box grid h-10 place-items-center w-1/2 pt-20">
                        <div className="">
                            <h1 className="text-black text-3xl font-semibold">3. Perbaikan Dan Pemeliharaan</h1>
                            <p className="text-black py-6 text-base text-justify">
                                Pemakaian alat mekanikal hidro yang berjalan terus-menerus selama 24jam non stop, sangat diperlukan perawatan maupun perbaikan secara berkala.
                            </p>
                            <p className="text-black text-justify">
                                Hal ini perlukan agar untuk memaksimalkan atau optimalisasi kinerja dari alat hidro yang telah terpasang. Selain itu fungsi perawatan atau mengganti part yang sudah pada masanya, dapat meminimalisir biaya yang besar atau mengganti unit baru jika mengalami kerusakan yang menyebabkan kinerja alat sudah tidak bisa diperbaiki lagi.
                            </p>
                        </div>
                        <Image
                            src={img3.src}
                            alt="daisy"
                            width={500}
                            height={100}
                            className="pt-5"
                        />
                        <p className="text-black pt-1 italic">*Perbaikan Pompa Irigasi</p>
                        <div className="flex pt-7">
                            <button> <Link href="https://wa.me/6281222064484" target="_blank" className="btn btn-primary text-white">Mulai Konsultasi</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}