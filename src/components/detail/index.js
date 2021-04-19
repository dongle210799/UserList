import React, { useState } from "react";

export default function Detail() {
  const detailUser = JSON.parse(localStorage.getItem("user"));
  console.log(detailUser);
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          padding: 50,
          color: "red",
          fontFamily: "sans-serif",
        }}
      >
        Detail User
      </h1>
      <div spacing={3} className="box-detail" style={{ textAlign: "center" }}>
        <div xs={6} className="image-detail">
          <img width={300} src={detailUser.picture.large} />
        </div>
        <div xs={6}>
          <p>Name : {detailUser.name.last}</p>
          <p>Age : {detailUser.dob.age}</p>
          <p>Gender : {detailUser.gender}</p>
          <p>Address : {detailUser.location.city} </p>
          <p>Email : {detailUser.email} </p>
          <p>Phone : {detailUser.phone} </p>
          <p>Cell : {detailUser.cell} </p>
        </div>
      </div>
    </div>
  );
}
