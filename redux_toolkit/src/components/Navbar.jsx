import { useDispatch } from "react-redux";
import { UIAction } from "../store/UISlice";
export function NavBar() {

    const dispatch=useDispatch();

function toggleHandler(){
    dispatch(UIAction.toggle())

    
}

    return (
      <div className="flex items-center justify-between p-4 bg-blue-500 text-white shadow-md">
        <h1 className="text-2xl font-bold">My Shop</h1>
        
        <button onClick={toggleHandler} className="relative bg-white text-blue-500 font-semibold px-4 py-2 rounded hover:bg-gray-100 transition">
          Cart
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            5
          </span>
        </button>
      </div>
    );
  }
  