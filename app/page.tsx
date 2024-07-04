import React from "react";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects"
import Experience from "@/components/Experience"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import { navItems } from "@/data";

const HomePage: React.FC = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
      </div>
    </main>
  );
};

export default HomePage;
