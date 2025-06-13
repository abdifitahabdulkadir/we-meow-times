import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";

export default function Home() {
  return (
    <main className="h-full w-full overflow-auto">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}
