"use client";

import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  // Header State
  const [isOpen, setIsOpen] = useState(false)

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `🎯 NOVO LEAD DO SITE - CONSULTORIA GRATUITA
    
👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
🏢 *Empresa:* ${formData.company}
🎯 *Interesse:* ${formData.service}
💬 *Mensagem:* ${formData.message}

🚀 Cliente interessado em ACELERAR o crescimento do negócio!`

    const whatsappUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  // WhatsApp Button State
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Lead Generation Services
  const leadServices = [
    {
      icon: "fas fa-rocket",
      title: "Marketing Digital Contábil",
      description: "Estratégias personalizadas para posicionar seu escritório como referência no mercado digital.",
      features: ["Website otimizado", "SEO para contadores", "Gestão de redes sociais", "Campanhas no Google Ads"],
      color: "from-purple-500 to-pink-500",
      roi: "300% ROI"
    },
    {
      icon: "fas fa-magnet",
      title: "Geração de Leads Qualificados",
      description: "Sistema automatizado que atrai e converte prospects em clientes pagantes.",
      features: ["Landing pages otimizadas", "E-mail marketing", "Funis de conversão", "CRM integrado"],
      color: "from-blue-500 to-cyan-500",
      roi: "+50 leads/mês"
    },
    {
      icon: "fas fa-users",
      title: "Networking e Parcerias",
      description: "Conecte-se com outros profissionais e crie uma rede de indicações que gera negócios.",
      features: ["Eventos exclusivos", "Grupos de networking", "Parcerias estratégicas", "Programa de indicações"],
      color: "from-green-500 to-emerald-500",
      roi: "80% indicações"
    },
    {
      icon: "fas fa-chart-line",
      title: "Consultoria de Crescimento",
      description: "Análise completa do seu negócio e plano estratégico para escalar rapidamente.",
      features: ["Análise de mercado", "Definição de persona", "Precificação estratégica", "Plano de crescimento"],
      color: "from-orange-500 to-red-500",
      roi: "2x faturamento"
    },
    {
      icon: "fas fa-star",
      title: "Personal Branding",
      description: "Construa sua autoridade no mercado contábil e seja reconhecido como especialista.",
      features: ["Posicionamento pessoal", "Conteúdo estratégico", "Palestras e eventos", "Mídia especializada"],
      color: "from-indigo-500 to-purple-500",
      roi: "+200% visibilidade"
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Automação de Processos",
      description: "Tecnologia que automatiza captação, atendimento e conversão de clientes.",
      features: ["Chatbots inteligentes", "Agendamento online", "Follow-up automático", "Dashboard de métricas"],
      color: "from-emerald-500 to-teal-500",
      roi: "70% menos tempo"
    }
  ]

  // Success Stories
  const successStories = [
    {
      name: "Dr. Carlos Mendes",
      role: "Contador",
      company: "CM Contabilidade",
      result: "+150% clientes em 6 meses",
      revenue: "R$ 450k/mês",
      text: "Em 6 meses, triplicamos nossa carteira de clientes. O sistema de marketing digital da WN transformou nosso escritório!",
      avatar: "C",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Ana Paula Silva",
      role: "Empresária Contábil",
      company: "Silva & Associados",
      result: "De 20 para 200 clientes",
      revenue: "R$ 280k/mês",
      text: "O programa de networking me conectou com parceiros estratégicos. Hoje somos referência na região!",
      avatar: "A",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Roberto Alves",
      role: "Contador Digital",
      company: "RA Digital",
      result: "+300% leads qualificados",
      revenue: "R$ 380k/mês",
      text: "A automação mudou tudo! Agora captamos clientes 24/7 sem precisar estar presente.",
      avatar: "R",
      color: "from-purple-500 to-pink-500"
    }
  ]

  // Growth Steps
  const growthSteps = [
    {
      number: "01",
      title: "Diagnóstico GRATUITO",
      description: "Analisamos seu negócio atual e identificamos oportunidades de crescimento",
      icon: "fas fa-search",
      time: "30 min"
    },
    {
      number: "02",
      title: "Estratégia Personalizada",
      description: "Criamos um plano exclusivo baseado no perfil da sua empresa",
      icon: "fas fa-chess",
      time: "48h"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Colocamos as estratégias em prática com acompanhamento total",
      icon: "fas fa-cogs",
      time: "30 dias"
    },
    {
      number: "04",
      title: "Resultados",
      description: "Você vê seu negócio crescer com mais clientes e faturamento",
      icon: "fas fa-trophy",
      time: "Contínuo"
    }
  ]

  // Pricing Plans focused on growth
  const growthPlans = [
    {
      name: "Starter - Primeiros Passos",
      price: "497",
      period: "/mês",
      description: "Para contadores que querem começar a crescer",
      features: [
        "Website profissional otimizado",
        "Gestão de redes sociais",
        "5 leads qualificados/mês",
        "Consultoria mensal (2h)",
        "Suporte via WhatsApp",
        "Relatórios mensais"
      ],
      highlighted: false,
      color: "from-blue-500 to-cyan-500",
      badge: "Mais Popular"
    },
    {
      name: "Professional - Aceleração",
      price: "897",
      period: "/mês",
      description: "Para escritórios que querem crescer rapidamente",
      features: [
        "Tudo do plano Starter",
        "Google Ads gerenciado",
        "15+ leads qualificados/mês",
        "E-mail marketing automatizado",
        "Consultoria semanal (4h)",
        "Personal branding",
        "Treinamento da equipe"
      ],
      highlighted: true,
      color: "from-green-500 to-emerald-500",
      badge: "Recomendado"
    },
    {
      name: "Enterprise - Dominância",
      price: "1.497",
      period: "/mês",
      description: "Para se tornar líder do mercado",
      features: [
        "Tudo do plano Professional",
        "Automação completa",
        "30+ leads qualificados/mês",
        "Eventos e networking",
        "Consultoria VIP (8h)",
        "Equipe dedicada",
        "Garantia de resultados"
      ],
      highlighted: false,
      color: "from-purple-500 to-pink-500",
      badge: "Máximo ROI"
    }
  ]

  return (
    <>
      <Head>
        <title>WN Contabilidade - Multiplique Seus Clientes em 90 Dias</title>
        <meta name="description" content="Sistema completo para contadores conquistarem mais clientes através de marketing digital, networking e automação. Resultados garantidos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-2 rounded-xl">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
               WN CONTABILIDADE 
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Soluções
              </Link>
              <Link href="#results" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Resultados
              </Link>
              <Link href="#plans" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Planos
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Contato
              </Link>
              <a
                href="https://wa.me/5585999999999"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                Consultoria GRÁTIS
              </a>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-purple-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                <Link href="#services" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Soluções
                </Link>
                <Link href="#results" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Resultados
                </Link>
                <Link href="#plans" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Planos
                </Link>
                <Link href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
                  Contato
                </Link>
                <a
                  href="https://wa.me/5585999999999"
                  className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full hover:from-green-600 hover:to-green-700 transition-all duration-300 font-semibold shadow-lg text-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  Consultoria GRÁTIS
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-700 to-pink-600">
            {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFFFFF\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div> */}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <div className="max-w-5xl mx-auto">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-white/20">
                <i className="fas fa-fire text-orange-400 mr-2"></i>
                <span className="text-sm font-semibold">🔥 +500 Contadores Já Multiplicaram Seus Clientes</span>
              </div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight">
                MULTIPLIQUE
                <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
                  SEUS CLIENTES
                </span>
                <span className="block text-4xl md:text-6xl">em 90 dias</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
                Sistema completo de <strong className="text-yellow-300">Marketing Digital</strong> e 
                <strong className="text-yellow-300"> Geração de Leads</strong> para contadores que 
                querem <strong className="text-yellow-300">dominar</strong> seu mercado local
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">+300%</div>
                  <div className="text-sm opacity-90">Aumento Médio de Clientes</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">90 dias</div>
                  <div className="text-sm opacity-90">Para Ver Resultados</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-yellow-300 mb-2">R$ 500k+</div>
                  <div className="text-sm opacity-90">Faturamento Médio Alcançado</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="#contact"
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-10 py-5 rounded-full font-black text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 min-w-[280px] uppercase tracking-wider"
                >
                  🚀 CONSULTORIA GRATUITA
                </a>
                <a
                  href="https://wa.me/5585999999999"
                  className="bg-white/20 backdrop-blur-md text-white px-10 py-5 rounded-full font-bold text-xl hover:bg-white/30 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 min-w-[280px] border border-white/30"
                >
                  <i className="fab fa-whatsapp mr-2 text-green-400"></i>
                  QUERO MAIS CLIENTES
                </a>
              </div>

              <div className="flex flex-wrap justify-center items-center gap-8 opacity-80">
                <span className="text-sm">✅ Sem Taxa de Setup</span>
                <span className="text-sm">✅ Garantia de 60 dias</span>
                <span className="text-sm">✅ Resultados em 30 dias</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                SOLUÇÕES DE CRESCIMENTO
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Como Vamos Te Ajudar a
                <span className="block">CONQUISTAR MAIS CLIENTES</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Estratégias comprovadas que já transformaram centenas de escritórios contábeis em máquinas de captação
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-100 relative overflow-hidden"
                >
                  <div className="absolute top-4 right-4">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">
                      {service.roi}
                    </span>
                  </div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={`${service.icon} text-3xl text-white`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-2xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                    Quero Este Resultado
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                CASOS DE SUCESSO
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                Resultados REAIS de
                <span className="block">Clientes REAIS</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Veja como outros contadores transformaram seus negócios e multiplicaram seus resultados
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${story.color} rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white font-bold text-2xl mr-4">
                      {story.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{story.name}</h4>
                      <p className="text-white/80">{story.role}</p>
                      <p className="text-sm text-white/70">{story.company}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-black mb-2 text-yellow-300">{story.result}</div>
                    <div className="text-xl font-bold mb-4">{story.revenue}</div>
                  </div>
                  
                  <blockquote className="text-white/90 leading-relaxed italic">
                    "{story.text}"
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-gray-800 mb-6">
                Próximo caso de sucesso: <span className="text-purple-600">VOCÊ!</span>
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-500 text-white px-10 py-5 rounded-full font-bold text-xl hover:from-purple-700 hover:to-pink-600 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
              >
                <i className="fas fa-rocket mr-3"></i>
                QUERO MEU CASO DE SUCESSO
              </a>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                METODOLOGIA COMPROVADA
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Como Funciona Nossa
                <span className="block text-yellow-300">FÓRMULA DE CRESCIMENTO</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                4 passos simples para transformar seu escritório em uma máquina de captação de clientes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {growthSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-3 text-center">
                    <div className="text-8xl font-black text-yellow-300/20 mb-4">
                      {step.number}
                    </div>
                    
                    <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center mb-6 mx-auto">
                      <i className={`${step.icon} text-3xl text-white`}></i>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                    <p className="opacity-90 leading-relaxed mb-4">{step.description}</p>
                    
                    <div className="inline-flex items-center bg-yellow-400/20 px-4 py-2 rounded-full">
                      <i className="fas fa-clock mr-2 text-yellow-300"></i>
                      <span className="text-sm font-semibold text-yellow-300">{step.time}</span>
                    </div>
                  </div>
                  
                  {index < growthSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plans Section */}
        <section id="plans" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                INVESTIMENTO NO SEU CRESCIMENTO
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">
                Escolha Seu Plano de
                <span className="block">DOMINAÇÃO</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cada real investido retorna em múltiplos clientes. Escolha o plano ideal para seu crescimento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {growthPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${
                    plan.highlighted 
                      ? 'border-green-300 shadow-green-100 ring-4 ring-green-100' 
                      : 'border-gray-200'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        {plan.badge}
                      </span>
                    </div>
                  )}
                  
                  {!plan.highlighted && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gray-600 text-white px-6 py-2 rounded-full text-xs font-semibold">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className={`w-24 h-24 bg-gradient-to-r ${plan.color} rounded-3xl flex items-center justify-center mx-auto mb-6`}>
                      <i className="fas fa-chart-line text-4xl text-white"></i>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center mb-6">
                      <span className="text-6xl font-black text-gray-800">R$ {plan.price}</span>
                      <span className="text-2xl text-gray-500 ml-1">{plan.period}</span>
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-4 mb-6">
                      <p className="text-green-600 font-bold text-sm">
                        ROI Médio: <span className="text-green-700">300-500%</span> em 90 dias
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                          <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl'
                        : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                    }`}
                  >
                    COMEÇAR AGORA
                  </button>
                  
                  <div className="text-center mt-4">
                    <p className="text-xs text-gray-500">✅ Sem taxa de setup • ✅ Garantia de 60 dias</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  🎯 Oferta Especial: CONSULTORIA GRATUITA
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Antes de escolher seu plano, agende uma consultoria GRATUITA de 45 minutos onde iremos:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-8 text-left">
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className='text-black'>Analisar seu negócio atual</span>
                  </div>
                  <div className="flex items-center">f
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className='text-black'>Identificar oportunidades de crescimento</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className='text-black'>Criar estratégia personalizada</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-3"></i>
                    <span className='text-black'>Definir metas de crescimento</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-6 rounded-full font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                >
                  <i className="fas fa-calendar-alt mr-3"></i>
                  AGENDAR CONSULTORIA GRÁTIS
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                PRONTO PARA COMEÇAR?
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Vamos <span className="text-yellow-300">MULTIPLICAR</span>
                <span className="block">Seus Clientes Juntos!</span>
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Agende sua consultoria gratuita agora e descubra como aumentar seus clientes em 90 dias
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-bold mb-8">
                  <span className="text-yellow-300">📞</span> Entre em Contato
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                    <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                      <i className="fab fa-whatsapp text-3xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">WhatsApp Direto</h4>
                      <p className="opacity-90">Resposta em menos de 5 min</p>
                      <p className="text-green-400 font-bold">(85) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                    <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                      <i className="fas fa-envelope text-3xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">E-mail Executivo</h4>
                      <p className="opacity-90">Para propostas detalhadas</p>
                      <p className="text-blue-400 font-bold">growth@wncontabilidade.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                    <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center">
                      <i className="fas fa-calendar-alt text-3xl text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Consultoria Express</h4>
                      <p className="opacity-90">Diagnóstico em 30 minutos</p>
                      <p className="text-purple-400 font-bold">100% GRATUITO</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href="https://wa.me/5585999999999?text=🎯 Quero uma CONSULTORIA GRATUITA para MULTIPLICAR meus clientes! Quando podemos conversar?"
                    className="block w-full bg-gradient-to-r from-green-500 to-green-600 text-white text-center py-6 rounded-2xl font-bold text-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                  >
                    <i className="fab fa-whatsapp mr-3 text-2xl"></i>
                    CONSULTORIA GRÁTIS NO WHATSAPP
                  </a>
                  
                  <a
                    href="mailto:growth@wncontabilidade.com"
                    className="block w-full bg-white/10 backdrop-blur-md text-white text-center py-6 rounded-2xl font-bold text-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    <i className="fas fa-envelope mr-3"></i>
                    ENVIAR E-MAIL EXECUTIVO
                  </a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <h3 className="text-3xl font-bold mb-6">
                  <span className="text-yellow-300">🚀</span> Consultoria Gratuita
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-yellow-300">Nome Completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-yellow-300">WhatsApp *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="(85) 99999-9999"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-yellow-300">E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-3 text-yellow-300">Nome do Escritório</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                        placeholder="Seu escritório contábil"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-yellow-300">Seu Maior Desafio</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                    >
                      <option value="" className="text-gray-800">Escolha seu maior desafio</option>
                      <option value="Poucos clientes" className="text-gray-800">Tenho poucos clientes</option>
                      <option value="Dificuldade para captar" className="text-gray-800">Dificuldade para captar novos clientes</option>
                      <option value="Marketing não funciona" className="text-gray-800">Marketing não funciona</option>
                      <option value="Concorrência muito forte" className="text-gray-800">Concorrência muito forte</option>
                      <option value="Falta de posicionamento" className="text-gray-800">Falta de posicionamento no mercado</option>
                      <option value="Quero crescer rapidamente" className="text-gray-800">Quero crescer rapidamente</option>
                      <option value="Outros" className="text-gray-800">Outros desafios</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold mb-3 text-yellow-300">Conte-nos mais sobre sua situação</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                      placeholder="Ex: Tenho 15 clientes e quero chegar a 50 em 6 meses..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black py-6 rounded-2xl font-bold text-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl uppercase tracking-wider"
                  >
                    <i className="fas fa-rocket mr-3"></i>
                    AGENDAR CONSULTORIA GRÁTIS AGORA
                  </button>
                </form>
                
                <div className="text-center mt-6">
                  <p className="text-sm text-white/70">
                    ✅ Sem compromisso • ✅ 100% gratuito • ✅ Resultados garantidos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-3 rounded-2xl">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  WN CONTABILIDADE CONSULTORIA
                </h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-lg text-lg">
                Especializados em multiplicar clientes para contadores através de marketing digital, 
                automação e estratégias de crescimento acelerado.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://wa.me/5585999999999"
                  className="w-14 h-14 bg-green-600 rounded-2xl flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center hover:bg-purple-700 transition-colors"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="#"
                  className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-300">Soluções</h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Geração de Leads</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Networking</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Personal Branding</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Automação</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 text-yellow-300">Empresa</h4>
              <ul className="space-y-4">
                <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Casos de Sucesso</a></li>
                <li><a href="#plans" className="text-gray-400 hover:text-white transition-colors">Planos</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Consultoria Grátis</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 WN CONTABILIDADE . Transformando contadores em líderes de mercado.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Política de Privacidade</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/5585999999999?text=🎯 Quero uma CONSULTORIA GRATUITA para MULTIPLICAR meus clientes em 90 dias!"
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.288"/>
              </svg>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
            
            <div className="absolute right-full mr-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-6 py-4 rounded-2xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="font-bold mb-1">🎯 CONSULTORIA GRÁTIS!</div>
              <div>Multiplique seus clientes em 90 dias</div>
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-6 border-l-gray-900 border-t-6 border-t-transparent border-b-6 border-b-transparent"></div>
            </div>
          </a>
        </div>
      )}
    </>
  )
}