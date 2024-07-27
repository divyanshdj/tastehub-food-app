import { useRef } from "react";
import "../css/CategoryAccordian.css";
import ItemsCategory from "./ItemsCategory";

const RestaurentCategory = ({ data, showItems, setShowIndex }) => {

  const headerRef = useRef(null);

  const handleClick = () => {
    setShowIndex();
    headerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="accordian">
      <div className="accordian-header" onClick={handleClick} ref={headerRef}>
        <span className="accordian-title">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="material-symbols-outlined">{showItems ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}</span>
      </div>
      <div className="accordian-items">
        {showItems && <ItemsCategory items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
