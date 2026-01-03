import { Button } from "@/components/ui/button";
import { TrendingUp, BarChart3, ArrowRight } from "lucide-react";

const scenarios = [
  {
    icon: TrendingUp,
    title: "Minha empresa cresce, mas sem previsibilidade",
    description:
      "Seus resultados variam mês a mês, você sente que poderia faturar muito mais, mas não enxerga com clareza onde estão os gargalos. Este diagnóstico vai te mostrar, com dados, por que isso acontece e como corrigir.",
    gradient: "from-primary/20 to-accent/20",
    borderColor: "hover:border-primary/50",
  },
  {
    icon: BarChart3,
    title: "Já invisto em marketing, mas não vejo o retorno que espero",
    description:
      "Você já tem tráfego, agência ou time interno, porém o caixa não acompanha o esforço. No diagnóstico, vamos identificar o que está desalinhado entre estratégia, funil e execução para seu investimento finalmente virar crescimento.",
    gradient: "from-accent/20 to-primary/20",
    borderColor: "hover:border-accent/50",
  },
];

const ScenarioCards = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Com qual cenário você mais{" "}
            <span className="text-gradient">se identifica?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecione a situação que mais representa seu momento atual
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={`group glass-card p-8 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_60px_hsl(var(--primary)/0.15)] ${scenario.borderColor}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${scenario.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <scenario.icon className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-4 group-hover:text-primary transition-colors duration-300">
                {scenario.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                {scenario.description}
              </p>
              
              {/* CTA */}
              <Button variant="glow-outline" className="w-full group/btn">
                Este é meu cenário
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScenarioCards;
