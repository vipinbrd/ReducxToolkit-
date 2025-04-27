import data from "./Product.json";
import { CartAction } from "../store/CartSlice";
import { useDispatch } from "react-redux";
export function Product() {

    const dispatch=useDispatch();
    function addToCartHandler(ele){
       
        dispatch(CartAction.addToCart(ele));


    }
  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((ele) => (
          <li key={ele.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold mb-2">{ele.title}</p>
            <p className="text-gray-700 mb-4">₹{ele.price}</p>
            <button onClick={()=>addToCartHandler(ele)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
