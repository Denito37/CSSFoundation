import orange from '../../assets/orange.jpg'
import egg from '../../assets/egg.jpg'
import cherry from '../../assets/cherry.jpg'
import cone from '../../assets/cone.jpg'
export function Info(){
    return(
        <div className=' relative rounded-2xl w-[150px] h-[150px]'>
        <img className=' rounded-2xl' src={orange} width={"150px"} height={"150px"} alt=" orange picture " />
        <div className='absolute px-6 text-sky-800 text-center text-xs bottom-[20%]'>Lorem ipsum dolor sit amet consectetur.</div>
        </div>
    )
}
export function Blur(){
    return(
        <>
            <img className=' rounded-2xl blur-sm sepia-[25%] transition-[filter] duration-200 ease-in hover:blur-0 hover:sepia-0' 
            src={egg} width={"150px"} height={"150px"} alt=" egg picture " />
        </>
    )
}
export function PopUp(){
    return(
        <div className=' grid grid-cols-2 gap-2'>
            <img className=' rounded-2xl hover:scale-[1.4] transition-transform aspect-square' src={orange} alt="orange" width={"125px"} height={"125px"} />
            <img className=' rounded-2xl hover:scale-[1.4] transition-transform aspect-square' src={egg} alt="egg" width={"125px"} height={"125px"} />
            <img className=' rounded-2xl hover:scale-[1.4] transition-transform aspect-square' src={cherry} alt="egg" width={"125px"} height={"125px"} />
            <img className=' rounded-2xl hover:scale-[1.4] transition-transform aspect-square' src={cone} alt="orange" width={"125px"} height={"125px"} />
        </div>
    )
}
