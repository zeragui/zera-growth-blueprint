import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/10 to-transparent blur-[100px]" />
      
      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-primary text-sm font-medium">Sobre nós</span>
        </div>
        
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
          Prazer, nós somos a{" "}
          <span className="text-gradient">Zera Company</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          <p>
            A Zera Company é a assessoria de performance que ajuda empresas a <strong className="text-foreground">zerarem barreiras</strong> e alcançarem eficiência máxima em resultados. Unimos estratégia, marketing e inteligência comercial para que cada ação tenha um fim muito claro: fazer seu negócio <strong className="text-foreground">faturar mais, com previsibilidade</strong>.
          </p>
          <p>
            Ao agendar seu diagnóstico, você conversa direto com quem está por trás de operações que movimentam <strong className="text-foreground">milhões em faturamento</strong>. É uma oportunidade de olhar para sua empresa com a mesma lupa usada em negócios que já escalam em alto nível.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 mb-16">
          {[
            { value: "50+", label: "Empresas atendidas" },
            { value: "R$10M+", label: "Gerados para clientes" },
            { value: "98%", label: "Taxa de satisfação" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <Button variant="glow" size="xl" className="group">
          Quero agendar meu diagnóstico
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
};

export default AboutSection;
