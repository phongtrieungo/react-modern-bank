import { useState } from "react"
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants/';

export const Navbar = () => {
    const [open, setOpen] = useState(false);

    return <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((link, index) =>
                <li key={link.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                    {link.title}
                </li>)
            }
        </ul>

        <span className="sm:hidden flex flex-1 justify-end items-center" onClick={() => setOpen(prev => !prev)}>
            <img src={open ? close : menu} alt="open-close" className="w-[28px] object-contain" />
            <span className={`${open ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                <ul className="list-none flex flex-col justify-end items-center flex-1">
                    {navLinks.map((link, index) =>
                        <li key={link.id}
                            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                            {link.title}
                        </li>)
                    }
                </ul>
            </span>
        </span>
    </nav>
}
