
import { Link } from "react-router-dom"
export default function MobileNav (){
    return(
        
        <nav className=" absolute left-0   " >
                <ul className=" glass sm:hidden bg-[#171717] mt-4 p-8 w-[100vw] h-[100vh]">
                    <li className=" text-2xl w-fit p-2 my-2 underlineLink ">
                        <Link to='/button'>Buttons</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2 underlineLink">
                        <Link to='/tab'>Tabs</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2 underlineLink">
                        <Link to='/image'>Images</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2 underlineLink">
                        <Link to='/error'>Errors</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2 underlineLink">
                        <Link to='/loading'>Loading</Link>
                    </li>
                </ul>
            </nav>
            
    )
}