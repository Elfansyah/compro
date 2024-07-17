import img1 from "@/app/assets/Pak Rachmat 2.jpg"
import img2 from "@/app/assets/A Yusuf.jpg"
import img3 from "@/app/assets/Foto Brian.jpg"
import img4 from "@/app/assets/Foto Rifky.jpg"
import Link from "next/link"
import Image from "next/image"

export default function Pimpinan() {
    return (
        <div className="p-5 pt-5 pb-20 bg-white">
            <div className="divider divider-info text-black pb-10 font-semibold p-10">Pimpinan Perusahaan</div>
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 lg:pl-24">
                <div className="lg:w-1/2 pb-5">
                    <div className="card lg:card-side bg-primary shadow-xl lg:w-[600px] lg:h-[300px]">
                        <figure>
                            <Image
                                src={img1.src}
                                alt="Album" 
                                width={500}
                                height={200}
                                />
                        </figure>
                        <div>
                            <div className="card-body lg:w-[390px]">
                                <h2 className="card-title text-black">Rachmat</h2>
                                <h3 className="text-white text-center font-semibold bg-yellow-400 rounded-md w-[150px]">
                                    Direktur Utama
                                </h3>
                                <p className="text-white text-md text-justify">
                                    Berlatar belakang pendidikan Sarjana Teknik, hingga saat ini memimpin Perusahaan yang bergerak pada bidang mekanikal hidro dengan nama perusahaan PT.Mekanikal Hidro
                                </p>
                                <div>
                                    <p className="text-white pb-1">Hubungi :</p>
                                    <Link href="https://wa.me/6281222064484" target="_blank" className="items-center text-white hover:text-yellow-400 pt-1">
                                        <svg role="img" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" width="25"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-full pt-10 lg:pt-0">
                    <div className="card lg:card-side bg-primary shadow-xl lg:w-[600px] lg:h-[300px]">
                        <figure>
                            <Image
                                src={img2.src}
                                alt="Album" 
                                width={500}
                                height={200}
                                />
                        </figure>
                        <div>
                            <div className="card-body lg:w-[400px]">
                                <h2 className="card-title text-black">Muhammad Yusuf</h2>
                                <h3 className="text-white text-center font-semibold bg-yellow-400 rounded-md w-[150px]">
                                    Direktur Umum
                                </h3>
                                <p className="text-white">
                                    Berlatar belakang pendidikan Sarjana Teknik, saat ini bertanggung jawab terkait operasional untuk keberlangsungan proyek yang sedang berjalan
                                </p>
                                <div>
                                    <p className="text-white pb-1">Hubungi :</p>
                                    <Link href="https://wa.me/6281222064484" target="_blank" className="items-center text-white hover:text-yellow-400 pt-1">
                                        <svg role="img" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" width="25"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Baris ke 2 */}
            <div className="flex flex-wrap lg:flex-nowrap lg:gap-20 lg:pl-24 pt-5">
                <div className="lg:w-1/2">
                    <div className="card lg:card-side bg-primary shadow-xl lg:w-[600px] lg:h-[300px]">
                        <figure>
                            <Image
                                src={img3.src}
                                alt="Album" 
                                width={500}
                                height={300}/>
                        </figure>
                        <div>
                            <div className="card-body lg:w-[390px]">
                                <h2 className="card-title text-black">Brian Maulana</h2>
                                <h3 className="text-white text-center font-semibold bg-yellow-400 rounded-md w-[150px]">
                                    Direktur Teknis
                                </h3>
                                <p className="text-white">
                                    Berlatar belakang pendidikan Sarjana Teknik, saat ini bertanggung jawab untuk memimpin tim teknis dalam hal penentuan konsep, budgeting, dan materi presentasi
                                </p>
                                <div>
                                    <p className="text-white pb-1">Hubungi :</p>
                                    <Link href="https://wa.me/6281222064484" target="_blank" className="items-center text-white hover:text-yellow-400 pt-1">
                                        <svg role="img" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" width="25"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-full pt-10 lg:pt-0">
                    <div className="card lg:card-side bg-primary shadow-xl lg:w-[600px] lg:h-[300px]">
                        <figure>
                            <Image
                                src={img4.src}
                                alt="Album"
                                width={500}
                                height={300} />
                        </figure>
                        <div>
                            <div className="card-body lg:w-[400px]">
                                <h2 className="card-title text-black">Rifky Rosichan</h2>
                                <h3 className="text-white text-center font-semibold bg-yellow-400 rounded-md w-[150px]">
                                    Direktur Umum
                                </h3>
                                <p className="text-white">
                                    Berlatar belakang pendidikan Sarjana Sipil, saat ini bertanggung jawab terkait operasional pelaksanaan di lapangan atau di lokasi konstruksi
                                </p>
                                <div>
                                    <p className="text-white pb-1">Hubungi :</p>
                                    <Link href="https://wa.me/6281222064484" target="_blank" className="items-center text-white hover:text-yellow-400 pt-1">
                                        <svg role="img" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" width="25"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}