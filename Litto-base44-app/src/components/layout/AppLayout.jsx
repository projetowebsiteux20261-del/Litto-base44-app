import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-background font-poppins flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}