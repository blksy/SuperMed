import Hero from "../components/home/Hero";
import Announcements from "../components/home/Announcements";
import QuickServices from "../components/home/QuickServices";

function HomePage() {
  return (
    <>
      <Announcements />
      <Hero />
      <QuickServices />
    </>
  );
}

export default HomePage;
