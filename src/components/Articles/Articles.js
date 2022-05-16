import { Article } from "../Article/Article";

const articles = [
  {
    category: "Playstation",
    title: "GTA VI: Filtraciones que son bastante dudosas",
    description:
      "Recientemente se filtró en Internet una importante cantidad de supuesta información sobre Grand Theft Auto VI (GTA VI) que nos ofrece una muy buena idea de lo que podemos esperar.",
  },
  {
    category: "Switch",
    title: "Secuela de The Legend of Zelda: Breath of the Wild anunciada en el E3 2019",
    description:
      "Nintendo anunció la secuela de The Legend of Zelda: Breath of the Wild en el E3 2019 y todos estamos más que emocionados con esto.",
  },
  {
    category: "Xbox",
    title: "Red Dead Online recibe actualización masiva y sale de Beta",
    description:
      "Rockstar lanzó el día de hoy la actualización más grande de Red Dead Online desde que el componente online de Red Dead Redemption 2 se lanzó en noviembre.",
  },
];

export const Articles = () => (
  <aside className="articulos">
    {
        articles.map((article) => {
            return <Article key={article.category} category={article.category} title={article.title} description={article.description} />
        })
    }
  </aside>
);
