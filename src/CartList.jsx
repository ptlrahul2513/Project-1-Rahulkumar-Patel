import React from "react";

function ShoppingCart({ cart, RemoveFromCart, TotalAmount, emptyCart, buy, CountCartitems }) {
  return (
    <div className="CartList-Container">
      <h2> Items in Your Cart </h2>
      {cart.length === 0 ? (
        // If the cart is empty then display the message
        <p>Your Cart Awaits...!</p>
      ) : (
        <div>
          {/* Display the number of items in the cart */}
          <p>Items in cart: {CountCartitems()} </p>
          {/* Iterate through each item added in the cart */}
          {cart.map((item) => (
            <div className="CartList-Card" key={item.id}>
              <h3>{item.productName}</h3>
              <p>{item.price}</p>
              <div className="CartList-Card-Info">
                {/* Button to remove the current item from the cart */}
                <button className="Remove-Button" onClick={() => RemoveFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          {/* Buttons which are at the bottom of the cart list */}
          <div className="CartList-Buttons">
            {/* Button to empty the whole cart */}
            <button className="Remove-Button" onClick={emptyCart}>
              Empty Cart
            </button>
            {/* Button to buy the cart-items and display the total price */}
            <button id="Buy-Button" onClick={buy}>
              Buy - Total: ${TotalAmount()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
