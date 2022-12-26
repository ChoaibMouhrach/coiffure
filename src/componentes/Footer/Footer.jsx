import { HiPhone, HiLocationMarker, HiMail } from "react-icons/hi";
import Logo from "../../componentes/Logo/Logo";
import SocialMedia from "../../componentes/SocialMedia/SocialMedia";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Button from "../Button/Button";

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="container mx-auto py-24 px-8 lg:px-0 gap-24 lg:grid grid-cols-2">
                <div>
                    <Logo className={"w-80"} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim, placeat vitae odit nostrum provident, illum
                        doloribus praesentium consequatur odio, sunt laboriosam
                        expedita reprehenderit numquam ipsam.
                    </p>
                </div>
                <div>
                    <form>
                        <h2 className="text-5xl font-ballantines text-white mb-8">
                            NewsLetter
                        </h2>
                        <div className="flex flex-col gap-4">
                            <input
                                placeholder="Email Address..."
                                type="text"
                                className="bg-gray  p-2 w-full border-2 outline-none border-primary"
                            />
                            <div>
                                <Button>Send</Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
