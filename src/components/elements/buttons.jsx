import trash from '../../assets/trash.svg'
import add from "../../assets/add.svg"
export function Trash(){
    return(
        <button className="w-fit h-fit p-8 bg-transparent rounded-full scale-90 transition-all duration-200 ease-in hover:bg-purple-300 hover:scale-100">
                <img src={trash} alt="trash can icon" width={40} height={40} />
        </button>
    )
}
export function Add(){
    return(
        <button className="w-fit h-fit p-8 bg-transparent transition-[transform] duration-200 ease-in hover:translate-y-[-0.5rem]">
            <img src={add} alt=" plus sign icon" width={40} height={40} />
        </button>
    )
}
export function Claim(){
    return(
        <button className=" bg-slate-600 text-slate-100 py-6 px-12 w-fit h-fit border-2 rounded-2xl transition-[background-color] duration-200 ease-in hover:bg-transparent hover:text-slate-800">
            Claim
        </button>
    )
}
export function Submit(){
    return(
        <button className="py-6 px-10 outline outline-slate-700 outline-2 rounded-2xl transition-[outline] duration-100 ease-in hover:outline-4">
            Submit
        </button>
    )
}
export function Cta(){
    return(
        <>
            <button className=" bg-slate-600 text-neutral-100 px-8 py-4 rounded-2xl font-bold transition-all duration-200 ease-in hover:scale-125 hover:text-violet-300 ">
                Click!
            </button>
        </>
    )
}