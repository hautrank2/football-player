import React from "react";
import Player from "./Player";

function Highlights({}) {
  const params: Record<string, string> = {
    controls: "0",
    autoplay: "1",
    loop: "1",
    playlist: "RI96abvEfLc",
    cc_lang_pref: "vi",
    hl: "vi",
  };
  return (
    <div className="max-w-4xl mx-auto">
      <Player
        videoId="RI96abvEfLc"
        options={{
          width: 400,
          height: 200,
          playerVars: {
            cc_lang_pref: "en",
            start: 5,
            end: 7,
            controls: 0,
            disablekb: 1,
            autoplay: 1,
            modestbranding: 1,
            loop: 1,
          },
        }}
      />
    </div>
  );
}

export default Highlights;
