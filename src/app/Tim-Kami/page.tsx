import Pimpinan from "./component/pimpinan";
import Staff from "./component/staff";

export default function TimKami() {
    return (
        <div>
            <div className=" bg-white text-center pt-10 pb-5">
                <h1 className="text-yellow-400 text-3xl font-bold lg:text-4xl">TIM</h1>
                <h3 className="font-semibold text-2xl text-black lg:text-3xl">Mekahidro Jaya Teknik</h3>
            </div>
            <Pimpinan />
            <Staff />
        </div>

    )
}