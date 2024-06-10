import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

function App(){
    return <div className="container">
        <Header/>
        <Menu/>
        <Footer/>
    </div>;
}

function Header(){
  //const style = {color : "red", fontSize:"48px", textTransform:"uppercase"}
  const style = {}
  return <header className="header">
    <h1 style={style}>Fast React Pizza Co.</h1>
  </header> 
}

function Menu(){
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
  <main className="menu">
    <h2>Our Menu</h2>
    {numPizzas > 0 ? (
    <React.Fragment>
      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {pizzaData.map(pizza => (
        <Pizza pizzaob = {pizza} key = {pizza.name}/>
      ))}
      </ul> 
    </React.Fragment>
    ): ( <p>We're still working on our menu. Please come back later</p>)}
  
  </main>
  )
}

function Pizza({pizzaob}){
  console.log();

  return <li className={`pizza ${pizzaob.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaob.photoName} alt = {pizzaob.name}/>
      <div>
      <h2>{pizzaob.name}</h2>
      <p>{pizzaob.ingredients}</p>
      {/* {pizzaob.soldOut ? (
        <span>SOLD OUT</span>
      ) : (
        <span>{pizzaob.price}</span>
      )} */}
        <span>{pizzaob.soldOut ? "SOLD OUT" : pizzaob.price}</span>
      </div>
  </li>
}

function Footer(){
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 22;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  // if(hour >= openHours && hour <= closeHours) alert("We're currently open!!");
  // else alert("Sorry we're closed");
  return <footer className="footer">{isOpen ? 
  <Order closeHours = {closeHours}/> : (
    <p>
      We're happy to welcome you between {openHours}:00 and {closeHours}:00
    </p>
  )
  }
  </footer>;
};

function Order(props){
  return (
      <div className="order">
        <p>We're open until {props.closeHours}:00. Come visit or order online</p>
        <button className="btn">Order</button>
      </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App/>
</React.StrictMode>);