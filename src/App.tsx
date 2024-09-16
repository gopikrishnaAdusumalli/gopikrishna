import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";

import MealItem from "./components/MealItemDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" componenet={Home} />
        <Route exact path="/meals/:id" component={MealItemDetails} />
      </Routes>
    </BrowserRouter>
  );
}
