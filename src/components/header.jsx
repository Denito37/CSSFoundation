import CSS from '/Purple_CSS_Logo.svg.png'
import menu from '../assets/menu.svg'
import close from '../assets/close-icon.svg'
import Nav from './nav';
import { useTheme } from './theme.jsx';
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Header(){
    let navigate = useNavigate(); 
    const location = useLocation();
    const [showNav, setShowNav] = useState(false)
    const {isDark, handleTheme} = useTheme()

    const toggleNavItems = () => {
    setShowNav(!showNav)
    console.log(showNav);
    }
    useEffect( () =>{
        setShowNav(false)
    },[location])

    return(
        <div className="sticky top-0 z-10 bg-[#171717] glass">
            <header className=" sm:flex my-2 mx-4 sm:justify-between">
                <div className=' grid grid-cols-3 '>
                <img onClick={() => navigate('/')} className='order-2 mx-auto sm:mx-0' src={CSS} width={75} height={75} title='Home' alt="CSS Collection" />
                <button onClick={() => toggleNavItems()} className='sm:hidden order-1'>
                    {showNav == false ?
                    <img src={menu} width={50} height={50} alt="open menu button" title='open menu' />
                    : <img src={close} width={50} height={50} alt='close menu button' title='close menu'  />}
                </button>
                </div>

                <div className={`${showNav == true ? 'block' : 'hidden'}`}>
                <Nav />
                </div>
                
                <nav>
                    <ul className="scrollbar-none hidden sm:flex grid-cols-3 grid-rows-2 content-center justify-items-center gap-x-2 p-4 max-w-5xl mx-auto overflow-x-scroll">
                        <li className=" w-fit p-2 ">
                            <Link to='/'>Home</Link>
                        </li>
                        <li className=" w-fit p-2 ">
                            <Link to='/foundation'>Foundation</Link>
                        </li>
                        <li className=" w-fit p-2 ">
                            <Link to='/button'>Buttons</Link>
                        </li>
                        <li className=" w-fit p-2">
                            <Link to='/tab'>Tabs</Link>
                        </li>
                        <li className=" w-fit p-2">
                            <Link to='/image'>Images</Link>
                        </li>
                        <li className=" w-fit p-2">
                            <Link to='/error'>Errors</Link>
                        </li>
                        <li className=" w-fit p-2">
                            <Link to='/loading'>Loading</Link>
                        </li>
                        <button
                            aria-label='Toggle Theme'
                            onClick={handleTheme}>
                            Theme Toggle
                        </button>
                    </ul>
                </nav>
            </header>
        <hr />
        </div>
    )
}