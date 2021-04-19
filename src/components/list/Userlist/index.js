import React, { useEffect, useState } from "react";
import ItemUser from "../itemlist/index";
import "./Userlist.css";
import { getlist } from "../../../service/userList.module";
export default function Userlist() {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = async () => {
    try {
      const res = await getlist();

      setListUser(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const showList = (listUser) => {
    var result = null;
    if (Array.isArray(listUser) && listUser.length > 0) {
      result = listUser.map((item, index) => {
        return <ItemUser key={index} item={item} />;
      });
    }
    return result;
  };
  return (
    <div>
      <ul>{showList(listUser)}</ul>
    </div>
  );
}
