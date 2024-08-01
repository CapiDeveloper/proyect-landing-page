'use client'

import { ButtonBook, ShareIcons } from "@/components/index";
import { MainMenu } from "../main-menu/MainMenu";
import { useMenu } from "@/store";

export const MenuMovil = () => {

  const isOpenMenu = useMenu(state => state.isOpenMenu)

  return (
    <>
      <div className={`${ isOpenMenu? 'flex':'hidden' } flex-col justify-between items-center absolute top-16 right-0 w-full ml-0 h-[90vh] bg-white gap-5 py-5 z-[1000]`}>
        <MainMenu />
        <ShareIcons />
        <ButtonBook />
      </div>
    </>
  )
}