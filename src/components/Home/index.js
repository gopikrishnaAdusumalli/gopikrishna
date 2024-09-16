import "./index.css";

import { Component } from "react";

import Header from "../Header";

import MealItem from "./Component/MealItem";

class Home extends Component {
  state = { mealsList: [], searchInput: "" };

  onChageSearchResult = (event) => {
    this.setState({ searchInput: event.target.value });
  };

  componentDidMount() {
    this.getTheMealsList();
  }

  getTheMealsList = async () => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
    const options = {
      method: "GET",
    };

    const response = await fetch(apiUrl, options);
    const updatedData = await response.json();
    if (response.ok === true) {
      this.setState({ mealsList: updatedData });
    }
  };

  render() {
    const { mealsList, searchInput } = this.state;
    const filteredList = mealsList.filter((eachMeal) =>
      eachMeal.toLowerCase().inclues(searchInput.toLowerCase())
    );

    return (
      <div className="main-container">
        <Header />

        <h1 className="main-heading">Meals List </h1>
        <input
          type="search"
          className="search-button"
          placeholder="Serach"
          onChange={this.onChageSearchResult}
        />
        <ul className="un-ordered-list-container">
          {filteredList.map((eachMealList) => (
            <MealItem mealDetails={eachMealList} key={eachMealList.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Home;
