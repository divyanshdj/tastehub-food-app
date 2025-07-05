import { useDispatch, useSelector } from "react-redux";
import { addItems, increaseQuantity } from "../utils/cartSlice";
import { CDN2_URL } from "../utils/constant";
import { toast } from "react-toastify";

const ItemsCategory = ({ items }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items) || [];

  const handleAddItem = (item) => {
    if (item.card.info.inStock === 0) {
      toast.warn(`${item.card.info.name} is currently out of stock`, {
        autoClose: 1500,
        position: "bottom-right",
      });
      return;
    }

    const existingItem = cartItems.find(
      (cartItem) => cartItem.card.info.id === item.card.info.id
    );

    if (existingItem) {
      dispatch(increaseQuantity(item.card.info.id));
      toast.info(`${item.card.info.name} quantity increased!`, {
        autoClose: 1500,
        position: "bottom-right",
      });
    } else {
      dispatch(addItems({ ...item, quantity: 1 }));
      toast.success(`${item.card.info.name} added to cart!`, {
        autoClose: 1500,
        position: "bottom-right",
      });
    }
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="resMenuCard">
          <div className="resMenuCardDetails">
            <h4 className="nameItem">{item.card.info.name}</h4>
            <h5 className="priceItem">
              {item.card.info.finalPrice / 100 ||
                item.card.info.price / 100 ||
                item.card.info.defaultPrice / 100}
            </h5>
            <h6 className="descItem">
              {item.card.info.description
                ? item.card.info.description
                : item.card.info.category}
            </h6>
            <div className="menu-details-wrapper">
              {item.card.info.isVeg === 1 ? (
              <span className="dietary-indicator veg">VEG</span>
            ) : (
              <span className="dietary-indicator non-veg">NON VEG</span>
            )}
            {item?.card?.info?.ratings?.aggregatedRating?.rating > 0 && (
                <div className="item-rating">
                  <span className="rating-star">★</span>
                  <span>{item.card.info.ratings.aggregatedRating.rating}</span>
                  <span className="rating-count">
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2 || 0} ratings)
                  </span>
                </div>
              )}
              {item.card.info.inStock === 0 && (
                <p className="stock-status">Temporarily unavailable</p>
              )}
            </div>
          </div>
          <div className="resMenuCardImg">
                        {cartItems.some(cartItem => cartItem.card.info.id === item.card.info.id) && (
                <div className="cart-quantity">
                  {cartItems.find(cartItem => cartItem.card.info.id === item.card.info.id).quantity} in cart
                </div>
              )}
            <img
              src={
                item.card.info.imageId
                  ? CDN2_URL + item.card.info.imageId
                  : "https://placehold.co/600x600?text=No+Image"
              }
              alt={item.card.info.name}
              onError={(e) => {
                e.target.src = "https://placehold.co/600x600?text=No+Image";
              }}
            />
            <button
                className={`res-menu-btn ${item.card.info.inStock === 0 ? 'disabled' : ''}`}
                onClick={() => handleAddItem(item)}
                disabled={item.card.info.inStock === 0}
              >
                {item.card.info.inStock === 0 ? 'Unavailable' : 'Add +'}
              </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsCategory;
