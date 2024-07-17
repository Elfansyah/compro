import Blog1 from "./components/blog1";
import Blog2 from "./components/blog2";
import Blog3 from "./components/blog3";
import FetchBlog from "./components/fetchBlog";

export default function BlogService() {
    return (
        <div className="bg-white">
            <div className="bg-white text-center">
                <h1 className="text-yellow-400 text-3xl font-bold lg:text-4xl">Blog Layanan Dan Produk</h1>
                <h3 className="font-semibold text-2xl text-black lg:text-3xl">Mekahidro Jaya Teknik</h3>
            </div>
            <FetchBlog/>
           
        </div>
    )
}