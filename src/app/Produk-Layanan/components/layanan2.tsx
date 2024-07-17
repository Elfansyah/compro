import Image from "next/image";
import Link from "next/link";
import img1 from "@/app/assets/produk.png"
import img2 from "@/app/assets/VAG.png"
import img3 from "@/app/assets/BBA.png"
import img4 from "@/app/assets/Wilo.svg"
import img5 from "@/app/assets/Airvlo.png"

export default function Layanan2() {
  return (
    <div id="layanan2" className="p-5 pt-10 pb-10 bg-white flex flex-wrap lg:pl-20 lg:pr-20">
      <div className="lg:w-1/2 lg:pt-20">
        <h1 className="text-black text-2xl lg:text-3xl font-semibold">2. Penyediaan Peralatan Hidro Mekanikal</h1>
        <p className="text-black py-6 text-justify">
          Penyediaan berbagai macam peralatan hidro mekanikal bergaransi, mulai dari Pump/Pompa Air, Valve/Katup, dan Bonnet Gate/Pintu Air
        </p>
        <div className="hidden lg:flex lg:flex-col">
          <h3 className="font-semibold text-black">Pump/Pompa Air</h3>
          <p className="text-base italic text-primary pb-5">Pompa Axial, Pompa Sentrifugal, Pompa Lumpur, Mobile Pump</p>
          <h3 className="font-semibold text-black">Valve/Katup</h3>
          <p className="text-base italic text-primary pb-5">Check Valve, Butterfly Valve, Gate Valve, Air Valve, Control Valve</p>
          <h3 className="font-semibold text-black">Pump/Pompa Air</h3>
          <p className="text-base italic text-primary">Slice Gate, Fix Wheel Gate, DLL</p>
        </div>
        <div className="pt-10 hidden lg:flex">
          <button> <Link href="https://wa.me/6281222064484" target="_blank" className="btn btn-primary text-white">Mulai Konsultasi</Link></button>
        </div>
      </div>
      <div className="flex justify-center lg:w-1/2 pt-5">
        <Image src={img1} alt="Produk MJT" className="w-[800px]" />
      </div>
      <div className="lg:hidden pt-10">
        <h3 className="font-semibold text-black">Pump/Pompa Air</h3>
        <p className="text-base italic text-primary pb-5">Pompa Axial, Pompa Sentrifugal, Pompa Lumpur, Mobile Pump</p>
        <h3 className="font-semibold text-black">Valve/Katup</h3>
        <p className="text-base italic text-primary pb-5">Check Valve, Butterfly Valve, Gate Valve, Air Valve, Control Valve</p>
        <h3 className="font-semibold text-black">Pump/Pompa Air</h3>
        <p className="text-base italic text-primary">Slice Gate, Fix Wheel Gate, DLL</p>
      </div>
      <div className='w-full pt-10'>
        <p className="font-semibold text-black text-center">*Brand Supply</p>
        <div className='flex items-center justify-center lg:gap-10'>
          <a href='#layanan2' className='max-w-[150px] mx-2 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <Image src={img2.src} alt="Google" width={150} height={100} />
          </a>
          <a href='#layanan2' className='max-w-[140px] lg:max-w-[250px] mx-2 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <Image src={img3.src} alt="Android" width={150} height={100}/>
          </a>
          <a href='#layanan2' className='max-w-[140px] mx-2 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <Image src={img4.src} alt="Purwadhika" width={150} height={100} />
          </a>
          <a href='#layanan2' className='max-w-[250px] lg:max-w-[170px] mx-2 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 duration-100 lg:mx-6 xl:mx-8'>
            <Image src={img5.src} alt="Telkom University" width={150} height={100}/>
          </a>

        </div>

      </div>
      <div className="p-5 pt-10 flex flex-wrap justify-center lg:hidden">
        <button> <Link href="https://wa.me/6281222064484" target="_blank" className="btn btn-primary text-white">Mulai Konsultasi</Link></button>
      </div>
    </div>
  )
}