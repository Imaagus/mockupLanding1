"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  ChevronRight,
  ArrowRight,
  Check,
  Star,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"

export function ServiciosSection() {
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
  