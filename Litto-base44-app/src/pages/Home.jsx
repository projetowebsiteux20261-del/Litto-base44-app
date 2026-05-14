import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhyLittoSection from "../components/home/WhyLittoSection";
import FeaturedBookSection from "../components/home/FeaturedBookSection";
import CategoriesSection from "../components/home/CategoriesSection";
import BooksSection from "../components/home/BooksSection";
import MoviesSection from "../components/home/MoviesSection";
import CommunitySection from "../components/home/CommunitySection";
import FeedbackSection from "../components/home/FeedbackSection";

const HERO_IMAGE = "https://media.base44.com/images/public/6a04fc0ef8d7e6fb9025d08a/38a7d35aa_generated_45423133.png";

export default function Home() {
  return (
    <div className="pb-16 md:pb-0">
      <HeroSection />
      <WhyLittoSection />
      <FeaturedBookSection heroImage={HERO_IMAGE} />
      <CategoriesSection />
      <BooksSection />
      <MoviesSection />
      <CommunitySection />
      <FeedbackSection />
    </div>
  );
}