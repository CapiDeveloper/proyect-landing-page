import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export const ShareIcons = () => {
    return (
        <ul className="flex justify-evenly md:justify-evenly gap-2 md:gap-5 w-full md:w-fit">
            <li>
                <a target="_blank" className="duration-200 hover:scale-110" href="https://www.instagram.com/bigbrothers2019/">
                    <FaInstagram title="Boton red social Instagram" className="text-xl xl:text-3xl"  />
                </a>
            </li>
            <li>
                <a target="_blank" className="duration-200 hover:scale-110" href="https://www.facebook.com/profile.php?id=61562852941807">
                    <FaFacebookF title="Boton red social facebook" className="text-xl xl:text-3xl"  />
                </a>
            </li>
            <li>
                <a target="_blank" className="duration-200 hover:scale-110" href="https://www.tiktok.com/@bigbrothersct">
                    <FaTiktok title="Boton red social Tik Tok" className="text-xl xl:text-3xl"  />
                </a>
            </li>
            <li>
                <a target="_blank" className="duration-200 hover:scale-110" href="#">
                    <FaXTwitter title="Boton red social X" className="text-xl xl:text-3xl"  />
                </a>
            </li>
        </ul>
    )
}