import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillCaretRight,
  AiFillCaretDown,
  AiOutlineTransaction,
  AiOutlineMenu,
  AiFillPhone,
} from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCctv } from "react-icons/bi";
import { TbDeviceCctv } from "react-icons/tb";
import { FiLogOut } from "react-icons/fi";

export default function LeftBar({ leftOpen, isOpenandClose }) {
  const [listReportOpen, setListReportOpen] = useState(false);
  const [listShopOpen, setListShopOpen] = useState(false);
  const [listRequestCctv, setListRequestCctv] = useState(false);
  const [listSosOpen, setListSosOpen] = useState(false);
  const [listPole250, setListPole250] = useState(false);
  const [listCctv, setListCctv] = useState(false);

  const toggleList = () => {
    setListReportOpen(!listReportOpen);
  };
  const toggleListOpen = () => {
    setListShopOpen(!listShopOpen);
  };
  const toggleListRequestOpen = () => {
    setListRequestCctv(!listRequestCctv);
  };
  const toggleListSosOpen = () => {
    setListSosOpen(!listSosOpen);
  };
  const toggleListPole250Open = () => {
    setListPole250(!listPole250);
  };
  const toggleListCctv = () => {
    setListCctv(!listCctv);
  };
  return (
    <div
      className={`tw-relative tw-bg-blue-100 tw-h-screen tw-shadow-lg tw-transition-all tw-duration-300 ${
        leftOpen ? "tw-w-48" : "tw-w-16"
      }`}
    >
      {/* ปุ่มเปิด-ปิด Sidebar */}
      <div className="tw-absolute tw-top-0 tw-right-0 tw-p-2 tw-cursor-pointer">
        {leftOpen ? (
          <CgClose
            className="tw-text-lg tw-text-red-500 hover:tw-text-red-400"
            onClick={isOpenandClose}
          />
        ) : (
          <AiOutlineMenu
            className="sm:tw-text-2xl tw-text-blue-800"
            onClick={isOpenandClose}
          />
        )}
      </div>

      {/* เนื้อหา Sidebar */}
      <div className="tw-flex tw-flex-col tw-h-full tw-pt-10">
        {/* หัวข้อ (ซ่อนเมื่อปิด Sidebar) */}
        {leftOpen && (
          <div className="tw-text-center tw-font-semibold tw-text-white tw-bg-blue-800 tw-text-lg tw-py-2 tw-rounded-md tw-shadow-md">
            สรุปค่า
          </div>
        )}

        {/* รายการเมนู */}
        <div className="tw-flex-1 tw-mt-4">
          <div
            className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-blue-200 tw-cursor-pointer tw-transition"
            onClick={toggleList}
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <BsBell className="tw-text-2xl" />
              <h1
                className={`${
                  leftOpen ? "tw-block" : "tw-hidden"
                } tw-text-sm tw-font-medium`}
              >
                ร้องเรียน
              </h1>
            </div>
            {leftOpen &&
              (listReportOpen ? <AiFillCaretDown /> : <AiFillCaretRight />)}
          </div>

          {listReportOpen && leftOpen && (
            <div className="tw-flex tw-flex-col tw-px-2 tw-mt-2 tw-gap-1">
              <a
                href="/userreportstatus"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                แจ้ง
              </a>
              <a
                href="/userreportstatusacknowled"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                รับแจ้งแล้ว
              </a>
              <a
                href="/userreportstatusinprogress"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                กำลังดำเนินการ
              </a>
              <a
                href="/userreportstatuscompletedonly"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                จัดการเร็จสิ้น
              </a>
              <a
                href="/userreportstatuscompleted"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ยกเลิก
              </a>
              <a
                href="/userReport"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                รวม
              </a>
            </div>
          )}

          <div
            onClick={toggleListOpen}
            className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-blue-200 tw-cursor-pointer tw-transition"
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <RiShoppingCartLine className="tw-text-2xl" />
              <h1
                className={`${
                  leftOpen ? "tw-block" : "tw-hidden"
                } tw-text-sm tw-font-medium`}
              >
                โปรโมทร้าน
              </h1>
            </div>
            {leftOpen &&
              (listShopOpen ? <AiFillCaretDown /> : <AiFillCaretRight />)}
          </div>

          {listShopOpen && leftOpen && (
            <div className="tw-flex tw-flex-col tw-px-2 tw-mt-2 tw-gap-1">
              <a
                href="/pageaction-datareceived"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ส่งเรื่องแล้ว
              </a>
              <a
                href="/pageaction-datachecking"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                กำลังเช็คเอกสาร
              </a>
              <a
                href="/pageaction-datarequestadditionaldocumentsdata"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ขอเอกสารเพิ่ม
              </a>
              <a
                href="/pageaction-completeddata"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                สำเร็จ
              </a>
              <a
                href="/pageaction-thedocumentdidnotpass"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ไม่ผ่าน
              </a>
              <a
                href="/report-request"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                รวม
              </a>
            </div>
          )}

          <div
            onClick={toggleListRequestOpen}
            className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-blue-200 tw-cursor-pointer tw-transition"
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <BiCctv className="tw-text-2xl" />
              <h1
                className={`${
                  leftOpen ? "tw-block" : "tw-hidden"
                } tw-text-sm tw-font-medium`}
              >
                สถานะขอดูกล้อง
              </h1>
            </div>
            {leftOpen &&
              (listRequestCctv ? <AiFillCaretDown /> : <AiFillCaretRight />)}
          </div>

          {listRequestCctv && leftOpen && (
            <div className="tw-flex tw-flex-col tw-px-2 tw-mt-2 tw-gap-1">
              <a
                href="/pageaction-requestdocuments"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ยื่นเอกสาร
              </a>
              <a
                href="/pageaction-requestcctvpass"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ผ่าน
              </a>
              <a
                href="/pageaction-requestcctvnotpass"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ไม่ผ่าน
              </a>
              <a
                href="/userrequest-forwatchcctv"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                รวม
              </a>
            </div>
          )}

          <div
            className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-blue-200 tw-cursor-pointer tw-transition"
            onClick={toggleListSosOpen}
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <AiFillPhone className="tw-text-2xl" />
              <h1
                className={`${
                  leftOpen ? "tw-block" : "tw-hidden"
                } tw-text-sm tw-font-medium`}
              >
                ร้องเรียน SOS ฉุกเฉิน
              </h1>
            </div>
            {leftOpen &&
              (listSosOpen ? <AiFillCaretDown /> : <AiFillCaretRight />)}
          </div>

          {/* Submenu - แสดงเมื่อ listOpen เป็น true */}
          {listSosOpen && leftOpen && (
            <div className="tw-flex tw-flex-col tw-px-2 tw-mt-2 tw-gap-1">
              <a
                href="/pageaction-sosstatusreported"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                แจ้ง
              </a>
              <a
                href="/pageaction-sosstatusacknowledged"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                รับแจ้งแล้ว
              </a>
              <a
                href="/pageaction-sosstatusinprogress"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                กำลังดำเนินการ
              </a>
              <a
                href="/pageaction-sosstatuscompleted"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                จัดการเร็จสิ้น
              </a>
              <a
                href="/pageaction-sosstatuscanceled"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ยกเลิก
              </a>
              <a
                href="/sosformmobile"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                รวม
              </a>
            </div>
          )}

          <div
            className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-blue-200 tw-cursor-pointer tw-transition"
            onClick={toggleListPole250Open}
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <AiOutlineTransaction className="tw-text-2xl" />
              <h1
                className={`${
                  leftOpen ? "tw-block" : "tw-hidden"
                } tw-text-sm tw-font-medium`}
              >
                เสาร์250
              </h1>
            </div>
            {leftOpen &&
              (listPole250 ? <AiFillCaretDown /> : <AiFillCaretRight />)}
          </div>

          {listPole250 && leftOpen && (
            <div className="tw-flex tw-flex-col tw-mt-2 tw-gap-2 tw-px-2">
              <a
                href="/pageaction-ploe250"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ค่าของเสาทั้งหมด
              </a>
              <a
                href="/problempointMap"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg    tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                เสาที่ชำรุด
              </a>
            </div>
          )}

          <div
            className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-blue-200 tw-cursor-pointer tw-transition"
            onClick={toggleListCctv}
          >
            <div className="tw-flex tw-items-center tw-gap-4">
              <TbDeviceCctv className="tw-text-2xl" />
              <h1
                className={`${
                  leftOpen ? "tw-block" : "tw-hidden"
                } tw-text-sm tw-font-medium`}
              >
                กล้อง cctv
              </h1>
            </div>
            {leftOpen &&
              (listCctv ? <AiFillCaretDown /> : <AiFillCaretRight />)}
          </div>

          {listCctv && leftOpen && (
            <div className="tw-flex tw-flex-col tw-mt-2 tw-gap-2 tw-px-2">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg   tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                ดูกล้อง
              </a>
              <a
                href="/problempointMap"
                target="_blank"
                rel="noopener noreferrer"
                className="tw-bg-white tw-cursor-pointer tw-text-gray-700 tw-py-2 tw-pl-4 tw-pr-6 tw-rounded-lg    tw-shadow-lg tw-border tw-border-gray-200 hover:tw-bg-blue-500 hover:tw-text-white hover:tw-border-blue-500 tw-transition-all tw-duration-300"
              >
                กล้องที่ชำรุด
              </a>
            </div>
          )}
        </div>
        {/* Logout */}
        <div className="tw-mt-auto tw-mb-4">
          <Link
            to="/logout"
            className="tw-flex tw-items-center tw-gap-4 tw-p-2 tw-rounded-lg hover:tw-bg-red-100 tw-cursor-pointer tw-text-red-500 tw-transition"
          >
            <FiLogOut className="tw-text-2xl" />
            <h1
              className={`${
                leftOpen ? "tw-block" : "tw-hidden"
              } tw-text-sm tw-font-medium`}
            >
              ออกจากระบบ
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
