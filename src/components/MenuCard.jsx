import { CDN2_URL } from "../utils/constant";

const MenuCard = (props) => {

    const {menuItemInfo} = props;

    const { name, finalPrice, price, defaultPrice, description, category, imageId} = menuItemInfo?.card?.info;

    return(
        <div className="resMenuCard">
            <div className="resMenuCardDetails">
                <h4 className="nameItem">{name}</h4>
                <h5 className="priceItem">₹{finalPrice/100 || price/100 || defaultPrice/100}</h5>
                <h6 className="descItem">{description ? description : category}</h6>
            </div>
            <div className="resMenuCardImg">
                <img src={CDN2_URL + imageId} alt={name} />
            </div>
        </div>
    )
}

export default MenuCard;