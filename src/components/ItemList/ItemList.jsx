import { Link } from "react-router-dom";
import Item from "../Item/Item";

export const ItemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        <div className="item-list-grid">
        {list.map((prod) => (
          <Link to={`/detail/${prod.id}`} key={prod.id}>
            <Item {...prod} />
          </Link>
        ))}
        </div>
      ) : (
        <p className="item-list-empty">NO tenemos productos</p>
      )}
    </>
  );
};

