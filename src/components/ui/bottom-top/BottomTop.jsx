'use client'

import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export const BottomTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="duration-500 hover:scale-110 fixed right-5 bottom-5 bg-white p-2 border-letra border-[1px] rounded-full text-azulObscuro"
                >
                    <MdKeyboardDoubleArrowUp size={30} />
                </button>
            )}
        </>
    )
}