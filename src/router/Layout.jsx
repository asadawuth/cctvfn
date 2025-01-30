import { Outlet } from "react-router-dom";
import Header from "../layoutcomponent/HeaderFooter/Header";
import Footer from "../layoutcomponent/HeaderFooter/Footer";
import UserReQuest from "../layoutcomponent/UserReQuest";
import UserReportBell from "../layoutcomponent/UserReportBell";
import UserRequestCctv from "../layoutcomponent/UserRequestCctv";
import GoToSosFormMobile from "./../layoutcomponent/GoToSosFormMobile";

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
