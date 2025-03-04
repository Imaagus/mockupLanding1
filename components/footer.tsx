"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"



export function Footer() {
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
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  