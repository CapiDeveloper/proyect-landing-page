import { ShareIcons } from "@/components"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="flex flex-col items-center gap-5 my-16">
            <Image src={"/idioma.png"} alt="I we speak spanish" width={300} height={200} />
            <h2 className="text-xl font-semibold md:text-2xl">Have questions? Text Us.</h2>
            <a href="tel:860-625-5761" target="_blank" className="text-xl md:text-2xl">860-625-5761 </a>
            <ShareIcons />
            <ul className="flex flex-col items-center gap-2">
                <li><Link className="text-center border-b-[1px] border-b-black text-lg" href={"#"}>Disclaimer</Link></li>
                <li><Link className="text-center border-b-[1px] border-b-black text-lg" href={"#"}>Privacy Policy</Link></li>
                <li><Link className="text-center border-b-[1px] border-b-black text-lg" href={"#"}>Terms and Conditions</Link></li>
            </ul>
            <p className="text-lg">25 Garfield Ave New London CT 06320 </p>
            <p>© 2024 BigBrothersCT. All rights reserved</p>
        </footer>
    )
}
