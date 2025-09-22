"use client";

import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  // Header State
  const [isOpen, setIsOpen] = useState(false);

  // Hero State
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "Descomplique sua vida empresarial",
      subtitle:
        "Tenha um Endereço Fiscal confiável e evite dores de cabeça com burocracias",
      highlight: "gastando muito menos!",
    },
    {
      title: "Certificados Digitais",
      subtitle: "Acelere processos e burocracias com segurança e agilidade",
      highlight: "100% online!",
    },
  ];

  // Photo Carousel State
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = ["/foto01.jpg", "/foto02.jpg", "/foto03.jpg", "/foto04.jpg"];

  // Video Carousel State
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = ["/video1.mp4", "/video2.mp4", "/video3.mp4", "/video4.mp4"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá! Vim através do site.
    
*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Empresa:* ${formData.company}
*Serviço de interesse:* ${formData.service}
*Mensagem:* ${formData.message}

Gostaria de receber mais informações!`;

    const whatsappUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // WhatsApp Button State
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Services Data
  const services = [
    {
      icon: "fas fa-building",
      title: "Endereço Fiscal",
      description:
        "Endereço comercial estratégico para registro de CNPJ com toda documentação regularizada.",
      features: [
        "IPTU Comercial",
        "Alvará de funcionamento",
        "Certificado de conformidade",
        "Licença Sanitária",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "fas fa-certificate",
      title: "Certificado Digital",
      description:
        "Identidade eletrônica para assinar documentos à distância com valor jurídico.",
      features: [
        "Segurança Reforçada",
        "Agilidade e Conveniência",
        "Compliance",
        "Facilidade de Acesso",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: "fas fa-rocket",
      title: "Abertura de Empresa",
      description:
        "Processo completo de abertura empresarial rápido, seguro e sem burocracia.",
      features: [
        "Consultoria gratuita",
        "Documentação completa",
        "Registro nos órgãos",
        "Suporte pós-abertura",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "fas fa-users",
      title: "Folha de Pagamento",
      description:
        "Gestão completa de funcionários, cálculos e todas as obrigações trabalhistas.",
      features: [
        "Cálculos automáticos",
        "Obrigações em dia",
        "Relatórios detalhados",
        "Suporte especializado",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      icon: "fas fa-calculator",
      title: "Contabilidade e Auditoria",
      description:
        "Serviços contábeis completos e auditoria para manter sua empresa em conformidade.",
      features: [
        "Escrituração contábil",
        "Balanços e demonstrativos",
        "Auditoria interna",
        "Análise financeira",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Consultoria Fiscal",
      description:
        "Orientação especializada para otimização tributária e cumprimento das obrigações fiscais.",
      features: [
        "Planejamento tributário",
        "Revisão fiscal",
        "Recuperação de créditos",
        "Defesa fiscal",
      ],
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: "fas fa-chart-line",
      title: "Planejamento Financeiro e Orçamentário",
      description:
        "Estratégias financeiras para crescimento sustentável e controle orçamentário eficiente.",
      features: [
        "Análise de viabilidade",
        "Orçamento empresarial",
        "Fluxo de caixa",
        "Projeções financeiras",
      ],
      color: "from-rose-500 to-pink-500",
    },
  ];

  // Process Data
  const steps = [
    {
      number: "01",
      title: "Entre em contato",
      description: "Explique suas necessidades e tire todas as dúvidas conosco",
      icon: "fas fa-phone",
    },
    {
      number: "02",
      title: "Receba proposta",
      description: "Proposta personalizada e transparente para sua empresa",
      icon: "fas fa-file-contract",
    },
    {
      number: "03",
      title: "Assine e envie docs",
      description: "Processo 100% digital, rápido e seguro",
      icon: "fas fa-signature",
    },
    {
      number: "04",
      title: "Pronto!",
      description:
        "Cuidamos de toda a burocracia para você focar no seu negócio",
      icon: "fas fa-check-circle",
    },
  ];

  // Plans Data (Updated to single plan)
  const plans = [
    {
      name: "Plano Premium",
      price: "85,00",
      period: "/mês",
      priceAnual: "75,00",
      periodAnual: "/anual",
      description: "Plano Premium para suas necessidades específicas",
      features: [
        "Suporte dedicado",
        "Soluções sob medida",
        "Atendimento prioritário",
        "Documentação inclusa",
      ],
      highlighted: true,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Herbert de Souza Leão",
      role: "Empresário",
      text: "Excelente atendimento e com ótimas estratégias para solucionar seu problema.",
      rating: 5,
      avatar: "H",
    },
    {
      name: "José Angelino Marinho Neto",
      role: "Diretor Comercial",
      text: "Gratidão por poder contar com profissionais tão competentes e dedicados.",
      rating: 5,
      avatar: "J",
    },
    {
      name: "Kelven Rafael",
      role: "Empreendedor",
      text: "Atendimento excelente! Superou todas as minhas expectativas.",
      rating: 5,
      avatar: "K",
    },
    {
      name: "Emanuela Coelho",
      role: "Gestora",
      text: "Empresa de qualidade! Gosto do atendimento personalizado e rápido, me sinto satisfeita com o serviço assertivo.",
      rating: 5,
      avatar: "E",
    },
    {
      name: "Edson Carvalho",
      role: "Diretor",
      text: "Excelente resultado de trabalho. Profissionais muito competentes.",
      rating: 5,
      avatar: "E",
    },
    {
      name: "Samea Maia",
      role: "Empresária",
      text: "Eu adoro! Sempre muito prestativos e eu amo a agilidade no atendimento.",
      rating: 5,
      avatar: "S",
    },
  ];

  return (
    <>
      <Head>
        <title>
          WN Contabilidade - Especialistas em Endereço Fiscal e Certificados
          Digitais
        </title>
        <meta
          name="description"
          content="Descomplique sua vida empresarial com endereço fiscal confiável e certificados digitais. Especialistas em contabilidade empresarial."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                WN Contabilidade
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Serviços
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Sobre
              </Link>
              <Link
                href="#plans"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Planos
              </Link>
              <Link
                href="#testimonials"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Depoimentos
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contato
              </Link>
              <a
                href="https://wa.me/5585999999999"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Serviços
                </Link>
                <Link
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Sobre
                </Link>
                <Link
                  href="#plans"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Planos
                </Link>
                <Link
                  href="#testimonials"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Depoimentos
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  Contato
                </Link>
                <a
                  href="https://wa.me/5585999999999"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500">
            {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Descomplique sua vida empresarial
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Tenha um Endereço Fiscal confiável e evite dores de cabeça com
                burocracias,
                <span className="text-yellow-300 font-semibold">
                  {" "}
                  gastando muito menos!
                </span>
              </p>

              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Nós da WN Contabilidade, somos especialistas em Endereços
                Fiscais e Certificados Digitais, traga a sua empresa até nós que
                iremos resolver todas questões contábeis e burocracias para você
                com{" "}
                <strong className="text-yellow-300">
                  profissionalismo e qualidade!
                </strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#contact"
                  className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 min-w-[200px]"
                >
                  Solicitar Proposta
                </a>
                <a
                  href="https://wa.me/5585999999999"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 min-w-[200px]"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Falar no WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">
                    +10
                  </div>
                  <div className="text-sm opacity-90">Anos de Experiência</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">
                    100%
                  </div>
                  <div className="text-sm opacity-90">
                    Documentação Regularizada
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-yellow-300 mb-2">
                    24h
                  </div>
                  <div className="text-sm opacity-90">Atendimento Rápido</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Nossos Serviços
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Soluções completas para profissionalizar sua empresa e manter
                tudo em conformidade
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105">
                    Saiba Mais
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Por que escolher a WN Contabilidade?
                </h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-award text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Experiência Comprovada
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Nossos especialistas contábeis têm vasta experiência em
                        lidar com todos os aspectos, desde declarações fiscais
                        até estratégias para o crescimento empresarial.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-eye text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Transparência Total
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Valorizamos a transparência em tudo o que fazemos. Você
                        pode confiar em nós para fornecer informações precisas e
                        oportunas, mantendo você informado em cada etapa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user-tie text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Atendimento Personalizado
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Reconhecemos que cada empresa é única. Oferecemos
                        atendimento personalizado, trabalhando lado a lado para
                        entender suas metas e fornecer soluções sob medida.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-rocket text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        Tecnologia de Ponta
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Estamos na vanguarda da tecnologia contábil, utilizando
                        as mais recentes ferramentas e softwares para otimizar
                        processos e garantir máxima eficiência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-8 text-white">
                  <h4 className="text-2xl font-bold mb-6">Nossos Números</h4>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">
                        +10
                      </div>
                      <div className="text-sm opacity-90">Anos no Mercado</div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">
                        500+
                      </div>
                      <div className="text-sm opacity-90">
                        Empresas Atendidas
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">
                        100%
                      </div>
                      <div className="text-sm opacity-90">
                        Clientes Satisfeitos
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-yellow-300 mb-2">
                        24h
                      </div>
                      <div className="text-sm opacity-90">
                        Tempo de Resposta
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Photo Carousel */}
        <section id="photo-carousel" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Nossa Galeria
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Confira momentos e conquistas da WN Contabilidade
              </p>
            </div>
            <div className="relative flex justify-center">
              <div className="relative w-full max-w-3xl h-[calc(100vw*16/9)] sm:h-[864px]">
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentPhoto * 100}%)` }}
                  >
                    {photos.map((photo, index) => (
                      <div
                        key={index}
                        className="min-w-full flex-shrink-0 h-full"
                      >
                        <img
                          src={photo}
                          alt={`Galeria ${index + 1}`}
                          className="w-full h-full object-cover rounded-2xl"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() =>
                    setCurrentPhoto((prev) =>
                      prev === 0 ? photos.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentPhoto((prev) =>
                      prev === photos.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <div className="flex justify-center mt-4 space-x-2">
                  {photos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhoto(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentPhoto === index ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Carousel */}
        <section id="video-carousel" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Nossos Vídeos
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja nossos conteúdos exclusivos no formato Instagram
              </p>
            </div>
            <div className="relative flex justify-center">
              <div
                className="relative w-full max-w-md h-[calc(100vw*16/9)] sm:h-[672px]"
                style={{ aspectRatio: "9/16" }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentVideo * 100}%)` }}
                  >
                    {videos.map((video, index) => (
                      <div
                        key={index}
                        className="min-w-full flex-shrink-0 h-full"
                      >
                        <video
                          src={video}
                          controls
                          preload="auto"
                          playsInline
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() =>
                    setCurrentVideo((prev) =>
                      prev === 0 ? videos.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentVideo((prev) =>
                      prev === videos.length - 1 ? 0 : prev + 1
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white transition-all"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
                <div className="flex justify-center mt-4 space-x-2">
                  {videos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentVideo === index ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Como Funciona
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Processo simples e transparente para você profissionalizar sua
                empresa
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-6xl font-bold text-yellow-300 mb-4 opacity-80">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    <h4 className="text-2xl font-bold mb-4">{step.title}</h4>
                    <p className="opacity-90 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <svg
                        className="w-8 h-8 text-yellow-300 opacity-60"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section id="plans" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Nossos Planos
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Escolha o plano ideal para profissionalizar sua empresa
              </p>
            </div>
            <div className="grid md:grid-cols-1 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                    plan.highlighted
                      ? "border-blue-200 shadow-blue-100 ring-4 ring-blue-100"
                      : "border-gray-100"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Mais Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                    >
                      <i className="fas fa-star text-3xl text-white"></i>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">
                      {plan.name}
                    </h4>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex flex-col items-baseline justify-center mb-6">
                        <p className="text-black font-bold mb-2">Apartir de</p>

                      <div className="flex items-baseline mb-2">
                        <span className="text-5xl font-bold text-gray-800">
                          R$ {plan.price}
                        </span>
                        <span className="text-xl text-gray-500 ml-1">
                          {plan.period}
                        </span>
                      </div>
                      <div>
                        <span className="text-5xl font-bold text-gray-800">
                          R$ {plan.priceAnual}
                        </span>
                        <span className="text-xl text-gray-500 ml-1">
                          {plan.periodAnual}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg hover:shadow-xl"
                        : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                    }`}
                  >
                    Escolher Plano
                  </button>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Precisa de algo personalizado? Fale conosco!
              </p>
              <a
                href="https://wa.me/5585999999999"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <i className="fab fa-whatsapp mr-2 text-xl"></i>
                Solicitar Orçamento Personalizado
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Veja o que nossos clientes dizem
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A satisfação dos nossos clientes é nossa maior conquista
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-blue-100"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    {testimonial.text}
                  </blockquote>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">
                Junte-se a centenas de empresários satisfeitos!
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
              >
                <i className="fas fa-star mr-2"></i>
                Quero Ser o Próximo
              </a>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 bg-gradient-to-br from-blue-900 to-cyan-800 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                Entre em Contato
              </h3>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Não importa o tamanho ou complexidade do seu negócio, estamos
                aqui para ajudar. Entre em contato hoje mesmo!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h4 className="text-2xl font-bold mb-8">Fale Conosco</h4>
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="fab fa-whatsapp text-2xl text-green-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold">WhatsApp</h5>
                      <p className="opacity-90">(85) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-envelope text-2xl text-blue-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold">E-mail</h5>
                      <p className="opacity-90">contato@wncontabilidade.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <i className="fas fa-clock text-2xl text-yellow-400"></i>
                    </div>
                    <div>
                      <h5 className="font-semibold">Horário de Atendimento</h5>
                      <p className="opacity-90">Segunda à Sexta: 8h às 18h</p>
                      <p className="opacity-90">Sábado: 8h às 12h</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5585999999999"
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <i className="fab fa-whatsapp mr-2 text-xl"></i>
                    Conversar no WhatsApp
                  </a>
                  <a
                    href="mailto:contato@wncontabilidade.com"
                    className="block w-full bg-white/20 backdrop-blur-md text-white text-center py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    Enviar E-mail
                  </a>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h4 className="text-2xl font-bold mb-6">Solicitar Proposta</h4>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Telefone/WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="(85) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nome da Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                        placeholder="Sua empresa"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <option value="" className="text-gray-800">
                        Selecione um serviço
                      </option>
                      <option value="Endereço Fiscal" className="text-gray-800">
                        Endereço Fiscal
                      </option>
                      <option
                        value="Certificado Digital"
                        className="text-gray-800"
                      >
                        Certificado Digital
                      </option>
                      <option
                        value="Abertura de Empresa"
                        className="text-gray-800"
                      >
                        Abertura de Empresa
                      </option>
                      <option
                        value="Folha de Pagamento"
                        className="text-gray-800"
                      >
                        Folha de Pagamento
                      </option>
                      <option
                        value="Contabilidade e Auditoria"
                        className="text-gray-800"
                      >
                        Contabilidade e Auditoria
                      </option>
                      <option
                        value="Consultoria Fiscal"
                        className="text-gray-800"
                      >
                        Consultoria Fiscal
                      </option>
                      <option
                        value="Planejamento Financeiro e Orçamentário"
                        className="text-gray-800"
                      >
                        Planejamento Financeiro e Orçamentário
                      </option>
                      <option value="Outros" className="text-gray-800">
                        Outros
                      </option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                      placeholder="Conte-nos mais sobre suas necessidades..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-4 rounded-xl font-bold text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <i className="fab fa-whatsapp mr-2"></i>
                    Enviar via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-2 rounded-xl">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  WN Contabilidade
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Especialistas em Endereços Fiscais e Certificados Digitais.
                Profissionalize sua empresa com segurança e agilidade.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5585999999999"
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <i className="fab fa-whatsapp text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors"
                >
                  <i className="fab fa-facebook text-lg"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Nossos Serviços</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Endereço Fiscal
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Certificado Digital
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Abertura de Empresa
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Folha de Pagamento
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contabilidade e Auditoria
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Consultoria Fiscal
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Planejamento Financeiro
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Links Úteis</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#plans"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Planos
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 WN Contabilidade. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/5585999999999?text=Olá! Vim através do site e gostaria de mais informações sobre os serviços da WN Contabilidade."
            className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse hover:animate-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-8 h-8" fill="#25D366" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288" />
            </svg>
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Fale conosco no WhatsApp!
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </a>
        </div>
      )}
    </>
  );
}
