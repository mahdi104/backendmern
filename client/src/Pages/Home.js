import { React, useEffect, useState } from "react";
import Contact from "../Components/Contact/Contact";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../JS/Action/Action";

const Home = () => {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.contactReducer.contactList);
  return (
    <div>
      {useEffect(() => {
        dispatch(get());
      }, [])}
      {result.map((el) => (
        <Contact el={el} />
      ))}
    </div>
  );
};

export default Home;
