import propTypes from "prop-types";

export const Article = ({ category, title, description }) => (
  <div className="articulo">
    <span className="articulo__categoria">{category}</span>
    <h2 className="articulo__titulo">{title}</h2>
    <p className="articulo__descripcion">{description}</p>
  </div>
);

Article.propTypes = {
  category: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
};
