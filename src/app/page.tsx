import Counter from "@/components/counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="wrapper flex justify-between">
      {/* Left side */}
      <div className="flex-1">
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
          obcaecati! Unde dolore minima iure necessitatibus quis, quibusdam
          tempora debitis facilis accusamus praesentium. A, ea. Ducimus quam
          quasi sit alias voluptatum.
        </p>
       <Counter />
      </div>

      {/* Right side */}
      <div className="flex-1">
        <Image
          src="https://images.pexels.com/photos/13650913/pexels-photo-13650913.jpeg"
          alt="books"
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}
