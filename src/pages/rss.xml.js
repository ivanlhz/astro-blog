import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
  return rss({
    title: "Frontend Creativo: Explorando el Mundo del Frontend",
    description:
      "Descubre consejos, tutoriales y actualizaciones sobre tecnologías web modernas para potenciar tus habilidades y mantenerte a la vanguardia en el fascinante mundo del desarrollo frontend.",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>es</language>`,
  });
}
