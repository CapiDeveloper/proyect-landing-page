'use client'

import { useMenu } from "@/store";

export const MenuHamburguer = () => {
    const openMenu = useMenu((state) => state.openMenu);
    const closeMenu = useMenu((state) => state.closeMenu);
    const isOpenMenu = useMenu((state) => state.isOpenMenu);

    const toggleMenu = () => {
        if (isOpenMenu) {
            closeMenu();
        } else {
            openMenu();
        }
    };

    return (
        <button onClick={toggleMenu} className="lg:hidden relative w-8 h-8 cursor-pointer">
            <div aria-label="Boton menu hamburguesa" title="menu hamburguesa" className="flex flex-col gap-1">
                <span className={`block rounded-full w-1/2 h-[3px] bg-gray-800 duration-300 transform origin-center ${isOpenMenu ? 'hidden w-full' : 'flex'}`}></span>
                <span className={`rounded-full h-[3px] w-full bg-gray-800 duration-500 peer-checked:-rotate-45 ${isOpenMenu ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'}`}></span>
                <span className={`block rounded-full w-1/2 h-[3px] bg-gray-800 duration-300 transform origin-center ${isOpenMenu ? 'w-full -rotate-45 translate-y-[-1.5px]' : 'rotate-0 translate-y-0'}`}></span>
            </div>
        </button>
    );
};
