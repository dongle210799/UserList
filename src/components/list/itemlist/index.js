import React, { useState } from "react";
import "./Item_list.css";
import { FcViewDetails } from "react-icons/fc";
import { Redirect } from "react-router-dom";
export default function ItemUser(props) {
  const [more, setMore] = useState(false);
  var { item, index } = props;
  const [redirect, setRedirect] = useState(false);
  const handleDetail = () => {
    setRedirect(true);
    localStorage.setItem("user", JSON.stringify(item));
  };
  if (redirect) {
    return <Redirect push to={`/detail/${item.login.uuid}`} />;
  }
  return (
    <li key={index}>
      <div className="item_user" style={{ display: "flex" }}>
        <img src={more ? item.picture.large : item.picture.medium}></img>
        <div className="item_user_content">
          <div className="item_user_name">
            {item.name.first} {item.name.last}
          </div>
          <div
            className="item_user_icon_loadmore"
            onClick={() => setMore(!more)}
          >
            <i class="fa fa-chevron-circle-down" aria-hidden="true"></i>
          </div>
          <div
            className="item_user_loadmore"
            style={{ display: more ? "block" : "none" }}
          >
            <div>gender: {item.gender}</div>
            <div>email: {item.email}</div>
            <div>
              address: {item.location.street.number}-{item.location.street.name}
              -{item.location.city}-{item.location.country}
            </div>
            <FcViewDetails onClick={handleDetail} />
          </div>
        </div>
      </div>
    </li>
  );
}
