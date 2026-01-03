import logoZera from "@/assets/logo-zera.png";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border/30">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={logoZera} alt="Zera Company" className="h-12 w-auto" />
          
          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Termos de Uso
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2025 Zera Company. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
