import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemUser from "../itemlist/index";
import "./Userlist.css";
import { getListPending, getListUser } from "../../../actions/user";
export default function Userlist() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.task.listUser);
  console.log("users", users);
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    getListUser();

    dispatch(getListPending());
  }, []);
  const getListUser = async () => {
    try {
      setDataUser(users);
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
      <ul>{showList(dataUser)}</ul>
    </div>
  );
}
