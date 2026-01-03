import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Target, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[120px] floating" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[150px] floating" style={{ animationDelay: '-3s' }} />
      
      <div className="container relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in-up">
              <span className="w-2 h-2 bg-primary rounded-full pulse-glow" />
              <span className="text-sm text-primary font-medium">Diagnóstico Gratuito</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up-delay-1">
              Descubra o que está{" "}
              <span className="text-gradient">travando o crescimento</span>{" "}
              da sua empresa
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in-up-delay-2">
              Uma análise estratégica, personalizada e gratuita da sua operação de marketing e vendas para revelar gargalos, oportunidades ocultas e o caminho mais rápido para escalar com previsibilidade.
            </p>
            
            <p className="text-sm text-muted-foreground/80 animate-fade-in-up-delay-3">
              Sua empresa já fatura, mas sente que poderia estar muito maior? Nesta conversa, você recebe clareza sobre números, funil e estratégia — sem promessa mirabolante, apenas leitura profissional da sua operação.
            </p>
          </div>
          
          {/* Right Form */}
          <div className="animate-fade-in-up-delay-2">
            <div className="glass-card glow-border p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-center mb-2">
                Agende seu diagnóstico
              </h3>
              <p className="text-muted-foreground text-center text-sm mb-8">
                Preencha seus dados para que um especialista entre em contato
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  type="tel"
                  placeholder="WhatsApp com DDD"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Nome da sua empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  required
                />
                
                <Button type="submit" variant="glow" size="xl" className="w-full mt-6">
                  Quero meu diagnóstico gratuito
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground/70 text-center mt-6">
                Reunião estratégica sem custo e sem compromisso.
              </p>
            </div>
          </div>
        </div>
        
        {/* Icon Strip */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 animate-fade-in-up-delay-4">
          {[
            {
              icon: Target,
              text: "Diagnóstico 100% online e individual com nossos especialistas.",
            },
            {
              icon: TrendingUp,
              text: "Focado em empresas que já faturam e querem escalar com previsibilidade.",
            },
            {
              icon: Users,
              text: "Reunião estratégica, não é pitch de venda: você sai com um plano de ação.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm hover:bg-card/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
