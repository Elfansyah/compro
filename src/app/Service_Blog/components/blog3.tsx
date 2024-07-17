import Image from "next/image"
import img1 from "@/app/assets/Perbaikan Pompa Irigasi 1.jpg"

export default function Blog3() {
    return (
        <div className="p-5 pt-5 pb-20 bg-white lg:flex justify-center gap-10 lg:pl-32">
            <div className="lg:w-1/2">
                <h1 className="text-black text-2xl font-semibold">3. Perbaikan Dan Pemeliharaan</h1>
                <p className="text-black py-6 text-justify">
                Pemakaian alat mekanikal hidro yang berjalan terus-menerus selama 24jam non stop, sangat diperlukan perawatan maupun perbaikan secara berkala. Hal ini perlukan agar untuk memaksimalkan atau optimalisasi kinerja dari alat hidro yang telah terpasang. Selain itu fungsi perawatan atau mengganti part yang sudah pada masanya, dapat meminimalisir biaya yang besar atau mengganti unit baru jika mengalami kerusakan yang menyebabkan kinerja alat sudah tidak bisa diperbaiki lagi. Pelaksanaan Perbaikan atau pemeliharaan akan kami tentukan pada saat dilakukan pemeriksaan oleh Tim Kami ke lokasi, dan proses ini membutuhkan waktu 7 hari kerja. Setiap Perbaikan akan mendapatkan garansi selama 1 bulan setelah part telah terpasang dan berjalan dengan sempurna. 
                </p>
            </div>
            <div className="lg:w-1/2">
                <Image src={img1.src} alt="" width={500} height={500} />
            </div>
        </div>
    )
}