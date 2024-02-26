import { useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ExBoardItem = ({ img, name, post, active, onClick, fb, insta, linkedin, mail }) => {
    const [hover, setHover] = useState(false);

    return (
        <div
            onClick={onClick}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            className={'rounded-xl md:w-[250px] w-[250px] md:h-[250px] h-[250px] bg-cover bg-center bg-no-repeat cursor-pointer'}
            style={{ backgroundImage: `url(${img})` }}>
            {(active || hover) && (
                <>
                    <div
                        className="absolute md:w-[250px] w-[250px] md:h-[250px] h-[250px] opacity-60 bg-gradient-to-b from-primary to-secondary rounded-xl"/>
                    <div
                        className="relative z-50 flex flex-col items-center h-full justify-end gap-[15px] rounded-xl text-white p-[20px]">
                        <div className="self-start leading-none">
                            <h2 className="text-xl font-bold leading-none">{name}</h2>
                            <p className="text-lg font-light leading-none">{post}</p>
                        </div>
                        <div className="flex flex-row gap-[23px] items-center ">
                            <a href={insta} target="_blank" rel="noreferrer"><FaInstagram className="text-xl"/></a>
                            <a href={fb} target="_blank" rel="noreferrer"> <FaFacebook className="text-xl"/> </a>
                            <a href={linkedin} target="_blank" rel="noreferrer"> <FaLinkedin className="text-xl"/></a>
                            <a href={mail} target="_blank" rel="noreferrer" > <BiLogoGmail className="text-xl"/></a>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ExBoardItem;