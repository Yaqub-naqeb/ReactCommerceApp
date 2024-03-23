import { Outlet } from "react-router-dom";
import '../App.css'

const IntialLayout = () => {
  return <div className=" pt-[5rem]">{<Outlet />}</div>;
};

export default IntialLayout;
