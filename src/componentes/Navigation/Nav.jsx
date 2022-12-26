import { useState } from "react";
import SocialMedia from "../SocialMedia/SocialMedia";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { HiMenuAlt3 } from "react-icons/hi";

const Nav = () => {
    const [isShown, setIsShown] = useState(false);

    return (
        <nav className="h-40">
            <div className="px-4 lg:p-0 container  h-full mx-auto flex items-center justify-between">
                <div className="flex-1">
                    <Logo />
                </div>
                <div
                    className={`fixed z-50 items-center top-0 w-full left-0 bg-primary lg:bg-transparent lg:static h-screen lg:h-full flex-1 flex justify-center ${
                        isShown ? "" : "hidden lg:flex"
                    }`}
                >
                    <div className="fixed z-50 top-0 left-0 p-8 text-xl justify-between items-center w-full flex lg:hidden">
                        <div className="flex gap-2 justify-end ">
                            <SocialMedia
                                url="https://facebook.com"
                                icon={<BsFacebook />}
                            />
                            <SocialMedia
                                url="https://instagram.com"
                                icon={<BsInstagram />}
                            />
                        </div>
                        <button onClick={() => setIsShown(false)}>
                            <GrClose />
                        </button>
                    </div>
                    <ul className="flex-col lg:flex-row text-black flex  items-center gap-8 font-medium mx-auto justify-center">
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/">ACCUEIL</Link>
                        </li>
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/coiffure-femme">COUPE FEMME</Link>
                        </li>
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/coiffure-homme">COUPE HOMME</Link>
                        </li>
                        <li className="transition-all duration-300 lg:text-white lg:hover:text-primary before:content-[''] before:absolute before:-bottom-1 before:left-0 relative before:h-1 before:w-0 before:bg-primary hover:before:w-full before:transition-all before:duration-300">
                            <Link to="/contact">CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex-1 lg:flex gap-2 justify-end hidden">
                    <SocialMedia
                        url="https://facebook.com"
                        icon={<BsFacebook />}
                    />
                    <SocialMedia
                        url="https://instagram.com"
                        icon={<BsInstagram />}
                    />
                </div>
                <div className="flex-1 flex justify-end lg:hidden">
                    <button
                        className="text-2xl"
                        onClick={() => setIsShown(true)}
                    >
                        <HiMenuAlt3 />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
