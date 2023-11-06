import React, { useState } from "react";
import "./App.css"; // Import your CSS styles
import { products } from "./products";
import InventoryCards from "./InventoryCards";
import CartList from "./CartList";

function GroceryApp() {
  // store products in the cart
  const [cart, setShoppingCart] = useState([]);

  // Function to add a product in the cart
  const AddInCart = (product) => {
  // Create a new cart that displays the selected product
  const UpdatedCart = [...cart, product];
  // Update the old cart with the new cart
  setShoppingCart(UpdatedCart);
};


  // Function to remove a product from the cart
  const RemoveFromCart = (product) => {
    // Create a copy of the cart
    const UpdatedCart = [...cart];
  
    // Iterate through the cart to find and remove the specified product
    for (let i = 0; i < UpdatedCart.length; i++) {
      if (UpdatedCart[i].id === product.id && UpdatedCart[i].quantity === product.quantity) {
        // If a matching item is found, remove it and exit the loop
        UpdatedCart.splice(i, 1);
        break;
      }
    }
  
    // Update the cart with the modified cart
    setShoppingCart(UpdatedCart);
  };

 // Function to empty the cart list
const emptyCart = () => {
  // Set the shopping cart to an empty
  setShoppingCart([]);
};


  // Function to calculate the total amount of products in the cart
  const TotalAmount = () => {
    // Calculate the total price by summing the prices of all items in the cart
    return cart
      .reduce((total, item) => total + parseFloat(item.price.slice(1)), 0)
      .toFixed(2);
  };

 // Function to count the number of items in the list
  const CountCartitems = () => {
  // Initialize a variable to store the item count
  let itemCount = 0;

  // Loop through the cart to count the items
  for (const item of cart) {
    itemCount += 1;
  }

  // Return the total item count
  return itemCount;
};


  return (
    <div id="root">
      <h1> Your One-Stop Grocery Solution </h1>
      <div className="GroceriesApp-Container">
        <div className="Inventory-Container">
           {/* Render the inventory of products list and pass functions to add items to the cart */}
          <InventoryCards products={products} AddInCart={AddInCart} />
        </div>
        <div className="CartList-Container">
          {/* Render the cart with the ability to remove items, empty the cart, and calculate the total price */}
          <CartList
            cart={cart}
            RemoveFromCart={RemoveFromCart}
            emptyCart={emptyCart}
            TotalAmount={TotalAmount}
            CountCartitems={CountCartitems}
          />
        </div>
      </div>
    </div>
  );
}
export default GroceryApp;
