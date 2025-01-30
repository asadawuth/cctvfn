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
import CreateIdEmployee from "../page/AboutEmployee/CreateIdEmployee";
import DeleteIdEmployee from "../page/AboutEmployee/DeleteIdEmployee";
import Manual from "../page/Manual";
import UserReport from "../page/Inuserreport/UserReport";
import Pole250 from "../layoutconponent/DashboardAllValue/datarealtimepole250/Pole250";
import DataReportedOnly from "../layoutconponent/DashboardAllValue/statususerreport/DataReportedOnly";
import DataAcknowledOnly from "../layoutconponent/DashboardAllValue/statususerreport/DataAcknowledOnly";
import DataInProgressOnly from "../layoutconponent/DashboardAllValue/statususerreport/DataInProgressOnly";
import DataCompletedOnly from "../layoutconponent/DashboardAllValue/statususerreport/DataCompletedOnly";
import DataCanledOnly from "../layoutconponent/DashboardAllValue/statususerreport/DataCanceledOnly";
import UserRequestToOpenStore from "../page/Inuserreport/UserRequestToOpenStore";
import DataPlace from "../layoutconponent/DashboardAllValue/datauserstoreplacerest/DataPlace";
import DataStore from "../layoutconponent/DashboardAllValue/datauserstoreplacerest/DataStore";
import DataRest from "../layoutconponent/DashboardAllValue/datauserstoreplacerest/DataRest";
import DataRestaurent from "../layoutconponent/DashboardAllValue/datauserstoreplacerest/DataRestaurent";
import ReceivedData from "../layoutconponent/DashboardAllValue/total5requeststatus/ReceivedData";
import CheckingData from "../layoutconponent/DashboardAllValue/total5requeststatus/CheckingData";
import RequestAdditionalDocumentsData from "../layoutconponent/DashboardAllValue/total5requeststatus/RequestAdditionalDocumentsData";
import CompletedData from "../layoutconponent/DashboardAllValue/total5requeststatus/CompletedData";
import TheDocumentDidNotPass from "../layoutconponent/DashboardAllValue/total5requeststatus/TheDocumentDidNotPass";
import UserRequestForWatchCctv from "../page/Inuserreport/UserRequestForWatchCctv";
import DataRequestDocument from "../layoutconponent/DashboardAllValue/dataRequestCctv/DataRequestDocument";
import DataRequestPass from "../layoutconponent/DashboardAllValue/dataRequestCctv/DataRequestPass";
import DataRequestNotpass from "../layoutconponent/DashboardAllValue/dataRequestCctv/DataRequestNotpass";
import SosFormMobile from "../page/Inuserreport/SosFormMobile";
import Reported from "../layoutconponent/DashboardAllValue/total5sosvoicestatus/reported";
import Acknowledged from "../layoutconponent/DashboardAllValue/total5sosvoicestatus/acknowledged";
import InProgress from "../layoutconponent/DashboardAllValue/total5sosvoicestatus/InProgress";
import Completed from "../layoutconponent/DashboardAllValue/total5sosvoicestatus/Completed";
import Canceled from "../layoutconponent/DashboardAllValue/total5sosvoicestatus/Canceled";
import AllDataTitle from "../layoutconponent/ForuserReport/ForAllDataTitle/AllDataTitle";
import AllDataShop from "../layoutconponent/Forusershop/Foralldatashop/AllDataShop";
import PointMap from "../page/point/PointMap";
import ProblemPoint from "../page/point/ProblemPoint";
import ProblemSoftwareHardware from "../page/ProblemSoftwareHardware";
import DardboardAllVaule from "./../page/DardboardAllVaule";
import PathNotFound from "../layoutconponent/PathNotFound";
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
      { path: "createidemployee", element: <CreateIdEmployee /> },
      { path: "deleteidemployee", element: <DeleteIdEmployee /> },
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
