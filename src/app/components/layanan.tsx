import img3 from '@/app/assets/foto1.jpg'
import img4 from '@/app/assets/PT. Mekahidro Jaya Teknik (Company Profile).jpg'
import img5 from '@/app/assets/Trash Rake.jpg'
import Image from 'next/image'
import Link from 'next/link'

export default function LayananHome() {
    return (
        <div>
            <div className='pt-20 pb-20 bg-white'>
                <div className="text-center pb-10">
                    <h3 className="font-semibold text-yellow-500 text-lg lg:text-2xl">Layanan & Produk</h3>
                    <h1 className="text-primary font-bold text-2xl lg:text-4xl">Mekanikal Hidro Jaya Teknik</h1>
                </div>
                <div className="flex flex-wrap bg-white gap-20 mx-auto items-center justify-center ">
                    <div className="bg-yellow-500 flex flex-col items-center p-5 rounded-md -xl shadow-lg w-96 pt-10">
                        <Image src={img3.src} alt='' width="300" height="200" className='h-[205px] overflow-hidden hover:scale-105 transition duration-300 ease-in-out' />
                        <div className='py-6 px-6'>
                            <h3 className='font-semibold mb-3 text-xl text-black '><Link href="/Produk-Layanan#layanan1"></Link>Pelaksanaan Konstruksi</h3>
                            <p className='mb-5 text-black'>Water Treatment Plan (WTP),Waste Water Treatment Plant, Sewage Treatment Plan, Hydropower Dan Bendungan, Pengendalian Banjir </p>
                            <Link href="/Produk-Layanan#layanan1" className='font-medium text-sm text-white bg-primary rounded-md py-2 px-4 hover:opacity-80'>Baca Selengkapnya</Link>
                        </div>
                    </div>
                    <div className="bg-yellow-500 flex flex-col items-center p-5 rounded-md -xl shadow-lg overflow-hidden pt-10 w-96 ">
                        <Image src={img4.src} alt='' width="300" height="200" className='h-[200px] hover:scale-105 transition duration-300 ease-in-out' />
                        <div className='py-6 px-6'>
                            <h3 className='font-semibold mb-3 text-xl text-black '><Link href="/Produk-Layanan#layanan2"></Link>Penyediaan Peralatan Hidro Mekanikal</h3>
                            <p className='mb-5 text-black'>Penyediaan peralatan Hidro Mekanikal seperti Pump/Pompa Air, Valve/Katup, dan Bonnet Gate/Pintu Air  </p>
                            <Link href="/Produk-Layanan#layanan2" className='font-medium text-sm text-white bg-primary rounded-md py-2 px-4 hover:opacity-80'>Baca Selengkapnya</Link>
                        </div>
                    </div>
                    <div className="bg-yellow-500 flex flex-col items-center p-5 pt-10 rounded-md -xl shadow-lg overflow-hidden w-96">
                        <Image src={img5.src} alt='' width="300" height="237" className='h-[249px] hover:scale-105 transition duration-300 ease-in-out' />
                        <div className='py-6 px-6'>
                            <h3 className='font-semibold mb-3 text-xl text-black '><Link href="/Produk-Layanan#layanan3"></Link>Perbaikan Dan Pemeliharaan</h3>
                            <p className='mb-5 text-black'>Perbaikan Dan Pemeliharaan Peralatan Hidro Mekanikal</p>
                            <Link href="/Produk-Layanan#layanan3" className='font-medium text-sm text-white bg-primary rounded-md py-2 px-4 hover:opacity-80'>Baca Selengkapnya</Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}