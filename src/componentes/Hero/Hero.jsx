import React from "react";
import Button from "../Button/Button";
import Nav from "../Navigation/Nav";

const Hero = ({ img }) => {
    return (
        <div className="h-screen relative text-white">
            <img src={img} className="h-full w-full object-cover" alt="" />
            <div className="bg-midtransparent w-full h-full absolute top-0 left-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl md:text-8xl font-ballantines">
                        Connecting Coiffure
                    </h1>
                    <p className="py-4">
                        Salon de coiffure à Villeneuve-d'Ascq
                    </p>
                    <Button>CONTACTEZ-NOUS</Button>
                </div>
            </div>
            <div className="absolute top-0 w-full">
                <Nav />
            </div>
        </div>
    );
};

export default Hero;
