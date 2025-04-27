import { useDispatch, useSelector } from "react-redux"
import { CartAction } from "../store/CartSlice";

export function Cart() {
  const data = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  function IncreaseDecreaseHanlder(ele,action){
    if(action==="I"){
        dispatch(CartAction.addToCart(ele))

    }
    else{
        dispatch(CartAction.removeFromCart(ele))
    }


  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Cart</h2>
      <ul className="space-y-4">
        {data.map((ele) => (
          <li key={ele.id} className="flex items-center justify-between bg-white shadow-md rounded-lg p-4">
            <div>
              <p className="text-lg font-semibold">{ele.title}</p>
              <p className="text-gray-600">Quantity: {ele.quantity}</p>
              <p className="text-gray-800 font-bold">Total: ₹{ele.quantity * ele.price}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={()=>{IncreaseDecreaseHanlder(ele,"D")}}className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">-</button>
              <button onClick={()=>{IncreaseDecreaseHanlder(ele,"I")}} className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
