import { FOOTER_LINKS } from "@/lib/constants";
import FooterItems from "./FooterItems";
import FooterLogo from "./FooterLogo";
import TopFooterLinks from "./TopFooterLinks";

export default function Footer() {
  return (
    <footer className="apply-helvetica mt-[48px] bg-gray-900">
      <TopFooterLinks />
      <div className="responsiveGrid2 mt-[32px] w-full justify-items-center p-[16px]">
        {FOOTER_LINKS.map((footerLink, index) => {
          return <FooterItems key={index} {...footerLink} />;
        })}
      </div>
      <FooterLogo />
    </footer>
  );
}
