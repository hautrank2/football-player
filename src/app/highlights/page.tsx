import React from "react";
import Player from "./Player";
import { Typography } from "~/components/ui/typography";

function Highlights({}) {
  const assists = [
    {
      title: "Sane",
      videoId: "cyA-uY6sDow",
      start: 6,
      end: 12,
      season: "17/18",
      competitor: "Stoke City",
      titleVi: "Pha kiến tạo tinh tế cho Leroy Sane ghi bàn",
      titleEn: "Brilliant assist to Leroy Sane",
      contextVi: "Premier League mùa giải 2017/18, gặp Stoke City",
      contextEn: "Premier League 2017/18 season vs Stoke City",
    },
    {
      title: "Oscar Bobb",
      videoId: "cyA-uY6sDow",
      start: 0,
      end: 4,
      season: "23/24",
      competitor: "Newcastle",
      titleVi: "Pha kiến tạo sắc sảo cho Oscar Bobb ghi bàn",
      titleEn: "Sharp assist to Oscar Bobb",
      contextVi: "Premier League mùa giải 2023/24, gặp Newcastle",
      contextEn: "Premier League 2023/24 season vs Newcastle",
    },
    {
      title: "Sterling",
      videoId: "cyA-uY6sDow",
      start: 38,
      end: 46,
      season: "19/20",
      competitor: "Spurs",
      titleVi: "Pha bấm bóng điệu nghệ cho Sterling phá bẫy việt vị",
      titleEn: "Delicate chip assist to Sterling breaking the offside trap",
      contextVi: "Premier League mùa giải 2019/20, gặp Tottenham",
      contextEn: "Premier League 2019/20 season vs Tottenham",
    },
    {
      title: "Halland",
      videoId: "cyA-uY6sDow",
      start: 94,
      end: 100,
      season: "22/23",
      competitor: "Man Utd",
      titleVi:
        "Đường kiến tạo mở tốc độ cho Haaland ghi bàn vào lưới Man United",
      titleEn: "Fast break assist for Haaland against Man United",
      contextVi: "Derby Manchester, Premier League mùa 2022/23",
      contextEn: "Manchester Derby, Premier League 2022/23 season",
    },
    {
      title: "Dias",
      videoId: "cyA-uY6sDow",
      start: 159,
      end: 170,
      season: "20/21",
      competitor: "West Ham",
      titleVi: "Tạt bóng chuẩn xác cho Ruben Dias đánh đầu ghi bàn",
      titleEn: "Pinpoint cross for Ruben Dias header",
      contextVi: "Premier League mùa giải 2020/21, gặp West Ham",
      contextEn: "Premier League 2020/21 season vs West Ham",
    },
    {
      title: "Jesus",
      videoId: "cyA-uY6sDow",
      start: 185,
      end: 193,
      season: "17/18",
      competitor: "Southamton",
      titleVi: "Pha kiến tạo tinh tế cho Gabriel Jesus kết liễu Southampton",
      titleEn: "Slick assist to Gabriel Jesus vs Southampton",
      contextVi: "Premier League mùa giải 2017/18, gặp Southampton",
      contextEn: "Premier League 2017/18 season vs Southampton",
    },
    {
      title: "Jesus",
      videoId: "cyA-uY6sDow",
      start: 207,
      end: 214,
      season: "19/20",
      competitor: "Aston Villa",
      titleVi: "Đường kiến tạo mẫu mực cho Jesus ghi bàn",
      titleEn: "Perfect assist to Jesus vs Aston Villa",
      contextVi: "Premier League mùa giải 2019/20, gặp Aston Villa",
      contextEn: "Premier League 2019/20 season vs Aston Villa",
    },
    {
      title: "Gundogan",
      videoId: "cyA-uY6sDow",
      start: 207,
      end: 246,
      season: "21/22",
      competitor: "Aston Villa",
      titleVi:
        "Đường tạt như đặt cho Gundogan ghi bàn trong trận đấu định đoạt ngôi vô địch",
      titleEn: "Pinpoint cross for Gundogan in title-deciding match",
      contextVi: "Premier League vòng cuối mùa giải 2021/22, gặp Aston Villa",
      contextEn: "Final round of Premier League 2021/22 season vs Aston Villa",
    },
    {
      title: "Jesus",
      videoId: "cyA-uY6sDow",
      start: 53,
      end: 61,
      season: "19/20",
      competitor: "Real Madrid",
      titleVi: "Kiến tạo chuẩn xác cho Jesus đánh đầu vào lưới Real Madrid",
      titleEn: "Precise assist for Jesus header vs Real Madrid",
      contextVi: "Champions League mùa giải 2019/20, lượt đi vòng 1/8",
      contextEn: "Champions League 2019/20 Round of 16 First Leg",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Typography variant="h1" className="mb-8 bg-primary w-fit text-background p-2">
        Assists
      </Typography>
      <div className="grid grid-cols-1 gap-4">
        {assists.map((item, index) => {
          return (
            <div key={item.title + index} className="card">
              <Typography variant="h2" className="mb-2">
                {item.titleVi}
              </Typography>
              <Typography variant="p" className="mb-2">
                {item.season} | vs {item.competitor}
              </Typography>
              <Player
                videoId={item.videoId}
                options={{
                  width: "100%",
                  height: 600,
                  playerVars: {
                    cc_lang_pref: "en",
                    start: item.start,
                    end: item.end,
                    controls: 0,
                    disablekb: 1,
                    modestbranding: 1,
                    loop: 1,
                    autoplay: 0,
                  },
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Highlights;
