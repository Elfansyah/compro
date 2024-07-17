import HomePage from "./components/home";
import OverView from './components/overview';
import LayananHome from './components/layanan';
import Workshop from './components/workshop';
import { Metadata } from 'next';
import OrangPenting from './components/orangpenting';
import Testimoni from './components/testimoni';
import OurClients from "./components/ourclients";


export const metadata : Metadata = {
  title : "Beranda",
  description : "Beranda Page PT. Mekahidro Jaya Teknik"
}

export default function Home() {
  return (
    <main>
      <div>
        <HomePage />
        <OverView />
        <LayananHome />
        <OurClients />
        <Workshop />
        <OrangPenting />
        <Testimoni />
      </div>
    </main>
  );
}
