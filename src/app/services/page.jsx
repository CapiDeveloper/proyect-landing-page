import Link from "next/link"
import { titleFont } from "../../config/fonts"
import Image from "next/image"

const values = [
    {
        name: "Emergency Cleaning",
        description:
            "Our team of cleaning experts is available round the clock to tackle any cleaning emergency, from sudden spills to post-party cleanups.",
    },
    {
        name: "Deep Cleaning",
        description:
            "We eliminate the toughest dirt, and you'll enjoy sparkling and germ-free spaces. Experience the excellence of our work. ",
    },
    {
        name: "Move Out / In",
        description:
            "Whether you're moving out of your old home or moving into a new one, we'll leave everything clean, fresh, and your space healthy.",
    },
    {
        name: "Regular Cleaning",
        description:
            "We leave no detail unattended. Our regular cleaning will create a fresh and healthy environment in every corner. ",
    },
    {
        name: "Post Construction",
        description:
            "When the dust settles after a renovation or construction project, our expert team swoops in to restore your space to its pristine condition. ",
    },
    {
        name: "Commercial Cleaning",
        description:
            'Expert care for your Restaurants, Offices, Organization spaces, and Garages. Ensure a spotless, welcoming environment with our reliable and thorough cleaning solutions tailored to your business needs',
    },
]
const team = [
    {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        imageUrl:
            "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    },
    // More people...
]

export default function PageServices() {
    return (
        <main className="isolate">
            <aside className="w-11/12 md:w-10/12 rounded-2xl mt-10 mx-auto relative flex flex-col gap-5 justify-center md:justify-end md:items-start items-center h-[80vh] bg-hero-pattern bg-cover bg-center overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-65 mix-blend-normal"></div>
                <p className="z-20 text-white text-2xl text-center font-bold md:text-4xl md:p-5">Discover Our Services</p>
            </aside>
            <div className="w-11/12 mx-auto md:w-10/12 mt-5 flex flex-col items-center md:items-end">
                <p className="text-center">Click button below to book or get help immediately</p>
                <a href="tel:860-625-5761">
                    <Image src={"/boton-call.png"} alt="Button for call" width={245} height={80} />
                </a>
            </div>

            {/* Content section */}
            <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className={`${titleFont.className} text-center mt-14 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>Services</h2>
                    <div className="mt-6 grid lg:grid-cols-2 gap-x-8 items-center gap-y-20">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                We offer just about every kind of junk removal service you can think of. From residential junk removal to commercial junk removal and debris removal to furniture and appliance removal, there is no clean-up job too big or too small.
                            </p>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center items-center">
                            <div class="grid sm:grid-cols-2 gap-2 md:gap-5">
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                    </div>
                                    <div class="flex flex-col flex-grow ml-4">
                                        <div class="text-sm text-gray-500">Get</div>
                                        <div class="font-bold text-lg">Impeccable Results</div>
                                    </div>
                                </div>
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </div>
                                    <div class="flex flex-col flex-grow ml-4">
                                        <div class="text-sm text-gray-500">Without</div>
                                        <div class="font-bold text-lg">Damages Or Losses</div>
                                    </div>
                                </div>
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                                    </div>
                                    <div class="flex flex-col flex-grow ml-4">
                                        <div class="text-sm text-gray-500">With A</div>
                                        <div class="font-bold text-lg">Punctual Service</div>
                                    </div>
                                </div>
                                <div class="flex flex-row bg-white shadow-sm rounded p-4">
                                    <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div class="flex flex-col flex-grow ml-4">
                                        <div class="text-sm text-gray-500">We Respect</div>
                                        <div class="font-bold text-lg">Your Privacy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-gray-900">{value.name}</dt>
                                <dd className="mt-1 text-gray-600">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <ul className="grid place-content-center sm:w-11/12 md:w-10/12 items-center mx-auto gap-2 sm:grid-cols-3 mt-10">
                <li>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                        <div className="relative">
                            <div className="absolute top-0 left-0 bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">step 3</div>
                            <img className="w-full h-56 object-cover rounded-full" src="/imagen-2.jpg" alt="Cleaning Team" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold">The Cleaning</h2>
                        <p className="mt-2 text-gray-600">We are ready to exceed your expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                        <div className="relative">
                            <div className="absolute top-0 left-0 bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">step 3</div>
                            <img className="w-full h-56 object-cover rounded-full" src="/imagen-2.jpg" alt="Cleaning Team" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold">The Cleaning</h2>
                        <p className="mt-2 text-gray-600">We are ready to exceed your expectations.</p>
                    </div>
                </li>
                <li>
                    <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs">
                        <div className="relative">
                            <div className="absolute top-0 left-0 bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold">step 3</div>
                            <img className="w-full h-56 object-cover rounded-full" src="/imagen-2.jpg" alt="Cleaning Team" />
                        </div>
                        <h2 className="mt-6 text-xl font-bold">The Cleaning</h2>
                        <p className="mt-2 text-gray-600">We are ready to exceed your expectations.</p>
                    </div>
                </li>
            </ul>
        </main>
    )
}
