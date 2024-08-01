import { useMenu } from "@/store"
import Link from "next/link"

export const MainMenu = () => {

    const closeMenu = useMenu(state=>state.closeMenu);

    return (
        <ul className="flex-1 flex flex-col items-center justify-around">
            <li>
                <Link onClick={closeMenu} className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    About
                </Link>
            </li>
            <li>
                <Link onClick={closeMenu} className="border-b-[1px] border-b-black text-3xl" href={"/services"}  >
                    Services
                </Link>
            </li>
            <li>
                <Link onClick={closeMenu} className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    Deep
                </Link>
            </li>
            <li>
                <Link onClick={closeMenu} className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    Reviews
                </Link>
            </li>
        </ul>
    )
}
