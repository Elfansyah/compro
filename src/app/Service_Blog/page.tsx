import Blog1 from "./components/blog1";
import Blog2 from "./components/blog2";
import Blog3 from "./components/blog3";
import FetchBlog from "./components/fetchBlog";
import { Metadata } from 'next';

export const metadata : Metadata = {
    title : "Blog Layanan & Produk",
    description : "Blog Layanan & Produk PT. Mekahidro Jaya Teknik"
  }

export default function BlogService() {
    return (
        <div className="bg-white pt-10 pb-10">
            <div className="bg-white text-center pb-10">
                <h1 className="text-yellow-400 text-3xl font-bold lg:text-4xl">Blog Layanan Dan Produk</h1>
                <h3 className="font-semibold text-2xl text-black lg:text-3xl">Mekahidro Jaya Teknik</h3>
            </div>
            <FetchBlog/>
           
        </div>
    )
}