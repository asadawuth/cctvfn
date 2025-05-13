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
import { useTranslation } from "react-i18next";
import GoogleTranslateSwitcher from ".././GoogleTranslateSwitcher";
export default function Header() {
  const { t } = useTranslation();
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
            className="tw-w-full tw-object-fill"
          />
        </picture>
      </div>
      <header className="tw-w-full">
        <div className="sm:tw-flex sm:tw-flex-col md:tw-flex md:tw-flex-col lg:tw-flex lg:tw-flex-col lg:tw-gap-1 xl:tw-flex xl:tw-flex-col 2xl:tw-flex 2xl:tw-flex-row 2xl:tw-justify-center 2xl:tw-mx-2 tw-text-base tw-py-2">
          <a
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/vision"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            href="/vision"
          >
            {t("textone")}
          </a>
          <div
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white ${
              location.pathname === "/Updated-record" ||
              location.pathname === "/Updated-executiveStructure" ||
              location.pathname === "/Updated-vision" ||
              location.pathname === "/Updated-Infrastructure" ||
              location.pathname === "/Updated-Contact"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
          >
            <Menu>
              <MenuHandler className="tw-flex tw-items-center tw-justify-start">
                <Button
                  className={`tw-bg-transparent hover:tw-bg-blue-900 hover:tw-text-white${
                    location.pathname === "/Updated-record"
                      ? "tw-bg-blue-900 tw-!text-white"
                      : "tw-text-black"
                  }`}
                >
                  {t("textupdatedateemployee")}
                </Button>
              </MenuHandler>
              <MenuList className="tw-bg-slate-400 tw-mt-2 tw-shadow-lg tw-w-64">
                <Link to="/Updated-record">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/Updated-record"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    {t("textupdatedateemployeeText1")}
                  </MenuItem>
                </Link>
                <Link to="/Updated-executiveStructure">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/Updated-executiveStructure"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    {t("textupdatedateemployeeText2")}
                  </MenuItem>
                </Link>
                <Link to="/Updated-vision">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/Updated-vision"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    {t("textupdatedateemployeeText3")}
                  </MenuItem>
                </Link>
                <Link to="Updated-Infrastructure">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/Updated-Infrastructure"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    {t("textupdatedateemployeeText4")}
                  </MenuItem>
                </Link>
                <Link to="Updated-Contact">
                  <MenuItem
                    className={`tw-text-white tw-py-2 tw-px-4 tw-w-full tw-text-start tw-whitespace-nowrap ${
                      location.pathname === "/Updated-Contact"
                        ? "tw-bg-blue-900 !tw-text-white"
                        : "hover:tw-bg-blue-900"
                    }`}
                  >
                    {t("textupdatedateemployeeText5")}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
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
                  {t("texttwo")}
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
                    {t("textuser1")}
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
                    {t("textuser2")}
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
                    {t("textuser3")}
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
                    {t("textuser4")}
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
                    {t("textuser5")}
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
                    {t("textuser6")}
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
                    {t("textuser7")}
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
            {t("textthree")}
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
                  {t("textfour")}
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
                    {t("textreport1")}
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
                    {t("textreport2")}
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
                    {t("textreport3")}
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
                    {t("textreport4")}
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
                  {t("textfive")}
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
                    {t("textpole1")}
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
                    {t("textpole2")}
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
            {t("textsix")}
          </a>

          <div
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
            {t("textseven")}
          </div>

          <div
            className={`hover:tw-cursor-pointer tw-px-6 tw-py-2 hover:tw-bg-blue-900 hover:tw-text-white  ${
              location.pathname === "/data-integratedinformation"
                ? "tw-bg-blue-900 tw-text-white"
                : ""
            }`}
            onClick={() =>
              (window.location.href = "/data-integratedinformation")
            }
          >
            {t("texteight")}
          </div>

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
                  {t("textnine")}
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
                    {t("textreport1")}
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
                    {t("textreport2")}
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
                    {t("textreport3")}
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
                    {t("textreport4")}
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
                    {t("texteight")}
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
                    {t("valueHardwear")}
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </div>
          <GoogleTranslateSwitcher />
        </div>

        <hr className="" />
      </header>
    </>
  );
}
