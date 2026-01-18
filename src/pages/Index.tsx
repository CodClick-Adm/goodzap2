import { motion } from "framer-motion";
import {
  MessageCircle,
  Bot,
  Zap,
  Calendar,
  UserCheck,
  ShieldCheck,
  Info,
  Settings,
  TrendingUp,
  RotateCcw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGoodzap from "@/assets/logo-goodzap.png";

/* ================= HEADER ================= */
const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
  >
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <img src={logoGoodzap} alt="GoodZap Logo" className="h-10" />
      <nav className="hidden md:flex gap-8">
        <a href="#features">Recursos</a>
        <a href="#benefits">Benefícios</a>
        <a href="#pricing">Preços</a>
        <a href="#faq">FAQ</a>
      </nav>
      <Button variant="hero" asChild>
        <a href="https://wa.me/5511930047549">Começar Agora</a>
      </Button>
    </div>
  </motion.header>
);

/* ================= HERO ================= */
const HeroSection = () => (
<section className="min-h-[calc(100vh-80px)] pt-24 pb-16 bg-hero-gradient">
    <div className="container mx-auto px-4 text-center max-w-4xl">
      <motion.h1 className="text-5xl md:text-7xl font-bold mb-6">
        Transforme seu <span className="text-gradient">WhatsApp</span> em uma Máquina de Vendas
      </motion.h1>

      <p className="text-xl text-muted-foreground mb-10">
        Automatize atendimentos, qualifique leads e venda 24/7 com IA.
      </p>

      <div className="flex gap-4 justify-center">
        <Button variant="hero" size="xl">
          <MessageCircle className="mr-2" /> Testar Grátis
        </Button>
        <Button variant="heroOutline" size="xl" asChild>
          <a href="https://wa.me/5511959061727">Ver Demonstração</a>
        </Button>
      </div>
    </div>
  </section>
);

/* ================= FEATURES ================= */
const features = [
  { icon: Bot, title: "IA Conversacional", description: "Atendimento inteligente e humanizado." },
  { icon: Zap, title: "Respostas Instantâneas", description: "Nunca perca uma venda por demora." },
  { icon: UserCheck, title: "Qualificação de Leads", description: "Priorize quem realmente compra." },
  { icon: Calendar, title: "Agendamento", description: "Reuniões marcadas automaticamente." },
  { icon: ShieldCheck, title: "Segurança", description: "Totalmente compatível com LGPD." },
  { icon: RotateCcw, title: "Recuperação", description: "Reative clientes automaticamente." },
  { icon: Info, title: "Informações", description: "Cardápios, preços, horários e mais." },
  { icon: TrendingUp, title: "Vendas", description: "Sugestões que aumentam ticket médio." },
  { icon: Settings, title: "Controle", description: "Painel completo e intuitivo." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-card">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
      {features.map((f, i) => (
        <div key={i} className="glass-card p-6 rounded-2xl">
          <f.icon className="mb-4 text-primary" />
          <h3 className="font-bold mb-2">{f.title}</h3>
          <p className="text-muted-foreground">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

/* ================= PRICING ================= */
const plans = [
  {
    name: "Starter",
    price: "147",
    description: [
      "Automatize respostas e ganhe tempo no WhatsApp.",
      "Ideal para empresas que recebem muitas perguntas repetidas e precisam responder rápido, sem depender de um atendente o tempo todo.",
    ],
    features: [
      "Atendimento automatizado e personalizado",
      "Respostas instantâneas sobre horários, serviços, produtos e promoções",
      "Redução drástica de mensagens manuais",
      "Transferência inteligente para atendente humano quando necessário",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "297",
    description: [
      "Transforme o WhatsApp em um canal de vendas automático.",
      "Ideal para restaurantes delivery e empresas que vendem ou recebem pedidos pelo WhatsApp",
    ],
    features: [
      "Tudo do Starter",
      "Registro e envio de pedidos automaticamente",
      "Recuperação de clientes inativos",
      "Mensagens automáticas de aniversário com promoções",
      "Agendamento e reservas sem esforço",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "fale conosco",
    description: [
      "Integração total, inteligência avançada e escala",
      "Ideal para empresas que já possuem sistemas próprios e precisam integrar tudo em um único fluxo inteligente no WhatsApp",
    ],
    features: [
      "Tudo do Professional",
      "Qualificação automática de leads",
      "IA avançada com fluxos personalizados",
      "API completa para integrações sob medida",
      "Gerente dedicado para acompanhar sua operação",
    ],
    popular: false,
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 bg-card">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
      {plans.map((plan, i) => (
        <div
          key={i}
          className={`rounded-3xl p-8 ${
            plan.popular ? "border-2 border-primary glow-effect" : "glass-card"
          }`}
        >
          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

          <div className="space-y-4 text-muted-foreground mb-6">
            {plan.description.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>

          <div className="text-4xl font-bold mb-6">
            R${plan.price} <span className="text-base text-muted-foreground">/mês</span>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((f, idx) => (
              <li key={idx}>• {f}</li>
            ))}
          </ul>

          <Button variant={plan.popular ? "hero" : "outline"} className="w-full" asChild>
            <a href="https://wa.me/5511930047549">Começar Agora</a>
          </Button>
        </div>
      ))}
    </div>
  </section>
);

/* ================= FOOTER ================= */
const Footer = () => (
  <footer className="py-12 border-t">
    <div className="container mx-auto px-4 text-center text-muted-foreground">
      © 2025 GoodZap. Todos os direitos reservados.
    </div>
  </footer>
);

/* ================= PAGE ================= */
const Index = () => (
  <main>
    <Header />
    <HeroSection />
    <FeaturesSection />
    <PricingSection />
    <Footer />
  </main>
);

export default Index;
