export default function BigLayoutForStatusPass({ children }) {
  return (
    <>
      <div className="tw-w-full tw-overflow-x-auto">
        <table className="tw-table-auto tw-min-w-full tw-text-left tw-bg-white tw-show-lg tw-rounded-lg">
          <thead className="tw-bg-blue-200 tw-text-gray-700 tw-font-bold tw-uppercase tw-text-sm tw-tracking-wider ">
            <tr>
              <th className="tw-py-2 tw-px-4">Id</th>
              <th className="tw-py-2 tw-px-4">ชื่อจริง</th>
              <th className="tw-py-2 tw-px-4">นามสกุล</th>
              <th className="tw-py-2 tw-px-4">เบอร์โทรศัพท์</th>
              <th className="tw-py-2 tw-px-4">หมายเลขบัตรประชาชน</th>
              <th className="tw-py-2 tw-px-4">หมายเลขแจ้งความ</th>
              <th className="tw-py-2 tw-px-4">เอกสาร</th>
              <th className="tw-py-2 tw-px-4">วันเวลาที่โพส </th>
              <th className="tw-py-2 tw-px-4">จุดของกล้องที่ต้องการขอ</th>
              <th className="tw-py-2 tw-px-4">สถานะ</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
