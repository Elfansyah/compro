import Budaya from "./componen2/budaya";
import Sejarah from "./componen2/sejarah";
import Struktur from "./componen2/struktur";
import { Metadata } from 'next';

export const metadata : Metadata = {
  title : "Tentang Kami",
  description : "Tentang Kami PT. Mekahidro Jaya Teknik"
}

export default function About () {
    return (
        <div> 
          <Sejarah />  
          <Struktur />   
          <Budaya />  
        </div>
    )
}