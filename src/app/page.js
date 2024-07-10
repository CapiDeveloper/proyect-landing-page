import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  return (
    <>
      <aside className="w-11/12 md:w-[90%] mx-auto">
        <Image className="mt-5 sm:w-full" src={"/banner-inicio.jpg"} alt="Banner de inicio" title="Banner de inicio" width={1200} height={500} />
      </aside>
      <main className="w-11/12 md:w-[90%] mb-20 md:mb-0 mx-auto grid gap-5 md:grid-cols-2 md:place-content-start md:my-32">
        <div className="mb-24 md:mb-16">
          <h1 className="text-3xl md:text-7xl mt-10 md:mt-0">A cleaner, fresher and safer home awaits ⤼ Invest in a healthier lifestyle!</h1>
          <p className="mt-7 leading-loose">Because of our high standards, families continue to be delighted with our unmatched cleaning service throughout Miami. We hand pick our team members and make sure they are properly trained before providing cleaning services to your home. This is why when we say “We are the best choice to get your home cleaned in Miami”, we mean it! We strive to make your experience with us both easy and enjoyable. </p>
        </div>
        <div>
          <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen.jpg'} width={400} height={200} alt="texto imagen" />
        </div>
      </main>
      <aside className="relative flex flex-col gap-5 justify-center items-center h-[90vh] bg-hero-pattern bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-65 mix-blend-normal"></div>
        <p className="z-20 text-white text-xl md:text-4xl lg:text-7xl">"Amazing Service"</p>
        <p className="z-20 text-white text-xl italic md:text-4xl lg:text-xl">-Jimmy Butler Management </p>
      </aside>
      <section className="w-11/12 md:w-[90%] mx-auto md:grid md:grid-cols-2 place-content-center items-center my-10">
        <div>
          <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">The most Trusted ⤼ Reliable ⤼ Cleaning Service in Miami.</h2>
          <p className="mt-7 leading-loose">Our Cleaning Services arose from a desire to offer top-quality, detail-oriented cleaning services to the Miami community. We provide services that create not just cleaner spaces, but healthier ones. We treat cleaning like a science, our staff takes pride in how we impact your home/condo and overall wellbeing.</p>
          <p className="mt-3 leading-loose">Since its inception, our Cleaning Services has been regarded highly by clients, brimming with professionalism and premier services that adhere to the latest environmental regulations and health standards. We serve much of Miami Dade County and offer a wide range of residential cleaning services and flexible times to help you schedule a unique cleaning experience. We are one of Miami’s leading cleaning companies providing quality housekeeping services for high rise condos. We specialize in  cleaning services that will leave your home spotless.</p>
        </div>
        <div className="md:flex md:flex-col md:justify-evenly md:h-full">
          <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen-3.png'} width={400} height={200} alt="texto imagen" />
          <p className="mt-7 leading-loose md:leading-10 md:text-xl italic w-10/12 md:w-9/12 mx-auto">“Our cleaning services provide the optimum experience. We ensure that our cleaners are properly trained to provide every client with a seamless experience. We use single-use and non toxic products to ensure a clean and healthier environment” </p>
        </div>
      </section>
      <section className="bg-[#DFE0DB] pt-16 pb-10">
        <div className="w-11/12 md:w-[90%] mx-auto md:gap-10 md:grid md:grid-cols-2">
          <div className="flex flex-col justify-between gap-16">
            <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen-4.png'} width={400} height={200} alt="texto imagen" />
            <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen-5.png'} width={400} height={200} alt="texto imagen" />
          </div>
          <div>
            <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">Single-Use Sponges, Towels, etc is a key part of Maid Svc.</h2>
            <p className="mt-5 leading-loose">Since its inception, our Cleaning Services has been regarded highly by clients, brimming with professionalism and premier services that adhere to the latest environmental regulations and health standards. We serve much of Miami Dade County and offer a wide range of residential cleaning services and flexible times to help you schedule a unique cleaning experience. We are one of Miami’s leading cleaning companies providing quality housekeeping services for high rise condos. We specialize in  cleaning services that will leave your home spotless.</p>
          </div>
        </div>
      </section>
      <section className="w-11/12 md:w-[90%] mx-auto mt-5 md:my-16 md:grid md:grid-cols-2 gap-5 md:gap-14">
        <div className="flex flex-col gap-5 md:gap-2">
          <Image loading="lazy" className="imagen-scroll mx-auto rounded-tl-3xl md:w-full md:h-full md:object-cover" src={'/imagen-6.jpg'} width={400} height={900} alt="texto imagen" />
          <div className="grid md:grid-cols-2 gap-5 md:gap-2">
            <Image loading="lazy" className="imagen-scroll mx-auto" src={'/imagen-8.jpg'} width={400} height={200} alt="texto imagen" />
            <Image loading="lazy" className="imagen-scroll mx-auto" src={'/imagen-9.jpg'} width={400} height={200} alt="texto imagen" />
          </div>
        </div>
        <div className="gid place-content-center text-center">
          <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">Single⤼Use Supplies</h2>
          <p className="mt-5 text-2xl leading-loose">“The advantages of the single-use concept is ideal, especially during these times, where, for reasons of absolute health and safety, it should not be any other way”</p>
          <p className="italic my-10">-Dr Sunny Khachatryan</p>
          <Image loading="lazy" className="imagen-scroll mx-auto rounded-tl-3xl md:object-cover" src={'/imagen-7.png'} width={400} height={200} alt="texto imagen" />
        </div>
      </section>
      <section className="bg-[#DFE0DB] md:py-16 py-10">
        <div className="w-11/12 md:w-[90%] mx-auto flex flex-col-reverse md:grid md:grid-cols-2 md:place-item-center">
          <ul className="mt-7">
            <li className="border-y border-gray-400 py-7">
              <button className="text-2xl pb-3 flex justify-between items-center w-full">
                <span>Did you know?</span>
                <IoIosArrowDown />
              </button>
              <div>
                {/* <p>The average local cleaner or cleaning company carries towels and sponges from one home to another without washing or sanitizing them, and then using them to clean your kitchen bedrooms and counter tops.</p> */}
              </div>
            </li>
            <li className="py-7">
              <button className="text-2xl pb-3 flex justify-between items-center w-full">
                <span>Did you know?</span>
                <IoIosArrowDown />
              </button>
              <div>
                {/* <p>The average local cleaner or cleaning company carries towels and sponges from one home to another without washing or sanitizing them, and then using them to clean your kitchen bedrooms and counter tops.</p> */}
              </div>
            </li>
            <li className="py-7 border-y border-gray-400">
              <button className="text-2xl pb-3 flex justify-between items-center w-full">
                <span>Did you know?</span>
                <IoIosArrowDown />
              </button>
              <div>
                {/* <p>The average local cleaner or cleaning company carries towels and sponges from one home to another without washing or sanitizing them, and then using them to clean your kitchen bedrooms and counter tops.</p> */}
              </div>
            </li>
          </ul>
          <Image loading="lazy" className="imagen-scroll mx-auto md:m-auto rounded-tl-3xl md:object-cover" src={'/imagen-10.png'} width={400} height={200} alt="texto imagen" />
        </div>
      </section>
      <aside className="bg-black py-20">
        <div className="grid md:grid-cols-2 gap-20 w-11/12 md:w-[90%] mx-auto">
          <Image loading="lazy" className="imagen-scroll mx-auto md:m-auto rounded-tl-3xl md:object-cover" src={'/imagen-11.png'} width={400} height={200} alt="texto imagen" />
          <Image loading="lazy" className="imagen-scroll mx-auto md:m-auto rounded-tl-3xl md:object-cover" src={'/imagen-6.jpg'} width={400} height={200} alt="texto imagen" />
        </div>
      </aside>
      <section className="w-11/12 my-10 md:w-[90%] mx-auto grid md:grid-cols-2 gap-5">
        <Image loading="lazy" className="imagen-scroll mx-auto md:m-auto rounded-3xl md:object-cover" src={'/imagen-12.jpg'} width={400} height={200} alt="texto imagen" />
        <div>
          <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">Non-Toxic Products</h2>
          <p className="mt-7 leading-loose">Our cleaning service is one way to a healthier lifestyle and we are conscious of providing a non-toxic environment in your home. There are allot of companies in Miami that offer non-toxic cleaning services but finding one who’s dedicated to providing a healthier lifestyle is difficult. </p>
          <p className="mt-3 leading-loose">Our better life methods are designed to maximize cleaner spaces, improve your indoor air quality, protect the health and safety of our clients as well as their family and pets, our team members, and the general public; and do it all in a sustainable manner that minimizes its overall environmental impact. This core principle is what drives us to provide a top level of service to our clients. Our cleaning services not only ensures that your home sparkles, but we also save you time, trouble and effort. Everything is important to us  the way it looks, how it feels, and how it smells. </p>
        </div>
      </section>
      <aside className="w-11/12 my-10 md:my-28 md:w-[90%] mx-auto">
      <Image loading="lazy" className="imagen-scroll mx-auto md:m-auto md:w-full rounded-3xl md:object-cover" src={'/imagen-13.jpg'} width={400} height={200} alt="texto imagen" />
      </aside>
    </>
  );
}