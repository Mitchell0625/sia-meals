import React, { Component } from "react";
import Meals from "./Meals";
import "./MealPlan.css";
class MealPlan extends Component {
  render() {
    // const mappedMeals = this.props.meals((e, i) => {
    //   return (
    //     <Meals breakfast={e.breakfast} lunch={e.lunch} dinner={e.dinner} />
    //   );
    // });
    return (
      <div className="mealplan-page">
        {/* {admin && <button>Update Menu</button>} if admin */}
        {/* <div className="mealplan-container">{mappedMeals}</div> */}
      </div>
    );
  }
}
export default MealPlan;
