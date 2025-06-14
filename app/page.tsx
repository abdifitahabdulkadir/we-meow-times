import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Main from "@/components/Main/Main";
import MaxWithWrapper from "@/components/MaxWithWrapper";

export default function Home() {
  return (
    <MaxWithWrapper>
      <div className="w-full lg:px-[119px]">
        <Header />
        <Main />
      </div>
      <Footer />
    </MaxWithWrapper>
  );
}
