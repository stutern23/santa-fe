import React from "react";
import Sidebar from "../dashboard/sidebar";
import style from "../dashboard/style.module.css";

export function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <section className={`${style.home_bg} relative h-full`}>
      <Sidebar />
      <div
        className={`${style.resize_width} ${style.resize_width_desktop} p-4 h-full`}
      >
        {children}
      </div>
    </section>
  );
}
