import { useLocation, Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import header from "../../assets/forheaderandfooter/header.png";
import headerWebp from "../../assets/forheaderandfooter/headerwebp.webp";
import ForUser from "../ForUser";
import ForLogout from "../ForLogout";

export default function Header() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/vision" &&
        location.pathname !== "/report-request" &&
        location.pathname !== "/pageaction-datareceived" && (
          <>
            <ForUser />
            <ForLogout />
          </>
        )}

      <div className="tw-w-full">
        <picture className="tw-w-full">
          <source srcSet={headerWebp} type="image/webp" className="tw-w-full" />
          <img
            src={header}
            alt="Contact Us"
            loading="lazy"
            className="tw-w-full tw-h-64 tw-object-fill"
          />
        </picture>
      </div>
      <header className="tw-w-full">
        <div className="tw-flex tw-flex-col md:tw-flex md:tw-flex-col lg:tw-flex lg:tw-flex-row lg:tw-gap-1 tw-justify-center tw-text-base tw-py-2">
          <a
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/vision"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            href="/vision"
          >
            เกี่ยวกับ
          </a>
          <div
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white ${
              location.pathname === "/deleteidemployee" ||
              location.pathname === "/createidemployee" ||
              location.pathname === "/listdataemployee" ||
              location.pathname === "/listdatapopulation" ||
              location.pathname === "/listdataemployresign" ||
              location.pathname === "/deleteidpopulation" ||
              location.pathname === "/listdatapopulationblock" ||
              location.pathname === "/yourprofile" ||
              location.pathname === "/yourprofile/changeemail" ||
              location.pathname === "/yourprofile/changepassword"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
          >
            <Menu>
              <MenuHandler className="tw-flex tw-items-center tw-justify-start">
                <Button
                  className={`tw-bg-transparent hover:tw-bg-blue-900 hover:tw-text-white${
                    location.pathname === "/deleteidemployee" ||
                    location.pathname === "/createidemployee"
                      ? "tw-bg-blue-900 tw-!text-white"
                      : "tw-text-black"
                  }`}
                >
                  ข้อมูลผู้ใช้ระบบ
                </Button>
              </MenuHandler>
              <MenuList className="tw-bg-slate-400 tw-mt-2 tw-shadow-lg tw-w-64">
                <Link to="/createidemployee">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/createidemployee"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    สมัครไอดีพนักงาน
                  </MenuItem>
                </Link>
                <Link to="/deleteidemployee">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/deleteidemployee"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    ลบไอดีพนักงานที่พ้นสภาพ
                  </MenuItem>
                </Link>
                <Link to="/deleteidpopulation">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/deleteidpopulation"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    ลบไอดีประชาชน
                  </MenuItem>
                </Link>
                <Link to="/listdataemployee">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/listdataemployee"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายชื่อข้อมูลพนักงาน
                  </MenuItem>
                </Link>
                <Link to="listdatapopulation">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/listdatapopulation"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายชื่อข้อมูลประชาชน
                  </MenuItem>
                </Link>
                <Link to="listdataemployresign">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/listdataemployresign"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายชื่อข้อมูลพนักงานที่ลาออก
                  </MenuItem>
                </Link>
                <Link to="listdatapopulationblock">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/listdatapopulationblock"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายชื่อข้อมูลประชาชนสถานะบล๊อค
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
          <a
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2  hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/manual"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            href="/manual"
          >
            คู่มือการใช้เว็ป
          </a>
          <div
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white ${
              location.pathname === "/userReport" ||
              location.pathname === "/report-request" ||
              location.pathname === "/userrequest-forwatchcctv" ||
              location.pathname === "/sosformmobile"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
          >
            <Menu>
              <MenuHandler className="tw-flex tw-items-center tw-justify-start">
                <Button
                  className={`tw-bg-transparent hover:tw-bg-blue-900 hover:tw-text-white${
                    location.pathname === "/userReport"
                      ? "tw-bg-blue-900 tw-!text-white"
                      : "tw-text-black"
                  }`}
                >
                  ประชาชนแจ้งเรื่องต่างๆ
                </Button>
              </MenuHandler>
              <MenuList className="tw-bg-slate-400 tw-mt-2 tw-shadow-lg tw-w-64">
                <Link to="/userReport">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/userReport"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายงานหัวข้อร้องเรียน
                  </MenuItem>
                </Link>
                <Link to="/report-request">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/report-request"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    สถานะโปรโมทร้านของประชาชน
                  </MenuItem>
                </Link>
                <Link to="/userrequest-forwatchcctv">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/userrequest-forwatchcctv"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายงานคำขอกล้องประชาชน
                  </MenuItem>
                </Link>
                <Link to="/sosformmobile">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/sosformmobile"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายงาน SOS ฉุกเฉิน
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
          <div
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white ${
              location.pathname === "/pointMap" ||
              location.pathname === "/problempointMap"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
          >
            <Menu>
              <MenuHandler className="tw-flex tw-items-center tw-justify-start">
                <Button
                  className={`tw-bg-transparent hover:tw-bg-blue-900 hover:tw-text-white ${
                    location.pathname === "/pointMap" ||
                    location.pathname === "/problempointMap"
                      ? "tw-bg-blue-900 tw-!text-white"
                      : "tw-text-black"
                  }`}
                >
                  แผนที่เสาในเขต
                </Button>
              </MenuHandler>
              <MenuList className="tw-bg-slate-400 tw-mt-2 tw-shadow-lg tw-w-64">
                <Link to="/pointMap">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/pointMap"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    แผนที่เสา SmartMetropolis
                  </MenuItem>
                </Link>
                <Link to="/problempointMap">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/problempointMap"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    จุดที่อุปกรณ์ต่างๆมีปัญหาหรือชำรุด
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
          <a
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/problemsoftwareorhardware"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            onClick={() =>
              (window.location.href = "/problemsoftwareorhardware")
            }
          >
            ติดต่อปัญหา Software/Hardware
          </a>
          <a
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/dardboardallvaule" ||
              location.pathname === "/userreportstatus" ||
              location.pathname === "/userreportstatusacknowled" ||
              location.pathname === "/userreportstatusinprogress" ||
              location.pathname === "/userreportstatuscompletedonly" ||
              location.pathname === "/userreportstatuscompleted" ||
              location.pathname === "/pageaction-dataplace" ||
              location.pathname === "/pageaction-datashop" ||
              location.pathname === "/pageaction-datarest" ||
              location.pathname === "/pageaction-datareceived" ||
              location.pathname === "/pageaction-datachecking" ||
              location.pathname ===
                "/pageaction-datarequestadditionaldocumentsdata" ||
              location.pathname === "/pageaction-completeddata" ||
              location.pathname === "/pageaction-thedocumentdidnotpass" ||
              location.pathname === "/pageaction-restaurant" ||
              location.pathname === "/pageaction-ploe250" ||
              location.pathname === "/pageaction-requestcctvpass" ||
              location.pathname === "/pageaction-requestcctvnotpass" ||
              location.pathname === "/pageaction-requestdocuments" ||
              location.pathname === "/pageaction-sosstatusreported" ||
              location.pathname === "/pageaction-sosstatusacknowledged" ||
              location.pathname === "/pageaction-sosstatusinprogress" ||
              location.pathname === "/pageaction-sosstatuscompleted" ||
              location.pathname === "/pageaction-sosstatuscanceled"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            onClick={() => (window.location.href = "/dardboardallvaule")}
          >
            ตารางสรุปค่า
          </a>
          <a
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/data-integratedinformation"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            onClick={() =>
              (window.location.href = "/data-integratedinformation")
            }
          >
            ข้อมูลบูรณาการ
          </a>
          <div
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white ${
              location.pathname === "/data-userreports-excel" ||
              location.pathname === "/data-userreportsshop-excel" ||
              location.pathname === "/data-userrequestcctv-excel" ||
              location.pathname === "/data-userreportsos-excel" ||
              location.pathname === "/data-integratedinformationexcel" ||
              location.pathname === "/data-energy-weather-excel"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
          >
            <Menu>
              <MenuHandler className="tw-flex tw-items-center tw-justify-start tw-full">
                <Button
                  className={`tw-bg-transparent hover:tw-bg-blue-900 hover:tw-text-white${
                    location.pathname === "/data-userreports-excel"
                      ? "tw-bg-blue-900 tw-!text-white"
                      : "tw-text-black"
                  }`}
                >
                  บันทึกเป็น Excel
                </Button>
              </MenuHandler>
              <MenuList className="tw-bg-slate-400 tw-mt-2 tw-shadow-lg tw-w-64">
                <Link to="/data-userreports-excel">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/data-userreports-excel"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายงานหัวข้อร้องเรียน
                  </MenuItem>
                </Link>
                <Link to="/data-userreportsshop-excel">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/data-userreportsshop-excel"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    {" "}
                    สถานะโปรโมทร้านของประชาชน
                  </MenuItem>
                </Link>
                <Link to="/data-userrequestcctv-excel">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/data-userrequestcctv-excel"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายงานคำขอกล้องประชาชน
                  </MenuItem>
                </Link>
                <Link to="/data-userreportsos-excel">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/data-userreportsos-excel"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    รายงาน SOS ฉุกเฉิน
                  </MenuItem>
                </Link>
                <Link to="/data-integratedinformationexcel">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/data-integratedinformationexcel"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    ข้อมูลบูรณาการ
                  </MenuItem>
                </Link>
                <Link to="/data-energy-weather-excel">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/data-energy-weather-excel"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    การใช้พลังงานและคุณภาพอากาศ
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
        </div>
      </header>
      <hr className="" />
    </>
  );
}
