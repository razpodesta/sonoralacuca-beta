/**
 * @fileoverview Página de biografía de Sonora La Cuca
 * @description Presenta la historia de la banda y sus miembros
 * @author Manus AI
 * @version 1.0.0
 */

import Image from "next/image";
import { siteConfig } from "@/config/site";
import PageTransition from "@/components/layout/PageTransition";

/**
 * Página de biografía de la banda
 * @returns La página de biografía renderizada
 */
export default function BiografiaPage() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-brand-dark text-white">
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center">
          <Image
            src="/images/band/band-group.jpg"
            alt="Sonora La Cuca - Foto grupal"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center">
            <h1 className="font-serif-brand text-5xl md:text-7xl mb-4">
              Nuestra Historia
            </h1>
            <p className="text-xl text-gray-300">
              La historia detrás de la música
            </p>
          </div>
        </section>

        {/* Historia de la Banda */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="font-serif-brand text-4xl mb-6 text-brand-accent">
                  Los Inicios
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sonora La Cuca nació en 2021 en el corazón de Santiago, Chile, 
                  cuando cuatro músicos apasionados decidieron unir sus talentos 
                  para crear algo único en la escena musical chilena.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Inspirados por los ritmos tradicionales de la cumbia y la música 
                  folclórica latinoamericana, pero con una visión moderna y fresca, 
                  la banda rápidamente se ganó el corazón del público con su energía 
                  contagiosa y su autenticidad.
                </p>
              </div>
              <div className="relative h-80">
                <Image
                  src="/images/band/musicians-playing.jpg"
                  alt="Sonora La Cuca tocando"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1 relative h-80">
                <Image
                  src="/images/hero-background.jpg"
                  alt="Concierto de Sonora La Cuca"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-serif-brand text-4xl mb-6 text-brand-accent">
                  El Crecimiento
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Desde sus primeras presentaciones en pequeños venues de Santiago, 
                  Sonora La Cuca ha crecido hasta convertirse en una de las bandas 
                  más queridas de la escena musical chilena.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Con tres álbumes en su haber y cientos de conciertos por todo Chile, 
                  la banda ha logrado crear una comunidad de fans que trasciende 
                  generaciones y fronteras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Miembros de la Banda */}
        <section className="bg-gray-900/50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="font-serif-brand text-5xl text-center mb-16 text-brand-accent">
              Los Miembros
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteConfig.bandMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-brand-accent/50 shadow-lg mb-4">
                    <Image
                      src={member.imageUrl}
                      alt={`Foto de ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-serif-brand text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-brand-accent">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filosofía Musical */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif-brand text-5xl mb-8 text-brand-accent">
              Nuestra Filosofía
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              &ldquo;La música es el lenguaje universal que une corazones y trasciende barreras. 
              En Sonora La Cuca creemos que cada canción debe contar una historia, 
              cada ritmo debe hacer vibrar el alma, y cada presentación debe ser 
              una celebración de la vida.&rdquo;
            </p>
            <p className="text-lg text-gray-400">
              - Sonora La Cuca
            </p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}

