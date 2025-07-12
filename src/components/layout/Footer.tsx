/**
 * @fileoverview Componente Footer del sitio web de Sonora La Cuca
 * @description Proporciona enlaces de navegación, redes sociales e información de contacto
 * @author Manus AI
 * @version 1.0.0
 */

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InstagramIcon, FacebookIcon, TikTokIcon, YouTubeIcon } from "@/components/icons/SocialIcons";

/**
 * Componente Footer con información de contacto y enlaces
 * @returns  El componente Footer renderizado
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark border-t border-white/10 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo-sonora-la-cuca.png"
                alt="Sonora La Cuca Logo"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <h3 className="font-serif-brand text-2xl">Sonora La Cuca</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              La Reina de la Cumbia. Llevamos la alegría y el ritmo a cada rincón de Chile 
              con nuestra música auténtica y energía contagiosa.
            </p>
            
            {/* Redes Sociales */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="Síguenos en Instagram"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="Síguenos en Facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="Síguenos en TikTok"
              >
                <TikTokIcon className="w-6 h-6" />
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-accent transition-colors duration-200"
                aria-label="Síguenos en YouTube"
              >
                <YouTubeIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/biografia" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Biografía
                </Link>
              </li>
              <li>
                <Link href="/musica" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Música
                </Link>
              </li>
              <li>
                <Link href="/fechas" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Fechas
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <span className="block text-sm">Contrataciones:</span>
                <a 
                  href={`mailto:${siteConfig.contact.bookingEmail}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.contact.bookingEmail}
                </a>
              </li>
              <li>
                <span className="block text-sm">Prensa:</span>
                <a 
                  href={`mailto:${siteConfig.contact.pressEmail}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.contact.pressEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Sonora La Cuca. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

