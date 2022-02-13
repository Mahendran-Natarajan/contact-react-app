import React from "react";

var foodPeriod = ""; 
var dateHrs = new Date().getHours(); 
console.log(dateHrs);

if (dateHrs <12) foodPeriod = "Break fast";
else if (dateHrs > 12 && dateHrs < 16) foodPeriod = "Lunch"; 
else if (dateHrs>19) foodPeriod ="Dinner"; 

const food = "My Favorite food Items for ";

function Heading() {
  return <h1>{food} {foodPeriod}</h1>
}

export default Heading;