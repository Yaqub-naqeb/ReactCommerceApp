import { Outlet } from "react-router-dom";
import '../App.css'

const IntialLayout = () => {
  return <div className=" ">{<Outlet />}</div>;
};

export default IntialLayout;
