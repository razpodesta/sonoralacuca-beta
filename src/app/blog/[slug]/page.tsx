import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { blogData } from "@/config/blog";
import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

/**
 * Genera estáticamente las rutas para cada post del blog en el momento del build.
 * Esto mejora el rendimiento y el SEO al crear páginas HTML estáticas.
 * @returns Un array de objetos, donde cada objeto contiene el `slug` de un post.
 */
export async function generateStaticParams() {
  // Asegura que los datos estén disponibles para generar los slugs
  const posts = blogData;
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

/**
 * Obtiene los datos de una publicación específica de forma síncrona,
 * ya que se usa en un contexto de generación estática.
 * @param slug - El identificador URL de la publicación.
 * @returns Un objeto con la publicación actual, la anterior y la siguiente.
 */
function getPostData(slug: string) {
  const postIndex = blogData.findIndex((p) => p.slug === slug);
  if (postIndex === -1) {
    notFound(); // Lanza un error 404 si el post no se encuentra
  }
  const post = blogData[postIndex];
  const prevPost = postIndex > 0 ? blogData[postIndex - 1] : null;
  const nextPost =
    postIndex < blogData.length - 1 ? blogData[postIndex + 1] : null;
  return { post, prevPost, nextPost };
}

/**
 * Genera los metadatos dinámicos para el SEO de la página del post.
 * @param params - Los parámetros de la ruta, que contienen el slug.
 * @returns Una promesa que resuelve al objeto de metadatos.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { post } = getPostData(slug);
  return { title: post.title, description: post.excerpt };
}

/**
 * La página de detalle para una única publicación del blog.
 * Como usamos `generateStaticParams`, las props son síncronas.
 * @param params - Los parámetros de la ruta, que contienen el slug.
 * @returns El componente de la página de detalle del post.
 */
export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // SOLUCIÓN DEFINITIVA: `params` es un objeto síncrono, no una promesa,
  // porque `generateStaticParams` resuelve las rutas en el build.
  const { slug } = await params;
  const { post, prevPost, nextPost } = getPostData(slug);

  return (
    <article className="relative pt-32 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-serif-brand mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-gray-400">
              {post.publishDate} • por {post.author}
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-8">
            <Image
              src={post.coverImage}
              alt={`Portada de ${post.title}`}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="prose prose-invert prose-lg max-w-none prose-h2:font-serif-brand prose-h2:text-brand-accent prose-a:text-brand-accent hover:prose-a:text-red-400">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="text-left">
                <p className="text-sm text-gray-400">Anterior</p>
                <p className="font-bold hover:text-brand-accent transition-colors">
                  {prevPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="text-right">
                <p className="text-sm text-gray-400">Siguiente</p>
                <p className="font-bold hover:text-brand-accent transition-colors">
                  {nextPost.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

// ===============================================================================================
// MEJORAS FUTURAS:
// - Conectar `generateStaticParams` a un CMS para que las páginas se generen dinámicamente en el build.
// - Implementar Revalidación Incremental (ISR) para que el blog pueda actualizarse sin necesidad
//   de un nuevo despliegue completo.
// - Migrar el contenido de Markdown a MDX para permitir componentes interactivos dentro de los posts.
// ===============================================================================================
// Si lees este mensaje y tienes implementaciones futuras, en la próxima entrega de código
// de este aparato las realizaré junto con la tarea que esté en curso.
// ===============================================================================================


