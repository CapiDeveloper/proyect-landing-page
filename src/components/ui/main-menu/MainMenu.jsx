import Link from "next/link"

export const MainMenu = () => {
    return (
        <ul className="flex-1 flex flex-col items-center justify-around">
            <li>
                <Link className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    About
                </Link>
            </li>
            <li>
                <Link className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    Standard
                </Link>
            </li>
            <li>
                <Link className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    Deep
                </Link>
            </li>
            <li>
                <Link className="border-b-[1px] border-b-black text-3xl" href={"/"}  >
                    Reviews
                </Link>
            </li>
        </ul>
    )
}
