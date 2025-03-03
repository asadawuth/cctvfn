export default function StatusTable({ data }) {
  return (
    <div className="tw-overflow-x-auto  tw-flex tw-w-full">
      <div className="tw-w-full tw-max-w-4xl tw-bg-white tw-rounded-lg tw-shadow-lg">
        <table className="tw-w-full tw-border-collapse">
          <thead>
            <tr className="tw-bg-blue-900 tw-text-white">
              <th className="tw-px-4 tw-py-2 tw-text-left">สถานะ SOS</th>
              <th className="tw-px-4 tw-py-2 tw-text-center">จำนวน</th>
            </tr>
          </thead>
          <tbody>
            <tr className="tw-bg-blue-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700">
                <a
                  href="/pageaction-sosstatusreported"
                  className="tw-block tw-w-full"
                >
                  แจ้ง
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatusreported"
                  className="tw-block tw-w-full"
                >
                  {data.reported}
                </a>
              </td>
            </tr>
            <tr className="hover:tw-bg-gray-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 ">
                <a
                  href="/pageaction-sosstatusacknowledged"
                  className="tw-block tw-w-full"
                >
                  รับแจ้งแล้ว
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatusacknowledged"
                  className="tw-block tw-w-full"
                >
                  {data.acknowledged}
                </a>
              </td>
            </tr>
            <tr className="tw-bg-blue-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700">
                <a
                  href="/pageaction-sosstatusinprogress"
                  className="tw-block tw-w-full"
                >
                  กำลังดำเนินการ
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatusinprogress"
                  className="tw-block tw-w-full"
                >
                  {data.inProgress}
                </a>
              </td>
            </tr>
            <tr className="hover:tw-bg-gray-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 ">
                <a
                  href="/pageaction-sosstatuscompleted"
                  className="tw-block tw-w-full"
                >
                  สำเร็จ
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatuscompleted"
                  className="tw-block tw-w-full"
                >
                  {data.completed}
                </a>
              </td>
            </tr>
            <tr className="tw-bg-blue-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 tw-bg-blue-100 tw-text-blue-700">
                <a
                  href="/pageaction-sosstatuscanceled"
                  className="tw-block tw-w-full"
                >
                  ยกเลิก
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a
                  href="/pageaction-sosstatuscanceled"
                  className="tw-block tw-w-full"
                >
                  {data.canceled}
                </a>
              </td>
            </tr>
            <tr className="hover:tw-bg-gray-100 tw-transition tw-duration-300 tw-ease-in-out">
              <td className="tw-px-4 tw-py-2 ">
                <a href="/sosformmobile" className="tw-block tw-w-full">
                  รวมค่า
                </a>
              </td>
              <td className="tw-px-4 tw-py-2 tw-font-bold tw-text-center">
                <a href="/sosformmobile" className="tw-block tw-w-full">
                  {data.allStatus}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
