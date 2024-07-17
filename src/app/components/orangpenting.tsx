import img5 from '@/app/assets/Pak_Rachmat-removebg-preview.png';
import img6 from '@/app/assets/Mas_Maul-removebg-preview.png';
import Image from 'next/image';
Image

export default function OrangPenting() {
    return (
        <div className='p-5 pt-20 pb-10 bg-primary'>
            <div className="text-center">
                <h3 className="font-semibold text-yellow-400 text-lg lg:text-2xl">Tentang</h3>
                <h1 className="text-white font-bold mb-5 text-2xl lg:text-4xl">Pimpinan Mekahidro Jaya Teknik</h1>
            </div>
            <div className="pt-5 pb-5 flex flex-wrap justify-center content-center lg:gap-32 mx-auto gap-10">
                <Image src={img5.src} alt="gambar" className='w-[300px] lg:w-[340px]' width={400} height={100} />
                <div className='text-center w-[425px] lg:w-[700px] content-center'>
                    <h3 className='text-black font-bold text-xl'>Rachmat</h3>
                    <h4 className='text-yellow-400 text-lg font-semibold'>Direktur Utama</h4>
                    <p className='text-white pt-5 text-justify lg:text-lg'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sequi vel minus earum reiciendis optio adipisci, ullam perferendis, laboriosam deserunt aperiam eaque eius quibusdam, suscipit eos exercitationem nihil? Quasi, sit!</p>
                </div>
            </div>
            <div className="pt-5 pb-10 flex flex-wrap justify-center content-center lg:gap-32">
                <Image src={img6.src} alt="gambar" className='w-[300px] lg:hidden lg:w-[320px]' width={1000} height={100} />
                <div className='text-center w-[425px] lg:w-[700px] pt-10 content-center'>
                    <h3 className='text-black font-bold text-xl '>Muhammad Yusuf</h3>
                    <h4 className='text-yellow-400 text-lg font-semibold'>Wakil Direktur Utama</h4>
                    <p className='text-white pt-5 text-justify lg:text-lg'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates sequi vel minus earum reiciendis optio adipisci, ullam perferendis, laboriosam deserunt aperiam eaque eius quibusdam, suscipit eos exercitationem nihil? Quasi, sit!</p>
                </div>
                <div className='hidden lg:flex'>
                    <Image src={img6.src} alt="gambar" width="320" height={100}/>
                </div>
            </div>
        </div>
    )
}