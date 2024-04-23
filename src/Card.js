import { isVisible } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

function Card({ card, addToCart, cartList,IncreaseCart, DecreaseCart, cart}) {
        const [isVisible, setVisible] = useState(true);
 console.log(cart)
   

  return (
   
    <div class="col-lg-3 mb-3">
      <div class="card" style={{ width: "14rem" }}>
        <img
          className="card-img-top"
          src={card.pic}
          alt="..."
        />

        <div class="card-body p-4">
          <div class="text-center">
            <h5 class="fw-bolder">{card.productName}</h5>
            <div class="d-flex justify-content-center small text-warning mb-2">
              {card.reviews}
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
              <div class="bi-star-fill"></div>
            </div>
            {card.price}
          </div>
        </div>

        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div class="text-center">
      <button  class = "btn btn-primary"onClick={() => {
           setVisible(!isVisible);
        addToCart(card);
         isVisible? IncreaseCart(cart)  : DecreaseCart(cart)    

                      
                        }} >{isVisible? "Add to Cart": "Hide"}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;