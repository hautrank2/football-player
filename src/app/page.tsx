import Image from "next/image";
import Header from "~/components/layouts/header";
import { Typography } from "~/components/ui/typography";
import { TOTAL_ASSIST, TOTAL_GOALS, TOTAL_MATCH } from "~/data/common";
import { cn } from "~/lib/utils";
import SectionHeadline from "./components/SectionHeadline";
import Moment from "./components/Moment";

export default function Home() {
  const stacks = [
    {
      title: "Frontend",
    },
    {
      title: "Backend",
    },
    {
      title: "Design",
    },
  ];

  const tags = [
    {
      title: `10 mùa giải`,
    },
    {
      title: `${TOTAL_MATCH} trận`,
    },
    {
      title: `${TOTAL_GOALS} bàn thắng`,
    },
    {
      title: `${TOTAL_ASSIST} kiến tạo`,
    },
  ];

  const sectionClassName = "max-w-[80rem] mx-auto min-h-[86vh] p-16";
  return (
    <div className="py-20">
      <Header />

      <section id="banner" className={cn(sectionClassName)}>
        <div className="flex gap-8 items-center mx-auto ">
          <div>
            <h1 className="text-7xl font-bold mb-8">
              KDB - Người viết nên bản giao hưởng sân cỏ
            </h1>
            <h3 className="text-2xl font-normal mb-12">
              Từ Genk đến Man City, anh là nhạc trưởng của những giấc mơ.
              <br />
              Website này là nơi tụ họp cảm xúc, kỷ niệm và tình yêu của người
              hâm mộ dành cho KDB.
            </h3>

            <div className="flex items-center gap-4">
              {tags.map((tag) => (
                <div key={tag.title} className="px-4 py-2 border rounded-full">
                  <p className="text-xl">{tag.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-[780px] h-[600px] relative">
            <Image
              src={"/svg/number-vector.svg"}
              alt="banner"
              width={180}
              height={100}
              className="hidden lg:block absolute top-12 left-0"
            />
            <Image
              src={"/img/banner-fixed.png"}
              alt="banner"
              fill
              className="object-cover hidden lg:block"
            />
          </div>
        </div>
      </section>

      <section id="moment" className={cn(sectionClassName)}>
        <SectionHeadline title="Khoảnh khắc đáng nhớ" href="moment" />
        <Moment />
      </section>
    </div>
  );
}
