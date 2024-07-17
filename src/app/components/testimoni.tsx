import img1 from '@/app/assets/testimoni1.jpg'
import img2 from '@/app/assets/testimoni2.jpg'
import img3 from '@/app/assets/testimoni3.jpg'
import img4 from '@/app/assets/testimoni4.jpg'
import Image from 'next/image';

export default function Testimoni() {
  return (
    <div className="pt-20 pb-20 bg-white w-[425px] lg:w-full">
      <div className="text-center">
        <h3 className="font-semibold text-yellow-400 textlg lg:text-2xl">TESTIMONI</h3>
        <h1 className="text-black font-bold mb-5 text-xl lg:text-4xl">Mekanikal Hidro Jaya Teknik</h1>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='mb-12 p-4'>
          <div className='p-4 rounded-md shadow-md overflow-hidden flex gap-5 lg:w-[700px] lg:h-[130px]'>
            <div>
              <Image src={img1.src} alt="Testimoni 1" width="50" height={130} />
            </div>y
            <div className='flex flex-col'>
              <h3 className='font-semibold lg:text-xl text-black'>Guntur</h3>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className='font-medium text-sm lg:text-base text-black'>&quot;tUntuk pemesanan produk mekahidro sangat lengkap, orginal, dan bergaransi lama.&quot;</p>
            </div>
          </div>
        </div>
        <div className='mb-12 p-4'>
          <div className='p-4 rounded-md shadow-md overflow-hidden flex gap-5 lg:w-[700px] lg:h-[130px]'>
            <div>
              <Image src={img2.src} alt="Testimoni 2" width="50" height={130} />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold lg:text-xl text-black'>Santoso</h3>
              <div className="rating ">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className='font-medium text-sm lg:text-base text-black'>&quot; Pengerjaan Konstruksi Pipa dan katup sangat cepat sesuai dengan SPK, harga bersahabat, dan bergaransi. &quot;</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-wrap justify-center'>
        <div className='mb-12 p-4'>
          <div className='p-4 rounded-md shadow-md overflow-hidden flex gap-5 lg:w-[700px] lg:h-[130px]'>
            <div>
              <Image src={img3.src} alt="Testimoni 3" width="50" height={130} />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold lg:text-xl text-black'>Ricky Johar</h3>
              <div className="rating ">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className='font-medium text-sm lg:text-base text-black'>&quot;Pelayanan sangat baik, mulai dari persiapan hingga Pengerjaan sangat cepat!&quot;</p>
            </div>
          </div>
        </div>
        <div className='p-4'>
          <div className='p-4 rounded-md shadow-md overflow-hidden flex gap-5 lg:w-[700px] lg:h-[130px]'>
            <div>
              <Image src={img4.src} alt="Testimoni 4" width="50" height={130} />
            </div>
            <div className='flex flex-col'>
              <h3 className='font-semibold lg:text-xl text-black'>Abdul Ramlan</h3>
              <div className="rating ">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <p className='font-medium text-sm lg:text-base text-black'>&quot;Makasih MJT, pembelian alat konstruksinya lengkap!&quot;</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}