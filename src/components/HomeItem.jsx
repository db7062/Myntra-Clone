import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/bagSlice"
import { IoMdRemoveCircle } from "react-icons/io";
import {GrAddCircle}    from 'react-icons/gr'


const HomeItem=({item})=>{
const bagItems=useSelector(store=>store.bag)
const dispatch=useDispatch()

const handleAddToBag=()=>{
dispatch(bagActions.addToBag(item.id));
}

const handleRemove=()=>{
    dispatch(bagActions.removeFromBag(item.id));
}


const elementFound=bagItems.indexOf(item.id)>=0;
return <>
<div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      
{elementFound ? 
<button type="button" 
className="btn  btn-add-bag btn-danger" onClick={handleRemove}> 
<IoMdRemoveCircle/>  Remove 
  </button> 
  :
   <button type="button" className="btn btn-add-bag  btn-success" onClick={handleAddToBag}> <GrAddCircle/>   Add To Bag</button>}
      

    </div>

</>
}

export default HomeItem