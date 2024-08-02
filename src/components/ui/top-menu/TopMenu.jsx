import { ButtonBook, MenuHamburguer, MenuMovil, ShareIcons } from "@/components/index";
import Image from "next/image";
import Link from "next/link";

export const TopMenu = () => {

  return (
    <header className="relative">
      <nav className="flex justify-between items-center w-full px-5 lg:px-0 py-4 lg:w-11/12 lg:mx-auto lg:grid lg:grid-cols-3">
        <ul className="hidden lg:flex md:gap-5">
          <li><Link className="xl:text-2xl link-underline" href={'/'}>About</Link></li>
          <li><Link className="xl:text-2xl link-underline" href={'/services'}>Services</Link></li>
          <li><Link className="xl:text-2xl link-underline" href={'/'}>Deep</Link></li>
          <li><Link className="xl:text-2xl link-underline" href={'/'}>Reviews</Link></li>
        </ul>
        <div className="pr-5">
          <Image src={'/big-brother-logo.png'} alt="Logo de la empresa" title="Big Brothers" className="flex-1 w-[100px] sm:w-[150px] lg:w-[250px] lg:mx-auto" height={100} width={300} />
        </div>
        <MenuMovil />
        <div className="hidden lg:flex-1 lg:w-full lg:flex lg:items-center lg:justify-between">
          <ShareIcons />
          <ButtonBook />
        </div>
        <MenuHamburguer />
      </nav>
    </header>
  );
}