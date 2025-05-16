import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";

import Login from "../page/Beforelogin/Login";
import VevifyEmail from "../page/Beforelogin/VevifyEmail";
import VevifyOtp from "../page/Beforelogin/VevifyOtp";
import ResetPassword from "../page/Beforelogin/ResetPassword";
import DataUser from "../page/Aboutdatauser/DataUser";
import ChangePassword from "../page/Aboutdatauser/ChangePassword";
import ChangeEmail from "../page/Aboutdatauser/ChangeEmail";
import Vision from "../page/Vision";
import Record from "../page/UpdateDataforemployee/Record";
import ExecutiveStructure from "../page/UpdateDataforemployee/ExecutiveStructure";
import Vision2 from "../page/UpdateDataforemployee/Vision2";
import Infrastructure from "../page/UpdateDataforemployee/Infrastructure";
import Contact from "../page/UpdateDataforemployee/Contact";
import CreateIdEmployee from "../page/AboutEmployeeandpopulation/CreateIdEmployee";
import DeleteIdEmployee from "../page/AboutEmployeeandpopulation/DeleteIdEmployee";
import DeletedIdPopulation from "../page/AboutEmployeeandpopulation/DeletedIdPopulation";
import ListDataEmployee from "../page/AboutEmployeeandpopulation/ListDataEmployee";
import ListDataPopulation from "../page/AboutEmployeeandpopulation/ListDataPopulation";
import ListDataEmployeeResign from "../page/AboutEmployeeandpopulation/ListDataEmployeeResign";
import ListDataPopulationBlock from "../page/AboutEmployeeandpopulation/ListDataPopulationBlock";
import Manual from "../page/Manual";
import UserReport from "../page/Inuserreport/UserReport";
import Pole250 from "../layoutcomponent/DashboardAllValue/datarealtimepole250/Pole250";
import DataReportedOnly from "../layoutcomponent/DashboardAllValue/statususerreport/DataReportedOnly";
import DataAcknowledOnly from "../layoutcomponent/DashboardAllValue/statususerreport/DataAcknowledOnly";
import DataInProgressOnly from "../layoutcomponent/DashboardAllValue/statususerreport/DataInProgressOnly";
import DataCompletedOnly from "../layoutcomponent/DashboardAllValue/statususerreport/DataCompletedOnly";
import DataCanledOnly from "../layoutcomponent/DashboardAllValue/statususerreport/DataCanceledOnly";
import UserRequestToOpenStore from "../page/Inuserreport/UserRequestToOpenStore";
import DataPlace from "../layoutcomponent/DashboardAllValue/datauserstoreplacerest/DataPlace";
import DataStore from "../layoutcomponent/DashboardAllValue/datauserstoreplacerest/DataStore";
import DataRest from "../layoutcomponent/DashboardAllValue/datauserstoreplacerest/DataRest";
import DataRestaurent from "../layoutcomponent/DashboardAllValue/datauserstoreplacerest/DataRestaurent";
import ReceivedData from "../layoutcomponent/DashboardAllValue/total5requeststatus/ReceivedData";
import CheckingData from "../layoutcomponent/DashboardAllValue/total5requeststatus/CheckingData";
import RequestAdditionalDocumentsData from "../layoutcomponent/DashboardAllValue/total5requeststatus/RequestAdditionalDocumentsData";
import CompletedData from "../layoutcomponent/DashboardAllValue/total5requeststatus/CompletedData";
import TheDocumentDidNotPass from "../layoutcomponent/DashboardAllValue/total5requeststatus/TheDocumentDidNotPass";
import UserRequestForWatchCctv from "../page/Inuserreport/UserRequestForWatchCctv";
import DataRequestDocument from "../layoutcomponent/DashboardAllValue/dataRequestCctv/DataRequestDocument";
import DataRequestPass from "../layoutcomponent/DashboardAllValue/dataRequestCctv/DataRequestPass";
import DataRequestNotpass from "../layoutcomponent/DashboardAllValue/dataRequestCctv/DataRequestNotpass";
import SosFormMobile from "../page/Inuserreport/SosFormMobile";
import Reported from "../layoutcomponent/DashboardAllValue/total5sosvoicestatus/Reported";
import Acknowledged from "../layoutcomponent/DashboardAllValue/total5sosvoicestatus/Acknowledged";
import InProgress from "../layoutcomponent/DashboardAllValue/total5sosvoicestatus/InProgress";
import Completed from "../layoutcomponent/DashboardAllValue/total5sosvoicestatus/Completed";
import Canceled from "../layoutcomponent/DashboardAllValue/total5sosvoicestatus/Canceled";
import AllDataTitle from "../layoutcomponent/ForuserReport/ForAllDataTitle/AllDataTitle";
import AllDataShop from "../layoutcomponent/Forusershop/Foralldatashop/AllDataShop";
import PointMap from "../page/point/PointMap";
import ProblemPoint from "../page/point/ProblemPoint";
import ProblemSoftwareHardware from "../page/ProblemSoftwareHardware";
import DardboardAllVaule from "./../page/DardboardAllVaule";
import IntegratedInformation from "../page/IntegratedInformation";
import UserReportExcel from "../page/forexportexcel/UserReportExcel";
import UserReportShopExcel from "../page/forexportexcel/UserReportShopExcel";
import UserRequestcctvExcel from "../page/forexportexcel/UserRequestcctvExcel";
import UserReportsosExcel from "../page/forexportexcel/UserReportsosExcel";
import IntegratedInformationExcel from "../page/forexportexcel/IntegratedInformationExcel";
import EnergyAndWeatherExcel from "../page/forexportexcel/EnergyAndWeatherExcel";
import PathNotFound from "../layoutcomponent/PathNotFound";
import Layout from "./Layout";
import NoLayout from "./NoLayout";
import Authenticated from "./Authenticated";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Authenticated>
        <Layout />
      </Authenticated>
    ),
    children: [
      {
        path: "",
        element: <Navigate to="dardboardallvaule" />,
      },
      {
        path: "yourprofile",
        children: [
          { path: "", element: <DataUser /> },
          { path: "changepassword", element: <ChangePassword /> },
          { path: "changeemail", element: <ChangeEmail /> },
        ],
      },
      { path: "vision", element: <Vision /> },
      // { path: "state-set-dateforpopulation", element: <StartData /> },
      { path: "Updated-record", element: <Record /> },
      { path: "Updated-executiveStructure", element: <ExecutiveStructure /> },
      { path: "Updated-vision", element: <Vision2 /> },
      { path: "Updated-Infrastructure", element: <Infrastructure /> },
      { path: "Updated-Contact", element: <Contact /> },
      { path: "createidemployee", element: <CreateIdEmployee /> },
      { path: "deleteidemployee", element: <DeleteIdEmployee /> },
      { path: "deleteidpopulation", element: <DeletedIdPopulation /> },
      { path: "listdataemployee", element: <ListDataEmployee /> },
      { path: "listdatapopulation", element: <ListDataPopulation /> },
      { path: "listdataemployresign", element: <ListDataEmployeeResign /> },
      { path: "listdatapopulationblock", element: <ListDataPopulationBlock /> },
      { path: "manual", element: <Manual /> },
      { path: "userReport", element: <UserReport /> },
      { path: "pageaction-ploe250", element: <Pole250 /> },
      { path: "userreportstatus", element: <DataReportedOnly /> },
      { path: "userreportstatusacknowled", element: <DataAcknowledOnly /> },
      { path: "userreportstatusinprogress", element: <DataInProgressOnly /> },
      { path: "userreportstatuscompletedonly", element: <DataCompletedOnly /> },
      { path: "userreportstatuscompleted", element: <DataCanledOnly /> },
      { path: "report-request", element: <UserRequestToOpenStore /> },
      { path: "pageaction-dataplace", element: <DataPlace /> },
      { path: "pageaction-datashop", element: <DataStore /> },
      { path: "pageaction-datarest", element: <DataRest /> },
      { path: "pageaction-restaurant", element: <DataRestaurent /> },
      { path: "pageaction-datareceived", element: <ReceivedData /> },
      { path: "pageaction-datachecking", element: <CheckingData /> },
      {
        path: "pageaction-datarequestadditionaldocumentsdata",
        element: <RequestAdditionalDocumentsData />,
      },
      { path: "pageaction-completeddata", element: <CompletedData /> },
      {
        path: "pageaction-thedocumentdidnotpass",
        element: <TheDocumentDidNotPass />,
      },
      {
        path: "userrequest-forwatchcctv",
        element: <UserRequestForWatchCctv />,
      },
      { path: "pageaction-requestdocuments", element: <DataRequestDocument /> },
      { path: "pageaction-requestcctvpass", element: <DataRequestPass /> },
      {
        path: "pageaction-requestcctvnotpass",
        element: <DataRequestNotpass />,
      },
      { path: "sosformmobile", element: <SosFormMobile /> },
      { path: "pageaction-sosstatusreported", element: <Reported /> },
      { path: "pageaction-sosstatusacknowledged", element: <Acknowledged /> },
      { path: "pageaction-sosstatusinprogress", element: <InProgress /> },
      { path: "pageaction-sosstatuscompleted", element: <Completed /> },
      { path: "pageaction-sosstatuscanceled", element: <Canceled /> },
      { path: "pointMap", element: <PointMap /> },
      { path: "problempointMap", element: <ProblemPoint /> },
      {
        path: "problemsoftwareorhardware",
        element: <ProblemSoftwareHardware />,
      },
      { path: "dardboardallvaule", element: <DardboardAllVaule /> },
      {
        path: "data-integratedinformation",
        element: <IntegratedInformation />,
      },
      { path: "data-userreports-excel", element: <UserReportExcel /> },
      { path: "data-userreportsshop-excel", element: <UserReportShopExcel /> },
      { path: "data-userrequestcctv-excel", element: <UserRequestcctvExcel /> },
      { path: "data-userreportsos-excel", element: <UserReportsosExcel /> },
      {
        path: "data-integratedinformationexcel",
        element: <IntegratedInformationExcel />,
      },
      { path: "data-energy-weather-excel", element: <EnergyAndWeatherExcel /> },
      { path: "*", element: <PathNotFound /> },
    ],
  },
  {
    path: "userReport/alldatatitle/:reportId",
    element: (
      <Authenticated>
        <NoLayout />
      </Authenticated>
    ),
    children: [{ path: "", element: <AllDataTitle /> }],
  },
  ,
  {
    path: "userShop/alldatashop/:shopId",
    element: (
      <Authenticated>
        <NoLayout />
      </Authenticated>
    ),
    children: [{ path: "", element: <AllDataShop /> }],
  },
  {
    path: "/login",
    element: (
      <RedirectIfAuthenticated>
        <Login />
      </RedirectIfAuthenticated>
    ),
  },
  {
    path: "/verifyemail",
    element: <VevifyEmail />,
  },
  {
    path: "/verifyotp",
    element: <VevifyOtp />,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
