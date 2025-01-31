import { TbDeviceCctv } from "react-icons/tb";
import { AiOutlineTransaction, AiOutlineMenu } from "react-icons/ai";
import { CgClose } from "react-icons/cg";
import { BsBell } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCctv } from "react-icons/bi";
import { AiFillPhone } from "react-icons/ai";

export default function LeftBar({ leftOpen, isOpenandClose }) {
  return (
    <div className="tw-relative tw-bg-blue-100 tw-h-screen tw-shadow-lg tw-transition-all tw-duration-300">
      {/* ปุ่มเปิด-ปิด Sidebar */}
      <div className="tw-absolute tw-top-2 tw-right-2 tw-cursor-pointer">
        {leftOpen ? (
          <CgClose
            className="tw-text-lg tw-text-red-500 hover:tw-text-red-400"
            onClick={isOpenandClose}
          />
        ) : (
          <AiOutlineMenu
            className="tw-text-lg sm:tw-text-2xl tw-text-blue-800"
            onClick={isOpenandClose}
          />
        )}
      </div>

      {/* เนื้อหา Sidebar */}
      {leftOpen && (
        <div className="tw-p-4">
          <div className="tw-font-semibold tw-text-lg tw-mb-4 tw-underline">
            สรุปค่า
          </div>

          <SidebarItem icon={<BsBell />} text="ร้องเรียน" leftOpen={leftOpen} />
          <SidebarItem
            icon={<RiShoppingCartLine />}
            text="โปรโมทร้าน"
            leftOpen={leftOpen}
          />
          <SidebarItem icon={<BiCctv />} text="ขอดูกล้อง" leftOpen={leftOpen} />
          <SidebarItem
            icon={<AiFillPhone />}
            text="เหตุฉุกเฉิน"
            leftOpen={leftOpen}
          />
          <SidebarItem
            icon={<AiOutlineTransaction />}
            text="เสาร์250"
            leftOpen={leftOpen}
          />
          <SidebarItem
            icon={<TbDeviceCctv />}
            text="ดูกล้องตามจุด"
            leftOpen={leftOpen}
          />
        </div>
      )}
    </div>
  );
}

function SidebarItem({ icon, text, leftOpen }) {
  return (
    <div className="tw-pl-2 tw-flex tw-items-center tw-gap-4 tw-p-2 hover:tw-bg-white tw-cursor-pointer">
      <div className="tw-text-2xl">{icon}</div>
      <h1 className={`${leftOpen ? "tw-block" : "tw-hidden"} md:tw-block`}>
        {text}
      </h1>
    </div>
  );
}
