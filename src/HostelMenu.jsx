import React from "react";

const menuData = [
  {
    day: "Monday",
    breakfast: "Idly & Sambar",
    lunch: "Dal, Potato Fry, Rice",
    dinner: "Chicken Curry & Rice",
  },
  {
    day: "Tuesday",
    breakfast: "Poha & Banana",
    lunch: "Rajma, Roti, Rice",
    dinner: "Egg Curry & Rice",
  },
  {
    day: "Wednesday",
    breakfast: "Upma & Chutney",
    lunch: "Mixed Veg Curry, Rice",
    dinner: "Paneer Butter Masala",
  },
  {
    day: "Thursday",
    breakfast: "Dosa & Chutney",
    lunch: "Chole, Roti, Rice",
    dinner: "Fish Curry & Rice",
  },
  {
    day: "Friday",
    breakfast: "Paratha & Curd",
    lunch: "Aloo Gobi, Dal, Rice",
    dinner: "Chicken Biryani",
  },
  {
    day: "Saturday",
    breakfast: "Sandwich & Juice",
    lunch: "Veg Pulao & Raita",
    dinner: "Mutton Curry & Rice",
  },
  {
    day: "Sunday",
    breakfast: "Puri & Aloo",
    lunch: "Paneer Curry, Jeera Rice",
    dinner: "Special Chicken Fry",
  },
];

const HostelMenu = () => {
  return (
    <div className="container-fluid my-5">
      <h2 className="text-center mb-4">Weekly Hostel Menu</h2>
      <div className="table-responsive shadow-sm rounded">
        <table className="table table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th>Day</th>
              <th>Breakfast</th>
              <th>Lunch</th>
              <th>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {menuData.map((item, index) => (
              <tr key={index}>
                <td>{item.day}</td>
                <td>{item.breakfast}</td>
                <td>{item.lunch}</td>
                <td>{item.dinner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HostelMenu;
