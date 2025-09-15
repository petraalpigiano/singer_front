// HEADER , FOOTER E OUTLET
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
export default function DefaultLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
