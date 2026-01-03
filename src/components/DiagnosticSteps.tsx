import { Search, Map, Zap } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Raio X do seu crescimento",
    description:
      "Analisamos faturamento, canais atuais, funil e metas do seu negócio para entender onde você está e para onde quer ir. Aqui já surgem os primeiros pontos de atenção que estão travando seu crescimento.",
  },
  {
    number: "02",
    icon: Map,
    title: "Mapa de gargalos e oportunidades",
    description:
      "Identificamos falhas em aquisição de clientes, nutrição, vendas e retenção, além de oportunidades esquecidas que podem gerar caixa rápido com o que você já tem hoje.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Plano Z.E.R.A. personalizado",
    description:
      "Você recebe uma visão clara de prioridades: o que atacar primeiro, quais números acompanhar e quais movimentos de marketing e vendas podem trazer mais resultado no curto e médio prazo.",
  },
];

const DiagnosticSteps = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Etapas do seu{" "}
            <span className="text-gradient">diagnóstico de performance</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo estruturado para identificar exatamente o que está impedindo sua empresa de escalar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 left-[calc(100%+0.5rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="glass-card h-full p-8 hover:border-primary/40 transition-all duration-500 group-hover:translate-y-[-4px] group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.15)]">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                    {step.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSteps;
