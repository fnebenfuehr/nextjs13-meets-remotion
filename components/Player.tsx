"use client";

import { Player } from "@remotion/player";
import { MyComp } from "../remotion/MyComp";

export const RemotionPlayer: React.FC = () => {
  return (
    <Player
      component={MyComp}
      inputProps={{ text: "Remotion 123" }}
      durationInFrames={120}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      style={{
        width: 1280,
        height: 720,
      }}
      controls
    />
  );
};
