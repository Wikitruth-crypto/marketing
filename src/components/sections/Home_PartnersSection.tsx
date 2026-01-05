"use client";

import arweave from "@/assets/icon/Arweave1.svg";
import dfinity from "@/assets/icon/ICP-Dfinity2.svg";
import pinata from "@/assets/icon/Pinata.svg";
import oasis from "@/assets/icon/oasis-1.svg";
import fourEverLand from "@/assets/icon/4EverLand2.svg";
import { Container } from "@/components/Container";


const partners = [
  { name: "4EverLand", icon: fourEverLand},
  { name: "Arweave", icon: arweave },
  { name: "Dfinity", icon: dfinity },
  { name: "Pinata", icon: pinata},
  { name: "Oasis network", icon: oasis},
];

export default function PartnersSection() {

  return (
    <section className="w-full py-10 md:py-16">
      <Container className="flex flex-col items-center justify-center">
        <h3 className="text-lg md:text-2xl font-bold mb-8 text-white">
          Infrastructure
          
        </h3>
        <div className="flex flex-wrap gap-x-16 gap-y-8 md:gap-x-30 md:gap-y-12 justify-center items-center w-full">
          {partners.map((p, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              {/* <div className={`w-18 h-14 flex items-center justify-center`}> */}
                <img src={p.icon} alt={p.name} className='w-18 h-14 md:w-24 md:h-20'/>
              {/* </div> */}
              {/* <p className="text-gray-400 text-sm font-semibold">{p.name}</p> */}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
} 




