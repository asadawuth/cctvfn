import { TbDeviceCctv } from "react-icons/tb";
import { AiOutlineTransaction, AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCctv } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";

export default function LeftBar({ leftOpen, isOpenandClose }) {
  return (
    // tw-border-r-4 tw-border-t-4 tw-border-b-4 tw-border-blue-500
    <div className="tw-relative tw-bg-blue-100 ">
      {/* ปุ่มเปิด-ปิด Sidebar */}
      <div className="tw-absolute tw-top-2 tw-right-2 tw-cursor-pointer">
        {leftOpen ? (
          <CgClose
            className="tw-text-lg tw-text-red-500 hover:tw-text-red-400"
            onClick={isOpenandClose}
          />
        ) : (
          <AiOutlineMenu
            className="tw-text-lg  sm:tw-text-2xl"
            onClick={isOpenandClose}
          />
        )}
      </div>

      {/* เนื้อหา Sidebar */}
      {leftOpen && (
        <>
          <div className="tw-p-4 tw-font-semibold tw-text-lg tw-mb-4 tw-underline">
            สรุปค่า
          </div>

          <div className="tw-pl-2 tw-flex tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
            <BsBell className="tw-pt-1 tw-text-2xl" /> <h1>ร้องเรียน</h1>
          </div>
          <div className="tw-pl-2 tw-flex tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
            <RiShoppingCartLine className="tw-pt-1 tw-text-2xl" />{" "}
            <h1>โปรโมทร้าน</h1>
          </div>
          <div className="tw-pl-2 tw-flex tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
            <BiCctv className="tw-pt-1 tw-text-2xl" /> <h1>ขอดูกล้อง</h1>
          </div>
          <div className="tw-pl-2 tw-flex tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
            <AiFillPhone className="tw-pt-1 tw-text-2xl" /> <h1>เหตุฉุกเฉิน</h1>
          </div>
          <div className="tw-pl-2 tw-flex tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
            <AiOutlineTransaction className="tw-pt-1 tw-text-2xl" />{" "}
            <h1>เสาร์250</h1>
          </div>
          <div className="tw-pl-2 tw-flex tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
            <TbDeviceCctv className="tw-pt-1 tw-text-2xl" />{" "}
            <h1>ดูกล้องตามจุด</h1>
          </div>
        </>
      )}
    </div>
  );
}
