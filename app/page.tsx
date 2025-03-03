"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronRight,
  Mail,
  MapPin,
  Phone,
  Menu,
  X,
  ArrowRight,
  Check,
  Star,
  ArrowUpRight,
  Play,
  MousePointer,
  Sparkles,
} from "lucide-react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <header className="fixed top-0 z-40 w-full backdrop-blur-md bg-background/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
              <span className="text-xs text-white font-bold">TM</span>
            </div>
            <span className="text-xl font-bold">Tu Marca</span>
          </div>

          <nav className="hidden md:flex gap-6">
            <Link href="#inicio" className="text-sm font-medium hover:text-primary relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-primary relative group">
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#sobre-nosotros" className="text-sm font-medium hover:text-primary relative group">
              Sobre Nosotros
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#galeria" className="text-sm font-medium hover:text-primary relative group">
              Galería
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-primary relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button className="rounded-full px-6 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 hover:from-primary hover:to-purple-700">
              Contáctanos
            </Button>
          </div>

          <button className="flex md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="container md:hidden overflow-hidden"
            >
              <nav className="flex flex-col gap-4 py-6">
                <Link
                  href="#inicio"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  href="#servicios"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  href="#sobre-nosotros"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="#galeria"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Galería
                </Link>
                <Link
                  href="#contacto"
                  className="text-sm font-medium hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
                <Button
                  className="w-full mt-2 rounded-full bg-gradient-to-r from-primary to-purple-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contáctanos
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16">
        <HeroSection />
        <ServiciosSection />
        <SobreNosotrosSection />
        <TestimonialsSection activeTestimonial={activeTestimonial} setActiveTestimonial={setActiveTestimonial} />
        <GaleriaSection />
        <CtaSection />
        <ContactoSection />
      </main>

      <Footer />

      {/* Floating elements */}
      <div
        className="fixed w-64 h-64 rounded-full bg-primary/10 blur-3xl -z-10"
        style={{
          top: `${Math.sin(scrollY * 0.001) * 30 + 50}%`,
          left: `${Math.cos(scrollY * 0.001) * 30 + 20}%`,
        }}
      ></div>
      <div
        className="fixed w-96 h-96 rounded-full bg-purple-500/10 blur-3xl -z-10"
        style={{
          top: `${Math.cos(scrollY * 0.002) * 40 + 30}%`,
          right: `${Math.sin(scrollY * 0.002) * 30 + 10}%`,
        }}
      ></div>
    </div>
  )
}

function HeroSection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, -150])
  const y2 = useTransform(scrollY, [0, 500], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-purple-500/5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Tu Eslogan Va Aquí</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">Tu Título Principal Va Aquí</h1>
            <p className="text-xl text-muted-foreground max-w-lg">
              Tu descripción va aquí. Explica brevemente qué hace tu empresa y qué la hace especial.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90"
              >
                Comenzar Ahora
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary text-primary hover:bg-primary/5"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver Demo
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-muted border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs text-muted-foreground">U{i}</span>
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-bold">Tu número de clientes aquí</span>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[500px] lg:h-[700px]">
            <motion.div
              className="absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary to-purple-600 shadow-xl"
              style={{ y: y1 }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="absolute inset-1 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold">Imagen 1</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-1/3 left-0 w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-white shadow-xl border"
              style={{ y: y2 }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="absolute inset-0 rounded-xl bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-bold">Imagen 2</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-1/4 w-48 h-48 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-xl"
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="absolute inset-1 rounded-xl bg-white/5 backdrop-blur-sm flex items-center justify-center">
                <span className="text-white font-bold">Imagen 3</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity }}
      >
        <span className="text-sm text-muted-foreground">Desplaza hacia abajo</span>
        <MousePointer className="h-5 w-5 text-muted-foreground animate-bounce" />
      </motion.div>

      {/* Diagonal divider */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-background transform -skew-y-2"></div>
    </section>
  )
}

function ServiciosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const servicios = [
    {
      titulo: "Nombre de Tu Servicio",
      descripcion: "Descripción de tu servicio. Explica los beneficios principales que ofreces a tus clientes.",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-primary to-blue-600",
    },
    {
      titulo: "Nombre de Tu Servicio",
      descripcion: "Descripción de tu servicio. Explica los beneficios principales que ofreces a tus clientes.",
      icon: <ArrowUpRight className="h-6 w-6" />,
      color: "from-purple-600 to-pink-600",
    },
    {
      titulo: "Nombre de Tu Servicio",
      descripcion: "Descripción de tu servicio. Explica los beneficios principales que ofreces a tus clientes.",
      icon: <ChevronRight className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      titulo: "Nombre de Tu Servicio",
      descripcion: "Descripción de tu servicio. Explica los beneficios principales que ofreces a tus clientes.",
      icon: <Check className="h-6 w-6" />,
      color: "from-green-500 to-emerald-600",
    },
    {
      titulo: "Nombre de Tu Servicio",
      descripcion: "Descripción de tu servicio. Explica los beneficios principales que ofreces a tus clientes.",
      icon: <ArrowRight className="h-6 w-6" />,
      color: "from-yellow-400 to-amber-600",
    },
    {
      titulo: "Nombre de Tu Servicio",
      descripcion: "Descripción de tu servicio. Explica los beneficios principales que ofreces a tus clientes.",
      icon: <Star className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500",
    },
  ]

  return (
    <section id="servicios" className="py-20 relative">
      <div className="container relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span>Nuestros Servicios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Soluciones a medida para tu negocio</h2>
          <p className="text-xl text-muted-foreground">
            Ofrecemos servicios integrales diseñados para impulsar tu presencia digital y potenciar tu crecimiento.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicios.map((servicio, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative overflow-hidden rounded-2xl bg-background border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${servicio.color} flex items-center justify-center text-white mb-6`}
                >
                  {servicio.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {servicio.titulo}
                </h3>
                <p className="text-muted-foreground mb-6">{servicio.descripcion}</p>
                <Button variant="ghost" className="p-0 group-hover:text-primary transition-colors">
                  Saber más <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div
                className={`absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r ${servicio.color} transition-all duration-300 group-hover:w-full`}
              ></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SobreNosotrosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const stats = [
    { value: "98%", label: "Satisfacción" },
    { value: "10+", label: "Años" },
    { value: "250+", label: "Proyectos" },
    { value: "24/7", label: "Soporte" },
  ]

  return (
    <section id="sobre-nosotros" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-muted transform skew-y-2"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-muted transform -skew-y-2"></div>

      <div className="container relative z-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-primary/10 rounded-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-purple-500/10 rounded-2xl"></div>
              <div className="relative h-[400px] rounded-2xl bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Imagen Sobre Nosotros</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 md:bottom-16 md:right-16 w-64 p-6 bg-background rounded-2xl shadow-lg border">
              <div className="flex flex-wrap gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex-1 min-w-[80px]">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <span>Sobre Nosotros</span>
            </div>
            <h2 className="text-4xl font-bold">Tu Historia Va Aquí</h2>
            <p className="text-muted-foreground">
              Aquí va la descripción de tu empresa. Explica cuándo se fundó, por qué existe y qué la hace única.
              Comparte tu misión y valores principales.
            </p>
            <p className="text-muted-foreground">
              Tu segundo párrafo va aquí. Describe los logros más importantes de tu empresa y por qué los clientes
              deberían elegirte.
            </p>

            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Enfoque centrado en resultados</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Tecnología de vanguardia</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span>Equipo altamente cualificado</span>
              </div>
            </div>

            <Button className="rounded-full px-8 bg-gradient-to-r from-primary to-purple-600 mt-4">
              Conoce al Equipo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection({ activeTestimonial, setActiveTestimonial }) {
  const testimonials = [
    {
      text: "Tu testimonio va aquí. Incluye comentarios reales de clientes satisfechos.",
      author: "Nombre del Cliente",
      position: "Cargo, Empresa",
    },
    {
      text: "Tu testimonio va aquí. Incluye comentarios reales de clientes satisfechos.",
      author: "Nombre del Cliente",
      position: "Cargo, Empresa",
    },
    {
      text: "Tu testimonio va aquí. Incluye comentarios reales de clientes satisfechos.",
      author: "Nombre del Cliente",
      position: "Cargo, Empresa",
    },
  ]

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-purple-500/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-background transform -skew-y-2"></div>

      <div ref={ref} className="container relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Star className="h-4 w-4" />
            <span>Testimonios</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Lo que dicen nuestros clientes</h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 md:p-12 shadow-lg border relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 mb-6 flex items-center justify-center">
                  <span className="text-primary font-bold">{testimonials[activeTestimonial].author.charAt(0)}</span>
                </div>
                <p className="text-xl md:text-2xl italic mb-8">"{testimonials[activeTestimonial].text}"</p>
                <h4 className="font-bold text-lg">{testimonials[activeTestimonial].author}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].position}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeTestimonial === index ? "bg-primary w-6" : "bg-primary/30"
                }`}
                aria-label={`Ver testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GaleriaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  // Tamaños variados para las imágenes
  const imageSizes = [
    "row-span-1 col-span-1",
    "row-span-2 col-span-1",
    "row-span-1 col-span-2",
    "row-span-1 col-span-1",
    "row-span-1 col-span-1",
    "row-span-2 col-span-1",
  ]

  return (
    <section id="galeria" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-xl mx-auto text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span>Nuestra Galería</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Proyectos destacados</h2>
          <p className="text-xl text-muted-foreground">
            Explora nuestra colección de trabajos recientes. Cada proyecto refleja nuestra pasión por la excelencia y la
            innovación.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[250px] gap-4"
        >
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <motion.div
                key={index}
                variants={item}
                className={`relative rounded-xl overflow-hidden group ${imageSizes[index]}`}
              >
                <div className="absolute inset-0 bg-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Proyecto {index + 1}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-white font-bold text-xl">Nombre del Proyecto</h3>
                  <p className="text-white/80 text-sm">Categoría del Proyecto</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 text-white border-white hover:bg-white/20 hover:text-white w-fit"
                  >
                    Ver Detalles
                  </Button>
                </div>
              </motion.div>
            ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            Ver Todos los Proyectos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 transform skew-y-3"></div>

      <div ref={ref} className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Comienza hoy mismo y lleva tu presencia digital al siguiente nivel. Nuestro equipo está listo para ayudarte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full px-8 bg-white text-primary hover:bg-white/90">
              Comenzar Ahora
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white/20">
              Agendar una Llamada
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ContactoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="contacto" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary to-purple-600 transform -skew-y-3"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4 pt-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <span>Contáctanos</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Hablemos de tu proyecto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte a iniciar tu próximo proyecto digital.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-background rounded-2xl p-6 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Dirección</h3>
                  <p className="text-muted-foreground">Calle Principal 123, Madrid, España, 28001</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-muted-foreground">info@tuempresa.com</p>
                  <p className="text-muted-foreground">soporte@tuempresa.com</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl p-6 shadow-sm border">
              <div className="flex items-start space-x-4">
                <div className="mt-1 bg-primary/10 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">Teléfono</h3>
                  <p className="text-muted-foreground">+34 123 456 789</p>
                  <p className="text-muted-foreground">+34 987 654 321</p>
                </div>
              </div>
            </div>

            <div className="relative h-[250px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <span className="text-muted-foreground">Mapa de Ubicación</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 bg-background p-8 rounded-2xl border shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="nombre" className="text-sm font-medium">
                    Nombre
                  </label>
                  <Input id="nombre" placeholder="Tu nombre" className="rounded-lg" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" className="rounded-lg" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="asunto" className="text-sm font-medium">
                  Asunto
                </label>
                <Input id="asunto" placeholder="Asunto de tu mensaje" className="rounded-lg" />
              </div>

              <div className="space-y-2">
                <label htmlFor="mensaje" className="text-sm font-medium">
                  Mensaje
                </label>
                <Textarea id="mensaje" placeholder="Tu mensaje aquí..." className="min-h-[150px] rounded-lg" />
              </div>

              <Button type="submit" className="w-full rounded-lg bg-gradient-to-r from-primary to-purple-600">
                Enviar Mensaje
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="pt-20 pb-10 bg-muted/30 relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <span className="text-xs text-white font-bold">TM</span>
              </div>
              <span className="text-xl font-bold">Tu Marca</span>
            </div>
            <p className="text-muted-foreground">
              Tu descripción de empresa va aquí. Resume tu misión y valores en pocas palabras.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border hover:bg-primary/10 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border hover:bg-primary/10 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border hover:bg-primary/10 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center border hover:bg-primary/10 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#sobre-nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galería
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Diseño Web
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Desarrollo de Apps
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketing Digital
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  E-Commerce
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Boletín</h3>
            <p className="text-muted-foreground mb-4">
              Suscríbete para recibir las últimas noticias y actualizaciones.
            </p>
            <form className="space-y-3">
              <Input placeholder="Tu email" type="email" className="rounded-full" />
              <Button className="w-full rounded-full bg-gradient-to-r from-primary to-purple-600">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Desarrollado por GretSoft
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

