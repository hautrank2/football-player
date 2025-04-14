import React, { ReactNode } from "react";
import Header from "~/components/layouts/header";

function GoalsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="py-24">
      <Header />
      {children}
    </div>
  );
}

export default GoalsLayout;
