import logoBranca from "@/assets/logo-branca.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToForm = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/30">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src={logoBranca} alt="Zera Company" className="h-8 md:h-10 w-auto" />
          </a>

          {/* CTA Button */}
          <Button variant="glow" size="default" onClick={scrollToForm}>
            Agendar diagnóstico
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
