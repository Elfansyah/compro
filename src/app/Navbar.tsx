import Image from 'next/image';
import Link from 'next/link';
import img1 from '@/app/assets/LogoMJT.png';
import img2 from '@/app/assets/Logo MJT (White).png';

export default function NavBar() {
    return (
        <div className="flex items-center justify-between p-2 bg-white sticky top-0 z-10 gap-40">
            <div className="flex-none items-center p-3">
                <Image src={img1} alt="Logo" width="200" className='lg:w-[200px] w-[150px]' />
            </div>
            <div className="drawer drawer-end lg:hidden">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-4" className="w-[30px] h-[2px] my-2 block bg-black"></label>
                    <label htmlFor="my-drawer-4" className="w-[30px] h-[2px] my-2 block bg-black"></label>
                    <label htmlFor="my-drawer-4" className="w-[30px] h-[2px] my-2 block bg-black"></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4 text-white">
                        {/* Sidebar content here */}
                        <li><Link href="/">Beranda</Link></li>
                        <li><Link href="/Tentang-Kami">Tentang Kami</Link></li>
                        <li><Link href='/Produk-Layanan'>Layanan & Produk</Link></li>
                        <li><Link href='/Tim-Kami'>Tim Kami</Link></li>
                        <li><Link href='/Service_Blog'>Blog Layanan & Produk</Link></li>
                        <Image src={img2} alt="Logo" width="200" className='lg:w-[200px] w-[150px] pt-10 pl-3 lg:hidden'/>
                    </ul>
                </div>
            </div>
            <div className="hidden font-medium text-lg lg:flex gap-10 px-10">
                <Link href="/" className='text-gray-500 hover:text-blue-500'>Beranda</Link>
                <Link href="/Tentang-Kami" className='text-gray-500 hover:text-blue-500'>Tentang Kami</Link>
                <Link href="/Produk-Layanan" className='text-gray-500 hover:text-blue-500'>Layanan & Produk</Link>
                <Link href="/Tim-Kami" className='text-gray-500 hover:text-blue-500'>Tim Kami</Link>
                <Link href="/Service_Blog" className='text-gray-500 hover:text-blue-500'>Blog Layanan & Produk</Link>
            </div>

        </div>
    );
}
