import React from "react";

const Map = () => {
    return (
        <div className="h-80 ">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32662.352465266773!2d-5.01664476733634!3d34.035016951947476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8bf04dd0066b%3A0x3c59ad375b1d131a!2sCoiffure%20du%20Monde!5e0!3m2!1sen!2sus!4v1671956964097!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full"
            ></iframe>
        </div>
    );
};

export default Map;
