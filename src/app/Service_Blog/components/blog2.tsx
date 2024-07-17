import Image from "next/image"
import img1 from "@/app/assets/produk.png"

export default function Blog2() {
    return (
        <div className="p-5 pt-5 pb-10 bg-white lg:flex content-center gap-10 lg:pl-32">
            <div className="lg:w-1/2">
                <h1 className="text-black text-2xl lg:text-3xl font-semibold">2. Penyediaan Peralatan Hidro Mekanikal</h1>
                <p className="text-black py-6 text-justify">
                Penyediaan peralatan mekanikal hidro ini, Kami bekerja sama dengan brand-brand ternama seperti VAG, Wilo, BOMP Pump, dan Airvlo. Produk-produk ini sangat terjamin mulai dari kualitas bahan material dan jaminan garansi nya. Produk yang dapat Kami sediakan adalah sebagai berikut, 1. Pump/Pompa Air : Pompa Axial, Pompa Sentrifugal, Pompa Lumpur, Mobile Pump, 2. Valve/Katup : Check Valve, Butterfly Valve, Gate Valve, Air Valve, Control Valve, 3. Pintu Air Dan Bonnet Gate :Slice Gate, Fix Wheel Gate, DLL.
                </p>
            </div>
            <div className="lg:w-1/2">
                <Image src={img1.src} alt="" width={500} height={500} />
            </div>
        </div>
    )
}