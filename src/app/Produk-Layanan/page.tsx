
import Testimoni from "../components/testimoni";
import Layanan1 from "./components/layanan1";
import Layanan2 from "./components/layanan2";
import Layanan3 from "./components/layanan3";
import { Metadata } from 'next';

export const metadata : Metadata = {
    title : "Produk & Layanan",
    description : "Produk & Layanan PT. Mekahidro Jaya Teknik"
  }

export default function ProdukLayanan () {
    return (
        <div>
            <Layanan1 />
            <Layanan2 />
            <Layanan3 />
            <Testimoni />
        </div>
    )
}