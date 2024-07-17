import Link from "next/link"


export default function Footer() {
    return (
        <div>
            <footer className="footer text-base-content p-10 bg-yellow-500">
                <nav className="text-white">
                    <h6 className="font-semibold text-base text-black">Layanan & Produk</h6>
                    <Link href="/Produk-Layanan#layanan1" className="link link-hover">Pelaksanaan Konstruksi</Link>
                    <Link href="/Produk-Layanan#layanan2" className="link link-hover">Penyediaan Peralatan Hidro Mekanikal</Link>
                    <Link href="/Produk-Layanan#layanan3" className="link link-hover">Perbaikan & Perawatan</Link>
                </nav>
                <nav className="text-white">
                    <h6 className="font-semibold text-base text-black">Company</h6>
                    <Link href="/Beranda" className="link link-hover">Beranda</Link>
                    <Link href="/Tentang-Kami" className="link link-hover">Tentang Kami</Link>
                    <Link href="/Produk-Layanan" className="link link-hover">Layanan & Produk</Link>
                    <Link href="/Tim-Kami" className="link link-hover">Tim</Link>
                    <Link href="/Service_Blog" className="link link-hover">Blog Layanan & Produk</Link>
                </nav>
                <nav className="flex flex-col justify-center">
                    <h6 className="font-semibold text-base text-black">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <Link href="https://wa.me/6281222064484" target="_blank" className="text-white">
                            <svg role="img" viewBox="0 0 24 24" className="fill-current" xmlns="http://www.w3.org/2000/svg" width="25"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        </Link>
                    </div>
                </nav>
            </footer>

            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-current">
                        <path
                            d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
                    </svg>
                    <p>
                        PT. MEKAHIDRO JAYA TEKNIK
                        <br />
                        Kota Semarang - Jawa Tengah
                    </p>
                </aside>
            </footer>
        </div>
    )
}