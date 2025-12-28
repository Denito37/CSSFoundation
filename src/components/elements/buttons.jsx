import trash from '/trash.svg'
import add from "/add.svg"
export function Trash(){
    return(
        <button className="w-fit h-fit p-8 bg-transparent rounded-full scale-90 transition-all duration-200 ease-in hover:bg-purple-700 hover:scale-100">
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
        <button className=" bg-neutral-400 py-6 px-12 w-fit h-fit border-2 rounded-2xl transition-[background-color] duration-200 ease-in hover:bg-transparent">
            Claim
        </button>
    )
}
export function Submit(){
    return(
        <button className="py-6 px-10 border-2 rounded-2xl transition-[border] duration-200 ease-in hover:border-4">
            Submit
        </button>
    )
}
export function Cta(){
    return(
        <>
            <button className=" bg-slate-400 px-8 py-4 rounded-2xl font-bold transition-all duration-200 ease-in hover:scale-125 hover:text-violet-700 ">
                Click!
            </button>
        </>
    )
}