import { Button } from "@nextui-org/react";
import ThemeToggle from "./theme-toggle";
import { IconBrandGithub } from "@tabler/icons-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center p-3 gap-1 z-50 bg-gradient-to-b from-black/30 to-transparent">
      <div>textrpg</div>
      <div className="w-full flex items-center justify-center gap-9">
        <Link
          href="#features"
          className="text-xs opacity-70 hover:opacity-100 text-white font-[200]"
        >
          Features
        </Link>
        <Link
          href="#features"
          className="text-xs opacity-70 hover:opacity-100 text-white font-[200]"
        >
          How to play
        </Link>
        <Link
          href="#features"
          className="text-xs opacity-70 hover:opacity-100 text-white font-[200]"
        >
          Blog
        </Link>
      </div>
      <Button
        color="default"
        size="sm"
        className="bg-transparent text-sm rounded-full font-semibold flex items-center gap-3 relative border border-blue-400/50 bg-white/5 backdrop-blur font-[300]"
        
      >
        <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"></div>
        <div className="absolute -top-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-sm"></div>
        <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/60 to-transparent blur-sm"></div>
        <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-lg"></div>
        <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent blur-xl"></div>
        <div className="text-xs">signup now</div>
      </Button>
    </div>
  );
}
