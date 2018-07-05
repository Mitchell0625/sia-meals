import React, { Component } from "react";
import { connect } from "react-redux";
import Meals from "./Meals";
import "./MealPlan.css";
import Creates from "../Admin/Creates";
import { getMeals } from "../../ducks/reducer";

class MealPlan extends Component {
  componentDidMount() {
    this.props.getMeals();
  }
  render() {
    console.log(this.props);
    let food = this.props.meals
      .sort((a, b) => {
        return a.foodid - b.foodid;
      })
      .map((e, i) => {
        return (
          <Meals
            key={i}
            diet={e.diet}
            type={e.type}
            name={e.name}
            id={e.foodid}
          />
        );
      });
    return (
      <div className="mealplan-page">
        {this.props.user.admin ? (
          <Creates adminMeals={this.props.meals} />
        ) : (
          <div className="mealplan-container">{food}</div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}
export default connect(
  mapStateToProps,
  { getMeals }
)(MealPlan);
