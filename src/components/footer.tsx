import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-primary" />
              <span className="text-xl font-bold">CAEMP</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Especialistas en capacitación y entrenamiento en prevención de riesgos y seguridad laboral.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navegación</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-muted-foreground hover:text-primary transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Cursos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Riesgos Eléctricos
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Rescate en Altura
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Primeros Auxilios
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="text-muted-foreground hover:text-primary transition-colors">
                  Formación de Brigadas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>2 2667 6455</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+56 9 3247 8827</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@caemp.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CAEMP. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
