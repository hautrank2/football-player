"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect, useRef } from "react";
import YouTubePlayer from "youtube-player";
import {
  YouTubePlayer as YouTubePlayerType,
  Options as YoutubeOptions,
} from "youtube-player/dist/types";

type Props = {
  videoId: string;
  options?: YoutubeOptions;
};

const Player = ({ videoId, options }: Props) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const playerInstance = useRef<YouTubePlayerType>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);
  const config: YoutubeOptions = {
    ...options,
  };
  const start = options?.playerVars?.start || 0;
  const end = options?.playerVars?.end || 0;

  useEffect(() => {
    if (!playerRef.current) return;
    playerInstance.current = YouTubePlayer(playerRef.current, config);
    const instance = playerInstance.current;
    if (instance) {
      instance.loadVideoById(videoId, start || 0, "large");
      instance.on("ready", (event: any) => {
        if (event && event.target) {
          event.target.seekTo?.(start);
          event.target.mute();
          setTimeout(() => {
            event.target.playVideo();
          }, 400);
          intervalRef.current = setInterval(() => {
            const startEnd = event.target.getCurrentTime() - end;
            if (startEnd <= 0.1 && startEnd >= 0) {
              event.target.seekTo?.(start);
            }
          }, 100);
        }
      });
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [videoId]);

  return <div ref={playerRef} />;
};

export default Player;
