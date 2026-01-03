import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const FeatureSection = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Visual Element */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square max-w-lg mx-auto relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent rounded-3xl blur-2xl" />
              
              {/* Main Card */}
              <div className="relative glass-card glow-border rounded-3xl p-8 h-full flex flex-col justify-center">
                <div className="space-y-6">
                  {[
                    "Análise de faturamento e metas",
                    "Mapeamento completo do funil",
                    "Identificação de gargalos",
                    "Oportunidades de caixa rápido",
                    "Plano de ação priorizado",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/30 hover:border-primary/40 transition-all duration-300 group"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-foreground font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-primary/20 rounded-2xl blur-xl floating" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-xl blur-lg floating" style={{ animationDelay: '-2s' }} />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
              Método exclusivo
            </span>
            
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              O único diagnóstico focado em transformar{" "}
              <span className="text-gradient">dados em crescimento real</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                A Zera Company é uma assessoria de performance criada para eliminar as barreiras que impedem empresas de crescerem — mesmo com produtos e serviços fortes. Nosso time mergulha nos bastidores do seu negócio para conectar estratégia, comunicação e inteligência comercial em um só plano.
              </p>
              <p>
                No diagnóstico, você não recebe "dicas soltas", e sim uma leitura profunda da sua operação, feita por quem vive de performance no dia a dia, gerando resultados consistentes em múltiplos segmentos. É a clareza que você precisa para tomar decisões com segurança e dar o próximo salto.
              </p>
            </div>
            
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
              <p className="font-display text-xl font-semibold text-foreground italic">
                "Qual sua decisão hoje: continuar crescendo no escuro ou enxergar, de uma vez por todas, o que o seu negócio realmente precisa?"
              </p>
            </div>
            
            <Button variant="glow" size="xl" className="mt-8 group">
              Quero enxergar meu negócio
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
