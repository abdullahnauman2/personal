import { Header, /* Publications, */ Philosophy, Inspiring, Footer } from "./components";
import { profile } from "./data/profile";
// import { publications } from "./data/publications";

export default function Home() {
  return (
    <main className="main-container">
      <Header profile={profile} />
      <Philosophy />
      <Inspiring />
      {/* <Publications
        publications={publications}
        researchDescription="I'm interested in [your research areas]. Some papers are highlighted."
      /> */}
      <Footer />
    </main>
  );
}
