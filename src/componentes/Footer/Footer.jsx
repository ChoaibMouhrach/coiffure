import { HiPhone, HiLocationMarker, HiMail } from "react-icons/hi";
import Logo from "../../componentes/Logo/Logo";
import SocialMedia from "../../componentes/SocialMedia/SocialMedia";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto py-24 flex flex-col gap-16 px-8 lg:px-0">
                <div className="flex justify-center items-center">
                    <Logo className="w-60" />
                </div>
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0 justify-center">
                    <div className="flex-1 flex flex-col lg:flex-row justify-end items-center gap-2">
                        <HiLocationMarker className="text-primary text-xl" />
                        <span className="text-center lg:text-end">
                            30 Place Salvador Allende, 59650 Villeneuve-d'Ascq
                        </span>
                    </div>
                    <div className="flex-1 flex flex-col lg:flex-row justify-center items-center gap-2">
                        <HiPhone className="text-primary text-xl" />
                        <span className="text-center">07.67.40.58.49</span>
                    </div>
                    <div className="flex-1 flex flex-col lg:flex-row justify-start items-center gap-2">
                        <HiMail className="text-primary text-xl" />
                        <span className="text-center lg:text-start">
                            contact@connectingcoiffure.fr
                        </span>
                    </div>
                </div>
                <div className="flex justify-center gap-8">
                    <div className="col-start-1 col-end-2 text-end flex items-center font-ballantines text-4xl ">
                        Rejoignez-nous:
                    </div>
                    <div className="col-start-2 col-end-4 flex items-center  justify-start gap-4">
                        <SocialMedia
                            url="https://facebook.com"
                            icon={<BsFacebook />}
                        />
                        <SocialMedia
                            url="https://instagram.com"
                            icon={<BsInstagram />}
                        />
                    </div>
                </div>
                <div className="flex justify-center gap-8">
                    <span>Mentions légales</span>
                    <span>Politique de confidentialité</span>
                    <span>Gestion des cookies</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
