
export function Highlight(){
    return(
        <>
        <div className=" bg-purple-800 text-slate-200 p-4 rounded-lg transition-[filter] duration-200 ease-in hover:brightness-150">Tab1</div> 
    </>
    )
}
export function Inverse(){
    return(
        <>
        <div className=" bg-purple-800  text-slate-200 p-4 rounded-lg transition-colors duration-200 ease-in hover:bg-slate-100 hover:text-zinc-800">Tab2</div> 
    </>
    )
}
export function Bold(){
    return(
        <>
            <div className="hover:font-bold">
                Tab3
            </div>
        </>
    )
}
export function Underline(){
    return(
        <>
            <div className=" relative after:content-[''] after:w-0 after:h-0 after:transition-all after:duration-200 hover:after:w-full hover:after:h-[2px] hover:after:bg-violet-400 hover:after:absolute hover:after:bottom-[0px] hover:after:left-0">
                Tab4
            </div>
        </>
    )
}
export function Border(){
    return(
        <>
        <div className=" bg-purple-200 py-4 px-8 border-2 border-transparent transition-[border] hover:border-slate-800 rounded-lg">Tab5</div> 
    </>
    )
}