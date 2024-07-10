import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <h1>About</h1>
      <Image src={"/banner-inicio.jpg"} alt="Banner de inicio" title="Banner de inicio" width={100} />
    </main>
  );
}
