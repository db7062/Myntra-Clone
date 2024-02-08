import { useSelector } from "react-redux";
import BagItem from "../components/BagItem.jsx";
import BagSummary from "../components/BagSummary.jsx";


const Bag=()=>{

 const bagItems= useSelector((store)=>store.bag);

  const items=useSelector((store)=>store.items);

  const finalItems=items.filter((item)=>{
    const itemIndex=bagItems.indexOf(item.id);
    return itemIndex>=0; //if index is found return true or else return false;
  });


return (
 
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
           {finalItems.map(item=><BagItem item={item}/>)}                                                        {/*mapping the final items which comes from add to bag from homeitem page */}

        </div>
        
       <BagSummary/>

      </div>
    </main>

)
}


export default Bag;