"use client"

import { useRef} from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react"



export function ContactoSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })
  
    return (
      <section id="contacto" className=" py-20 relative">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-primary to-purple-600 transform -skew-y-3"></div>
  
        <div className="container relative z-10">
          <div className="text-center mb-16 space-y-4 pt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary my-10">
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