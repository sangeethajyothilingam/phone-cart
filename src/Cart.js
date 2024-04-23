import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Cart({ cartList, removeCart , incQuantity, decQuantity}) {
  return (
    <ol class="list-group list-group-numbered">
      {cartList.map((item) => {
        return (
          <li class="list-group-item d-flex justify-content-between align-items-center">
            <div class="ms-2 me-auto">
              <div class="fw-bold">{item.productName}</div>
              {item.price} -{item.quantity}
              <button onClick={() => {incQuantity(item)}}>+</button>
              <button onClick={() => {decQuantity(item)}}>-</button>
            </div>
            <button
              onClick={() => removeCart(item)}
             
            >
          <FontAwesomeIcon icon={faTrash} color="red" />
            </button>
          </li>
        );
      })}
    </ol>
  );
}