"use client";

import {
  IconArrowRight,
  IconCamera,
  IconChevronRight,
} from "@tabler/icons-react";
// import { Button } from "pixel-retroui";
import { Clouds } from "./clouds";
import { Particles } from "./particles";
import "@/app/light.css";
import CursorFollower from "./follower";
import { useState } from "react";
import AudioPlayer from "./audio";
import { Spotlight } from "./ui/spotlight";
import { Button } from "@nextui-org/react";

export function Hero() {
  const [move, setMove] = useState(false);

  const [moveDirection, setMoveDirection] = useState(
    "translate-x-0 translate-y-0"
  );

  const handleMouseMove = (e: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const x = e.clientX / innerWidth;
    const y = e.clientY / innerHeight;

    if (x < 0.3 && y < 0.3) {
      return setMoveDirection("translate-x-0 translate-y-0"); // top-left
    }

    if (x > 0.7 && y < 0.3) {
      return setMoveDirection("-translate-x-10 translate-y-0"); // top-right
    }

    if (x < 0.3 && y > 0.7) {
      return setMoveDirection("translate-x-0 -translate-y-10"); // bottom-left
    }

    if (x > 0.7 && y > 0.7) {
      return setMoveDirection("-translate-x-10 -translate-y-10"); // bottom-right
    }

    if (y < 0.3) setMoveDirection("translate-y-0"); // top
    else if (y > 0.7)
      setMoveDirection("-translate-x-2 -translate-y-10"); // bottom
    else if (x < 0.3) setMoveDirection("translate-x-0 -translate-y-4"); // left
    else if (x > 0.7)
      setMoveDirection("-translate-x-10 -translate-y-4"); // right
    else setMoveDirection("-translate-x-4 -translate-y-4"); // center
  };

  return (
    <div className="w-full h-screen relative flex flex-col items-center justify-end text-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 z-20 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)] bg-background/70 backdrop-blur"></div>
      <div
        className="absolute top-0 left-0 h-full w-full z-20 "
        onMouseMove={(e) => handleMouseMove(e as any as MouseEvent)}
      />

      <img
        src="/bg.gif"
        style={{
          minWidth: "110%",
          minHeight: "110%",
        }}
        className={`absolute top-0 left-0 object-cover opacity-10 inset-0 z-0 transition-all duration-1000 ${moveDirection}`}
      />

      <img
        src="/bg.gif"
        style={{
          minWidth: "110%",
          minHeight: "110%",
        }}
        className={`absolute top-0 left-0 object-cover opacity-5 inset-0 z-0 transition-all duration-1200 blur-sm ${moveDirection}`}
      />

      <AudioPlayer src="/waterfall-24060.mp3" />
      {/* <Clouds rotate />
      <Particles /> */}

      <div className={`lightning flashit `}></div>
      {/* <div className="absolute top-0 left-0 w-full h-full z-10 bg-grid-white/5 blur-sm"></div> */}
      {/* <div className="w-48 h-48 rounded-full blur-2xl absolute bottom-0 left-0 z-10 bg-orange-700/50"></div> */}

      <img
        src="https://i.gifer.com/origin/6b/6bb14b1f413cac62614e813c19d9d94f_w200.gif"
        className="absolute top-0 left-0 w-screen h-screen inset-0 z-10 opacity-[5%] border-b-1"
      />

      <div className="flex flex-col items-center justify-center text-center z-20">
        <h1
          className="text-2xl z-10 px-64 text-white"
          style={{
            textShadow: "0px 0px 30px white",
          }}
        >
          Unleash your imagination in
        </h1>
        <h1
          className="text-5xl z-10 px-64 italic"
          style={{
            textShadow: "0px 0px 8px rgba(255, 255, 255, .5)",
          }}
        >
          Persona Adventure.
        </h1>
      </div>
      <p className="max-w-2xl z-10 mt-3 text-white/80 ">
        Dive into exciting text-based adventures where your choices drive the
        story - Craft unique characters and challenge your creativity
      </p>
      <div className="flex items-center gap-3 mt-6 z-30">
        <Button
          color="default"
          className="bg-transparent text-sm rounded-full font-semibold flex items-center gap-3 relative border border-blue-400/60 bg-white/5 backdrop-blur font-[300]"
          style={{
            boxShadow: "0px 0px 5px 0px rgba(255, 255, 255, .4)",
          }}
          endContent={<IconArrowRight size={14} />}
        >
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"></div>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"></div>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-lg"></div>
          <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-xl"></div>
          <div>Start your adventure</div>
        </Button>
      </div>
      <div
        className="w-[60%] absolute -bottom-2  h-2 z-30"
        style={{
          boxShadow: "0px 0px 100px 0px orange",
        }}
      ></div>
      <div
        className="w-[60%] absolute -bottom-2  h-2 z-30"
        style={{
          boxShadow: "0px 0px 100px 0px blue",
        }}
      ></div>
      <div className="text-xs opacity-50 z-20 mt-3 mb-6"></div>
      <div
        className="h-[50%] w-[60%] rounded-t-xl bg-white/5 backdrop-blur border border-white/10 z-40 p-4 pb-0"
        style={{
          boxShadow: "0px 0px 150px 0px rgba(96, 165, 250, .2)",
        }}
      >
        {/* <img src="/holder.jpg" className="w-full h-full bg-black rounded-t-xl object-cover" /> */}
        <div
          className="w-full h-full bg-black rounded-t-xl object-cover flex items-center justify-center"
          style={{
            boxShadow: "0px 0px 150px 0px rgba(251, 191, 36, .1)",
          }}
        >
          <IconCamera size={20} />
        </div>
      </div>
    </div>
  );
}
