import { ButtonBook, ShareIcons } from "@/components";
import Image from "next/image";
import Link from "next/link";
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
          <p className="mt-7 leading-loose">Because of our high standards, families continue to be delighted with our unmatched cleaning service throughout Connecticut and Rhode Island. We know and trust our Big Brothers employees on a personal and professional level. Our cleaning PROs undergo thorough background checks prior to employment and are bonded and insured. That&apos;s why when we say we&apos;re the best choice to clean your home in a reasonable amount of time, we mean it! We strive to make your experience with us both easy and enjoyable! And while we strive to help our employees work to their greatest ability, we also make sure to have fun. Because when you love what you do, it shows in your work.</p>
        </div>
        <div>
          <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen.jpg'} width={400} height={200} alt="texto imagen" />
        </div>
      </main>
      <aside className="relative flex flex-col gap-5 justify-center items-center h-[90vh] bg-hero-pattern bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-65 mix-blend-normal"></div>
        <p className="z-20 text-white text-xl md:text-4xl lg:text-7xl">Amazing Service</p>
        <p className="z-20 text-white text-xl italic md:text-4xl lg:text-xl">-Jimmy Butler Management </p>
      </aside>
      <section className="w-11/12 md:w-[90%] mx-auto md:grid md:grid-cols-2 place-content-center items-center my-10">
        <div>
          <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">The most Trusted ⤼ Reliable ⤼ Cleaning Service in CT and RI.</h2>
          <p className="mt-7 leading-loose">Our Cleaning Services arose from a desire to offer top-quality, detail-oriented cleaning services to the community. We provide services that create not just cleaner spaces, but healthier ones. We treat cleaning like a science, our staff takes pride in how we impact your home/condo and overall wellbeing.</p>
          <p className="mt-3 leading-loose">Since its inception, our Cleaning Services has been regarded highly by clients, brimming with professionalism and premier services that adhere to the latest environmental regulations and health standards. We serve much of Connecticut and Rhode Island and offer a wide range of residential and commercial cleaning services and flexible times to help you schedule a unique cleaning experience. We are one of leading cleaning companies providing quality housekeeping services that will leave your home spotless.</p>
        </div>
        <div className="md:flex md:flex-col md:justify-evenly md:h-full">
          <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen-3.png'} width={400} height={200} alt="texto imagen" />
          <p className="mt-7 leading-loose md:leading-10 md:text-xl italic w-10/12 md:w-9/12 mx-auto">Our cleaning services provide the optimum experience. We ensure that our cleaners are properly trained to provide every client with a seamless experience. We use single-use and non toxic products to ensure a clean and healthier environment </p>
        </div>
      </section>
      <section className="bg-[#DFE0DB] pt-16 pb-10">
        <div className="w-11/12 md:w-[90%] mx-auto md:gap-10 md:grid md:grid-cols-2">
          <div className="flex flex-col justify-between gap-16">
            <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen-4.png'} width={400} height={200} alt="texto imagen" />
            <Image loading="lazy" className="mx-auto imagen-scroll" src={'/imagen-5.png'} width={400} height={200} alt="texto imagen" />
          </div>
          <div>
            <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">We provide 100% Satisfaction Guarantee.</h2>
            <p className="mt-5 leading-loose">No one knows your home better than you, and no one spends more time there. That&apos;s why, before we start cleaning, we always ask what areas you think need the most attention in your home . If you want to be sure that you will be satisfied with a cleaning service, choose a company or cleaner that will guarantee it. We&apos;re so confident that you will love our service, that we stand behind it with a 100% guarantee. If you feel that the job or service rendered did not meet your expectations, we will re-clean the area at no additional charge within 24 hrs. You deserve to arrive at your home to a cleaner and healthier environment and that is the cleaning service we&apos;re here to provide.</p>
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
          <h2 className="text-3xl md:text-7xl mt-10 md:mt-0">We provide equipment suited for the highest hygiene demands</h2>
          <p className="mt-5 text-2xl leading-loose">We provide all the proper cleaning supplies, non-toxic supplies and top of the line equipment including Vacuums that filter 99.9% of dust/allergens and steam mops that provide a chemical-free way to clean and sanitize the floors in your home. Using a burst of superheated steam, our steam mops eliminate dirt, bacteria, allergens, and more. Always used on flooring, our steam cleaners offer a quick way to sanitize and refresh the floors throughout your house or condo. Our steam cleaning process is a safe, effective way to get your home clean without the hassles of using toxic cleaning products, etc. </p>
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
          <p className="mt-7 leading-loose">Our cleaning service is one way to a healthier lifestyle and we are conscious of providing a non-toxic environment in your home. There are allot of companies that offer non-toxic cleaning services but finding one who&apos;s dedicated to providing a healthier lifestyle is difficult.</p>
          <p className="mt-3 leading-loose">Our methods are designed to maximize cleaner spaces, improve your indoor air quality, protect the health and safety of our clients as well as their family and pets, our team members, and the general public; and do it all in a sustainable manner that minimizes its overall environmental impact. This core principle is what drives us to provide a top level of service to our clients. Our cleaning services not only ensures that your home sparkles, but we also save you time, trouble and effort. Everything is important to us the way it looks, how it feels, and how it smells.</p>
        </div>
      </section>
      <aside className="w-11/12 my-10 md:my-28 md:w-[90%] mx-auto">
        <Image loading="lazy" className="imagen-scroll mx-auto md:m-auto md:w-full rounded-3xl md:object-cover" src={'/imagen-13.jpg'} width={400} height={200} alt="texto imagen" />
      </aside>
      <section className="bg-black flex flex-col items-center gap-7 py-10">
        <div className="w-11/12 mx-auto flex flex-col gap-5">
          <h2 className="text-white text-2xl md:text-2xl lg:text-4xl text-center">Get Started, Quick and Easy! </h2>
          <p className="text-white text-center md:w-8/12 md:mx-auto">The best, most convenient way to book a cleaning quick and easy. Big Brothers helps schedule your recurring cleanings automatically for you and it&apos;s easy to cancel or reschedule future bookings. </p>
        </div>
        <ButtonBook />  
      </section>
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
    </>
  );
}