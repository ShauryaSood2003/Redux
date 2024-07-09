import { useDispatch, useSelector } from "react-redux"
import { getBalance, getNotification } from "./state/selectors"
import { addNotification, updateBalance } from "./state/actions/action";
function App() {

  const balance=useSelector(getBalance);
  const notification=useSelector(getNotification);

  const dispatch=useDispatch();

  return (
    <div className=" flex justify-around items-center h-screen">

      <div className=" space-y-4">
        <h1 className=" underline text-2xl font-semibold">Balance: {balance}</h1>
        <div className="flex justify-between">
          <button onClick={()=>{dispatch(updateBalance(100))}} className=" px-3 py-2 bg-cyan-400 rounded-md">+</button>
          <button onClick={()=>{dispatch(updateBalance(-100))}} className=" px-3 py-2 bg-cyan-400 rounded-md">-</button>
        </div>
      </div>

      <div className="space-y-4">

        <h1 className=" underline text-2xl font-semibold">Notification</h1>
        <div>
          {
            notification.map((item,index)=><p className=" my-2 font-bold" key={index}>. {item}</p>)  
          }
        </div>
        
        <button onClick={()=>{dispatch(addNotification("New Notify"))}} className=" px-3 py-2 bg-cyan-400 rounded-md">+</button>
          
       
      </div>

    </div>
  )
}

export default App
