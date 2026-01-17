import Footer from "@/components/footer";
import FeaturedMovies from "@/components/landing/featured-movies";
import HeroBanner from "@/components/landing/hero-banner";
import MainNav from "@/components/main-nav";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      {/* Home Page Content */}
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <Footer />
    </div>
  );
}
