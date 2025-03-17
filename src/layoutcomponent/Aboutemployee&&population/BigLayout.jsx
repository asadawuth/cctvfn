export default function BigLayout({ children }) {
  return (
    <>
      <div className="tw-w-full tw-overflow-x-auto tw-px-36">
        <table className="tw-table-auto tw-min-w-full tw-text-left tw-bg-white tw-show-lg tw-rounded-lg">
          <thead className="tw-bg-blue-100 tw-text-gray-700 tw-font-bold tw-uppercase tw-text-sm tw-tracking-wider ">
            <tr>
              <th className="tw-py-2 tw-px-2">Id</th>
              <th className="tw-py-2 tw-px-2">คำนำหน้า</th>
              <th className="tw-py-2 tw-px-4">ชื่อจริง</th>
              <th className="tw-py-2 tw-px-4">นามสกุล</th>
              <th className="tw-py-2 tw-px-2">เบอร์โทรศัพท์</th>
              <th className="tw-py-2 tw-px-2">อีเมลล์</th>
              <th className="tw-py-2 tw-px-4">สถานะ</th>
              <th className="tw-py-2 tw-px-2 tw-text-center">รูปโปรไฟล์</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
}
