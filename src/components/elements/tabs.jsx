
export function Highlight(){
    return(
        <>
        <p className=" bg-purple-800 text-slate-200 p-4 rounded-lg transition-[filter] duration-200 ease-in hover:brightness-150">Tab1</p> 
    </>
    )
}
export function Inverse(){
    return(
        <>
        <p className=" bg-purple-800  text-slate-200 p-4 rounded-lg transition-colors duration-200 ease-in hover:bg-slate-100 hover:text-zinc-800">Tab2</p> 
    </>
    )
}
export function Bold(){
    return(
        <>
            <p className="hover:font-bold">
                Tab3
            </p>
        </>
    )
}
export function Underline(){
    return(
        <>
            <p className=" relative after:content-[''] after:w-0 after:h-0 after:transition-all after:duration-200 hover:after:w-full hover:after:h-[2px] hover:after:bg-violet-400 hover:after:absolute hover:after:bottom-[0px] hover:after:left-0">
                Tab4
            </p>
        </>
    )
}
export function Border(){
    return(
        <>
        <p className=" bg-purple-200 py-4 px-8 border-2 border-transparent transition-[border] hover:border-slate-800 rounded-lg">Tab5</p> 
    </>
    )
}