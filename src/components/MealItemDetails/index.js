import "./index.css";

class MealItemDetails extends Component {
  state = { mealItemsDetails: {} };
  componentDidMount() {
    this.getTheMealItemDetails();
  }

  getTheMealItemDetails = async () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    const apiUrl = `www.themealdb.com/api/json/v1/1/lookup.php?i=52772${id}`;
    const options = {
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    this.setState({ mealItemsDetails: data });
  };
  render() {
    const { mealItemsDetails } = this.state;
    const { strMeal, strCategory, strInstructions } = mealItemsDetails;
    return (
      <li className="list-item">
        <h1>{strMeal}</h1>
        <P>{strCategory}</P>
        <p>{strInstructions}</p>
      </li>
    );
  }
}

export default MealItemDetails;
