
import { Link } from "react-router-dom"
export default function Nav(){
    return(
        
        <nav className=" absolute left-0" >
                <ul className=" glass sm:hidden bg-[#171717] mt-4 p-8 mobileNav">
                    <li className=" text-2xl w-fit p-2 my-2">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className=" text-2xl w-fit p-2 my-2">
                        <Link to='/foundation'>Foundation</Link>
                    </li>
                    <li className=" text-2xl w-fit p-2 my-2">
                        <Link to='/button'>Buttons</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2">
                        <Link to='/tab'>Tabs</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2">
                        <Link to='/image'>Images</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2">
                        <Link to='/error'>Errors</Link>
                    </li>
                    <li className="text-2xl w-fit p-2 my-2">
                        <Link to='/loading'>Loading</Link>
                    </li>
                </ul>
            </nav>
            
    )
}