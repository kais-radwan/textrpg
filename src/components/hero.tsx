"use client";

import { IconChevronRight } from "@tabler/icons-react";
import { Button } from "pixel-retroui";
import { Clouds } from "./clouds";
import { Particles } from "./particles";
import "@/app/light.css";
import CursorFollower from "./follower";

export function Hero() {
  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 z-20 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-background/70 backdrop-blur"></div>

      <img
        src="/bg.gif"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 inset-0 z-0"
      />

      <img
        src="/bg.gif"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10 inset-0 z-0 blur-sm"
      />

      <Clouds />
      <Clouds rotate />
      <Particles />
      <CursorFollower />

      <div className="lightning flashit"></div>

      <img
        src="https://i.gifer.com/origin/6b/6bb14b1f413cac62614e813c19d9d94f_w200.gif"
        className="absolute top-0 left-0 w-screen h-screen inset-0 z-10 opacity-[5%] border-b-1"
      />

      <h1
        className="text-4xl z-10 px-64 font-semibold"
        style={{
          textShadow: "5px 5px 0px black",
        }}
      >
        Unleash Your Imagination
        <br />
        in Persona Adventure
      </h1>
      <p className="max-w-md z-10 mt-4 text-white/80 text-sm">
        Embark on thrilling text-based adventures where your choices shape the
        story. Create unique personas, explore immersive worlds, and challenge
        your creativity
      </p>
      <div className="flex items-center gap-3 mt-6 z-10">
        <Button className="text-sm font-semibold">Start Your Adventure</Button>
        {/* <Button
          className="text-sm font-semibold bg-white/10 backdrop-blur"
          bg="rgba(255, 255, 255, .1)"
          textColor="white"
          shadow="transparent"
          borderColor="white"
        >
          Try Demo
        </Button> */}
        {/* <Button radius="full" variant="flat" className="text-sm font-semibold border backdrop-blur border-white/10" endContent={<IconChevronRight size={14} />}>
          Try Demo
        </Button> */}
      </div>
    </div>
  );
}
