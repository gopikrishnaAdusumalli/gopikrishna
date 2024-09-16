import "./index.css";
import {Link} from 'react-dom'

const MealItem = (props) => {
  const { mealDetails } = props;
  const {  idCategory,strCategory, strCategoryThumb, strCategoryDescription } =
    mealDetails;

  return (
    <Link to = "/meals:${idCategory}">
    <li className="list-item">
      <h1 className = "heading">{strCategory}</h1>
      <img src = {strCategoryThumb} className = "meal-image" />
      <p className = "paragraph">{strCategoryDescription}</p>
    </li>
    </Link>
};
