import img6 from '@/app/assets/LogoMJT.png';
import Image from 'next/image';

export default function OverView () {
    return (
        <div className=" pt-20 pb-20 p-10 lg:pt-20 lg:pb-20 bg-primary">
                <div className="w-full text-center">
                    <h3 className="font-semibold text-lg text-yellow-500 lg:text-2xl lg:pb-5">Tentang</h3>
                    <h1 className="text-white text-2xl font-bold lg:text-4xl">Mekanikal Hidro Jaya Teknik</h1>
                </div>
                <div className='gap-10 pt-10 w-full flex flex-wrap justify-center'>
                    <div className='lg:pt-5'>
                        <Image src={img6.src} alt='logoMJT' width="500" height={200} />
                    </div>
                    <div className="text-justify lg:w-1/2 lg:text-base">
                        <p className="text-white pb-5">Kami berdiri bersama untuk menjadi perusahaan yang handal dibidangnya mekanikal hidro dengan nama PT. MEKAHIDRO JAYA TEKNIK yang berperan sebagai solusi untuk kegiatan teknis konstruksi dan juga teknis pelaksanaan instalasi.</p>
                        <p className="text-white">Peran kami adalah sebagai partner untuk memberikan jasa pelaksanaan konstruksi demi solusi terbaik dalam arahan yang tepat sesuai standar tahapan tata aturan teknis pembangunan. Dengan begitu nantinya berbagai tahapan pembangunan akan tercapai sesuai keinginan dalam perhitungan yang matang.</p>
                    </div>
                </div>
        </div>

    )
}