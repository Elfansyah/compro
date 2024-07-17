import img1 from "@/app/assets/A Yusuf.jpg"
import img2 from "@/app/assets/Pak Rachmat.jpg"
import img3 from "@/app/assets/Foto Brian.jpg"
import img4 from "@/app/assets/Foto Rifky.jpg"
import Image from "next/image"
import Link from "next/link"

export default function Struktur() {
  return (
    <div className="p-10 lg:pl-24 lg:pr-24 lg:pt-10 bg-white">
      <div className="w-full text-center">
        <h3 className="font-semibold text-black text-xl lg:text-3xl">Direktur</h3>
        <h1 className="text-primary font-bold text-2xl lg:text-4xl">Mekanikal Hidro Jaya Teknik</h1>
      </div>
      <div className="pt-5 lg:pt-10">
        <table className="table text-center text-black">
          {/* head */}
          <thead>
            <tr className="text-black lg:text-lg">
              <th>Foto</th>
              <th>Nama</th>
              <th>Posisi</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>

              <td>
                <div className="flex items-center justify-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src={img2.src}
                        alt="Rachmat"
                        width={500}
                        height={300} />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <div>
                    <div className="font-bold">Rachmat</div>
                  </div>
                </div>
              </td>
              <td>
                <span>Direktur Utama</span>
              </td>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src={img1.src}
                        alt="Avatar Tailwind CSS Component" 
                        width={500}
                        height={300}/>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3 justify-center">
                  <div className="avatar">
                  </div>
                  <div>
                    <div className="font-bold">Muhammad Yusuf</div>
                  </div>
                </div>
              </td>
              <td>
                <span>Wakil Direktur</span>
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src={img3.src}
                        alt="Avatar Tailwind CSS Component" 
                        width={500}
                        height={300}/>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3 justify-center">
                  <div>
                    <div className="font-bold">Brian</div>
                  </div>
                </div>
              </td>
              <td>
                <span>Direktur Teknik</span>
              </td>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center justify-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <Image
                        src={img4.src}
                        alt="Avatar Tailwind CSS Component" 
                        width={500}
                        height={300}/>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex items-center gap-3 justify-center">
                  <div>
                    <div className="font-bold">Rifky Rosichan</div>
                  </div>
                </div>
              </td>
              <td>
                <span>Direktur Operasional</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="pt-10 flex justify-center">
        <button> <Link href="/Tim-Kami" className="btn btn-primary text-white">Lihat Selengkapnya</Link></button>
      </div>
    </div>
  )
}