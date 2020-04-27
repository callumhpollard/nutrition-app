import React, { useState, useEffect, Fragment } from "react";
import "./styles.scss";
import { Redirect } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
function RecipeGraph(props) {
  const makeGraph = (nutData) => {
    let fat = nutData.hits[0].recipe.totalNutrients.FAT.quantity ? nutData.hits[0].recipe.totalNutrients.FAT.quantity : 0;
    let carbohydrates = nutData.hits[0].recipe.totalNutrients.CHOCDF.quantity ? nutData.hits[0].recipe.totalNutrients.CHOCDF.quantity : 0;
    let protein = nutData.hits[0].recipe.totalNutrients.PROCNT.quantity ? nutData.hits[0].recipe.totalNutrients.PROCNT.quantity : 0;
    let cholesterol = nutData.hits[0].recipe.totalNutrients.CHOLE.quantity ? nutData.hits[0].recipe.totalNutrients.CHOLE.quantity : 0;
    let sodium = nutData.hits[0].recipe.totalNutrients.NA.quantity ? nutData.hits[0].recipe.totalNutrients.NA.quantity : 0;
    let sugar = nutData.hits[0].recipe.totalNutrients.SUGAR.quantity ? nutData.hits[0].recipe.totalNutrients.SUGAR.quantity : 0;
    let fibre = nutData.hits[0].recipe.totalNutrients.FIBTG.quantity ? nutData.hits[0].recipe.totalNutrients.FIBTG.quantity : 0;
    const data = [
      {
        name: "Fat",
        "grams / serving": fat,
        fill: "#83a6ed",
      },
      {
        name: "Carbohydrates",
        "grams / serving": carbohydrates,
        fill: "#8dd1e1",
      },
      {
        name: "Protein",
        "grams / serving": protein,
        fill: "#82ca9d",
      },
      {
        name: "Sugar",
        "grams / serving": sugar,
        fill: "#ffc658",
      },
      {
        name: "Fibre",
        "grams / serving": fibre,
        fill: "#8C564B",
      },
    ];
    const data2 = [
      {
        name: "Cholesterol",
        "milligrams / serving": cholesterol,
        fill: "#a4de6c",
      },
      {
        name: "Sodium",
        "milligrams / serving": sodium,
        fill: "#d0ed57",
      },
    ];
    return (
      // responsive containers need a parent container to set dimensions
      <div class="ingredient-and-recipe-graph-container">
        {/* <ResponsiveContainer width="55%" height="100%"> */}
          <BarChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "grams / serving",
                dx: -20,
                angle: -90,
                position: 'center',
              }}
              type="number" />
            <Tooltip />
            <Bar dataKey="grams / serving" />
          </BarChart>
        {/* </ResponsiveContainer> */}
        {/* <ResponsiveContainer width="20%" height="100%"> */}
          <BarChart width={240} height={300} data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis
              label={{
                value: "milligrams / serving",
                dx: -30,
                angle: -90,
                position: 'center',
              }}
              type="number"
            />
            <Tooltip />
            <Bar dataKey="milligrams / serving" />
          </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
  };
  return <div>{props.foodIngredient && makeGraph(props.foodIngredient)}</div>;
}
export default RecipeGraph;
