import { motion } from "framer-motion";
import { MessageCircle, Bot, Zap, Calendar, UserCheck, ShieldCheck, Info, Settings, TrendingUp, Users, DollarSign, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoGoodzap from "@/assets/logo-goodzap.png";

const Header = () => (
  <motion.header
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30"
  >
    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <img src={logoGoodzap} alt="GoodZap Logo" className="h-10 w-auto" />
      </div>
      <nav className="hidden md:flex items-center gap-8">
        <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
        <a href="#benefits" className="text-muted-foreground hover:text-foreground transition-colors">Benefícios</a>
        <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Preços</a>
        <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
      </nav>
      <Button variant="hero" asChild>
        <a href="https://wa.me/5511930047549?text=Quero%20mais%20informa%C3%A7%C3%B5es">Começar Agora</a>
      </Button>
    </div>
  </motion.header>
);

const HeroSection = () => (
  <section className="min-h-screen bg-hero-gradient pt-32 pb-20 relative overflow-hidden">
    {/* Background effects */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
            <Bot className="w-4 h-4" />
            Automação Inteligente com IA
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Transforme seu
          <span className="text-gradient"> WhatsApp </span>
          em uma Máquina de Vendas
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto"
        >
          Automatize atendimentos, qualifique leads e feche vendas 24/7 com inteligência artificial. 
          Aumente suas conversões em mais de 45%.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button variant="hero" size="xl">
            <MessageCircle className="w-5 h-5 mr-2" />
            Testar Grátis por 7 Dias
          </Button>
          <Button variant="heroOutline" size="xl">
            <a href="https://wa.me/5511968743131?text=Olá ! Bom dia !">Ver Demonstração</a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10 +", label: "Tipos de Agentes" },
            { value: "25 +", label: "Segmentos Atendidos" },
            { value: "45% +", label: "Aumento em Vendas" },
            { value: "24/7", label: "Atendimento" },
          ].map((stat, index) => (
            <div key={index} className="glass-card rounded-2xl p-6">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: Bot,
    title: "IA Conversacional",
    description: "Atendimento humanizado com inteligência que entende o contexto e a intenção real do seu cliente.",
  },
  {
    icon: Zap,
    title: "Respostas Instantâneas",
    description: "Agilidade total: responda em segundos, 24h por dia, e nunca mais perca uma venda por demora no retorno.",
  },
  {
    icon: UserCheck,
    title: "Qualificação de Leads",
    description: "Filtre automaticamente os leads com maior potencial de compra e direcione-os prontos para o seu time comercial.",
  },
  {
    icon: Calendar,
    title: "Agendamento Autônomo",
    description: "Integre com sua agenda e deixe a IA agendar reuniões e compromissos automaticamente.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e LGPD",
    description: "Proteção máxima com criptografia de ponta a ponta e conformidade total com as normas de privacidade.",
  },
  {
    icon: RotateCcw,
    title: "Recuperação Ativa",
    description: "Reative clientes ausentes de forma automática com base no histórico e data da última compra.",
  },
  {
    icon: Info,
    title: "Informações Personalizadas",
    description: "Fornece todas as informações necessárias ao cliente, como cardápio, preços, horário de atendimento, promoções, endereço e muito mais",
  },
  {
    icon: TrendingUp,
    title: "Vendedor Especialista",
    description: "Ideal para delivery: tira pedidos, calcula frete e sugere acompanhamentos para aumentar seu ticket médio.",
  },
  {
    icon: Settings,
    title: "Controle Total",
    description: "Painel intuitivo para configurar tempos de resposta, regras de frete por KM/CEP e exceções de atendimento.",
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 bg-card">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium mb-4 block">RECURSOS PODEROSOS</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Tudo que você precisa para <span className="text-gradient">vender mais</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Ferramentas avançadas de automação e IA para transformar seu atendimento no WhatsApp
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <feature.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const benefits = [
  "Redução de até 80% no tempo de resposta",
  "Aumento de 45% a 300% nas conversões de vendas",
  "Atendimento personalizado para cada cliente",
  "Integração com CRMs e ferramentas de marketing",
  "Relatórios detalhados de performance",
  "Suporte técnico especializado 24/7",
];

const BenefitsSection = () => (
  <section id="benefits" className="py-24 bg-background relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-medium mb-4 block">POR QUE ESCOLHER O GOODZAP?</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Resultados que <span className="text-gradient">transformam</span> negócios
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Empresas que usam o GoodZap alcançam resultados extraordinários em vendas e satisfação do cliente.
          </p>
          
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <span className="text-lg">{benefit}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-card rounded-3xl p-8 relative">
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary rounded-2xl flex items-center justify-center glow-effect">
              <Zap className="w-10 h-10 text-primary-foreground" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 mb-2">
                    <p className="text-sm">Olá! Gostaria de saber mais sobre o plano empresarial.</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Cliente • 10:30</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <div className="bg-primary/10 border border-primary/30 rounded-2xl rounded-tr-none p-4 mb-2">
                    <p className="text-sm">Olá! Fico feliz em ajudar! 🎉 Nosso plano empresarial oferece atendimento ilimitado, IA avançada e suporte prioritário. Posso agendar uma demonstração gratuita para você?</p>
                  </div>
                  <span className="text-xs text-muted-foreground text-right block">GoodZap IA • 10:30</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex-shrink-0" />
                <div className="flex-1">
                  <div className="bg-muted rounded-2xl rounded-tl-none p-4 mb-2">
                    <p className="text-sm">Sim! Pode agendar para amanhã às 14h?</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Cliente • 10:31</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const plans = [
{
    name: "Starter",
    price: "147",
    originalPrice: null,
    description: "Automatize respostas e ganhe tempo no WhatsApp\n\nIdeal para empresas que recebem muitas perguntas repetidas e precisam responder rápido, sem depender de um atendente o tempo todo.",
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
    originalPrice: "497",
    description: "Transforme o WhatsApp em um canal de vendas automático\n\nIdeal para restaurantes delivery e empresas que vendem ou recebem pedidos pelo WhatsApp",
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
    price: "697",
    originalPrice: null,
    description: "Integração total, inteligência avançada e escala\n\nIdeal para empresas que já possuem sistemas próprios e precisam integrar tudo em um único fluxo inteligente no WhatsApp\n\nValor final do plano\n* SOB CONSULTA *",
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
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium mb-4 block">PLANOS E PREÇOS</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Escolha o plano <span className="text-gradient">ideal</span> para você
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comece grátis por 7 dias. Sem compromisso, cancele quando quiser.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-3xl p-8 ${
              plan.popular
                ? "bg-gradient-to-b from-primary/20 to-card border-2 border-primary glow-effect"
                : "glass-card"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                MAIS POPULAR
              </div>
            )}
            
            <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-muted-foreground mb-6 whitespace-pre-line">{plan.description}</p>
            
            <div className="mb-8">
              <span className="text-5xl font-display font-bold">R${plan.price}</span>
              <span className="text-muted-foreground">/mês</span>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button
              variant={plan.popular ? "hero" : "outline"}
              className="w-full"
              asChild
            >
              <a href="https://wa.me/5511930047549?text=Quero%20mais%20informa%C3%A7%C3%B5es">Começar Agora</a>
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const faqs = [
  {
    question: "O GoodZap funciona com WhatsApp Business?",
    answer: "Sim! O GoodZap é totalmente compatível com o WhatsApp Business e WhatsApp Business API, oferecendo integração completa com todas as funcionalidades.",
  },
  {
    question: "Preciso de conhecimentos técnicos para usar?",
    answer: "Não! Nossa plataforma foi desenvolvida para ser intuitiva e fácil de usar. Você configura tudo em minutos, sem precisar de programação.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer: "Sim! Não há fidelidade ou multa. Você pode cancelar sua assinatura a qualquer momento diretamente pelo painel.",
  },
  {
    question: "A IA realmente entende as mensagens dos clientes?",
    answer: "Nossa IA utiliza tecnologia de processamento de linguagem natural avançada, entendendo contexto, intenção e até mesmo gírias e regionalismos em português.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium mb-4 block">DÚVIDAS FREQUENTES</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Perguntas <span className="text-gradient">frequentes</span>
        </h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6"
          >
            <h3 className="font-display text-lg font-bold mb-3">{faq.question}</h3>
            <p className="text-muted-foreground">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 bg-card relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Pronto para <span className="text-gradient">revolucionar</span> seu atendimento?
        </h2>
        <p className="text-xl text-muted-foreground mb-10">
          Transforme o WhatsApp da sua empresa em uma máquina de vendas através da Inteligência Artificial
        </p>
        <Button variant="cta" asChild>
          <a href="https://wa.me/5511930047549?text=Quero%20mais%20informa%C3%A7%C3%B5es" className="inline-flex items-center">
            <MessageCircle className="w-6 h-6 mr-2" />
            Começar Teste Grátis de 7 Dias
          </a>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Sem cartão de crédito • Cancele a qualquer momento
        </p>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-background border-t border-border">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img src={logoGoodzap} alt="GoodZap Logo" className="h-10 w-auto" />
        </div>
        
        <nav className="flex items-center gap-8">
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Recursos</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Preços</a>
          <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacidade</a>
        </nav>
        
        <p className="text-muted-foreground text-sm">
          © 2025 GoodZap. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
