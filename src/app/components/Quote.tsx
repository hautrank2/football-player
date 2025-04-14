import React from "react";
import { QUOTES_DATA } from "~/data/quotes";

function Quote({}) {
  const data = QUOTES_DATA;
  return (
    <div className="p-4 flex flex-col gap-4 item-center">
      {data.map((quote, index) => (
        <div key={index} className="max-w-2xl">
          <blockquote className="text-xl">{quote.quote_vi}</blockquote>
          <p className="text-base font-light">-- {quote.author} --</p>
        </div>
      ))}
    </div>
  );
}

export default Quote;
