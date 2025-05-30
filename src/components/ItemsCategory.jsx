import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN2_URL } from "../utils/constant";
import { toast } from "react-toastify"; // ✅ import toast

const ItemsCategory = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));

    // ✅ Show toast message
    toast.success(`${item.card.info.name} added to cart!`, { autoClose: 1500 });
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="resMenuCard">
          <div className="resMenuCardDetails">
            <h4 className="nameItem">{item.card.info.name}</h4>
            <h5 className="priceItem">
              ₹
              {item.card.info.finalPrice / 100 ||
                item.card.info.price / 100 ||
                item.card.info.defaultPrice / 100}
            </h5>
            <h6 className="descItem">
              {item.card.info.description
                ? item.card.info.description
                : item.card.info.category}
            </h6>
          </div>
          <div className="resMenuCardImg">
            <img
              src={CDN2_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button
              className="res-menu-btn"
              onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsCategory;
