import { Outlet } from "react-router-dom";
import Header from "../layoutconponent/HeaderFooter/Header";
import Footer from "../layoutconponent/HeaderFooter/Footer";
import UserReQuest from "../layoutconponent/UserReQuest";
import UserReportBell from "../layoutconponent/UserReportBell";
import UserRequestCctv from "../layoutconponent/UserRequestCctv";
import GoToSosFormMobile from "./../layoutconponent/GoToSosFormMobile";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <UserReQuest />
      <UserReportBell />
      <UserRequestCctv />
      <GoToSosFormMobile />
    </>
  );
}
