import React from "react";
import Header from "~/components/layouts/header";

function MuseumLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-24">
      <Header />
      {children}
    </div>
  );
}

export default MuseumLayout;
