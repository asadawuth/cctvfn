import { MdOutlineFoodBank } from "react-icons/md";
import { FaHotel, FaHome, FaShopify } from "react-icons/fa";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useState, useEffect } from "react";
import axios from "../../logic/config/axios";
import LayoutText from "../../layoutcomponent/DashboardAllValue/LayoutText";
import LayoutInClud from "./LayoutInClud";
import { useTranslation } from "react-i18next";

export default function Layout3IncludUserShop() {
  const { t } = useTranslation();
  const [dataTotal, setDataTotal] = useState();

  useEffect(() => {
    axios
      .get("/aboutshop/alltotalapprove")
      .then((res) => {
        setDataTotal(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (!dataTotal) {
    return (
      <div className="tw-flex tw-justify-center tw-items-center tw-h-screen">
        <span className="tw-text-blue-700 tw-font-semibold tw-text-lg">
          ไม่แสดงข้อมูล
        </span>
      </div>
    );
  }
  const data = [
    {
      name: t("IntegratedInformationLayOut1Text4"),
      total: dataTotal.totalShop,
    },
    {
      name: t("IntegratedInformationLayOut1Text5"),
      total: dataTotal.totalRestaurant,
    },
    {
      name: t("IntegratedInformationLayOut1Text6"),
      total: dataTotal.totalPlace,
    },
    {
      name: t("IntegratedInformationLayOut1Text7"),
      total: dataTotal.totalRest,
    },
  ];
  return (
    <>
      <div className=" tw-p-10 tw-h-auto ">
        <LayoutText text={t("Layout3IncludUserShopTitle")} />
        {/* Section แสดงกราฟ */}
        <div className="lg:tw-mx-20 xl:tw-mx-0 tw-bg-blue-50 tw-rounded-lg tw-p-6 tw-shadow-lg tw-mb-6 tw-mt-2">
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
              layout="vertical"
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={120} />
              <Tooltip />
              <Bar dataKey="total" barSize={20} fill="#4A90E2" name="จำนวนรวม">
                <LabelList
                  dataKey="total"
                  position="insideRight"
                  style={{ fill: "white", fontWeight: "bold" }}
                />
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Section แสดงไอคอน */}
        <div className="tw-flex tw-justify-center tw-gap-4  tw-py-6 tw-bg-blue-50 tw-rounded-lg tw-shadow-lg tw-w-full ">
          <div className="tw-flex tw-items-center tw-gap-2">
            <a href="pageaction-datashop">
              <FaShopify className="tw-text-4xl tw-text-blue-500 tw-cursor-pointer hover:tw-text-blue-700" />
            </a>
            {/* <h5 className="tw-text-blue-700 tw-font-semibold">ร้านค้า</h5> */}
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <a href="pageaction-restaurant">
              <MdOutlineFoodBank className="tw-text-4xl tw-text-blue-500 tw-cursor-pointer hover:tw-text-blue-700" />
            </a>
            {/* <h5 className="tw-text-blue-700 tw-font-semibold">ร้านอาหาร</h5> */}
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <a href="pageaction-dataplace">
              <FaHotel className="tw-text-4xl tw-text-blue-500 tw-cursor-pointer hover:tw-text-blue-700 " />
            </a>
            {/* <h5 className="tw-text-blue-700 tw-font-semibold">ที่พัก</h5> */}
          </div>
          <div className="tw-flex tw-items-center tw-gap-2">
            <a href="pageaction-datarest">
              <FaHome className="tw-text-4xl tw-text-blue-500 tw-cursor-pointer hover:tw-text-blue-700" />
            </a>
            {/* <h5 className="tw-text-blue-700 tw-font-semibold">สถานที่</h5> */}
          </div>
        </div>

        <LayoutInClud
          text={t("Layout3IncludUserShopFooter")}
          data={dataTotal.totalApprove}
        />
      </div>
    </>
  );
}
