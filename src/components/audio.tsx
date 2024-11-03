"use client";

import { IconVolume, IconVolumeOff } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";

interface Props {
  src: string;
}

const AudioPlayer = ({ src }: Props) => {
  const [playing, setPlaying] = useState(true);
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null);

  const toggle = () => {
    if (!player) return;

    const c = !playing;
    setPlaying(c);

    if (c) {
      return player.play();
    }

    player.pause();
  };

  useEffect(() => {
    if (!player) {
      const audio = new Audio(src);
      audio.volume = 0.5;

      // Function to check if audio has reached 90% of its duration
      const handleTimeUpdate = () => {
        if (audio.currentTime >= 0.9 * audio.duration) {
          audio.currentTime = 0.2; // Reset to the beginning
          audio.play(); // Replay the audio
        }
      };

      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.play();
      setPlayer(audio);

      // Cleanup: Remove the event listener on unmount
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.pause();
        audio.currentTime = 0;
      };
    }
  }, []);

  return (
    <div
      className="fixed bottom-2 right-2 w-7 h-7 bg-black/50 backdrop-blur rounded-md flex items-center justify-center z-40 cursor-pointer"
      onClick={toggle}
    >
      {playing ? <IconVolume size={14} /> : <IconVolumeOff size={14} />}
    </div>
  );
};

export default AudioPlayer;
