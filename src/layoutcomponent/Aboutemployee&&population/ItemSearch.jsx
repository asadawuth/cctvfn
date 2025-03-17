import iconUser from "../../assets/foruser/iconforuser.png";

export default function ItemSearch({ dataIdUserPersonSearch }) {
  return (
    <div className="tw-w-full tw-overflow-x-auto tw-px-36">
      <table className="tw-table-auto tw-min-w-full tw-text-left tw-bg-white tw-show-lg tw-rounded-lg">
        <thead className="tw-bg-blue-100 tw-text-gray-700 tw-font-bold tw-uppercase tw-text-sm tw-tracking-wider">
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
        <tbody>
          {dataIdUserPersonSearch && (
            <tr className="tw-border-b">
              <td className="tw-py-2 tw-px-4">{dataIdUserPersonSearch.id}</td>
              <td className="tw-py-2 tw-px-2">
                {dataIdUserPersonSearch.gender}
              </td>
              <td className="tw-py-2 tw-px-4">
                {dataIdUserPersonSearch.firstName}
              </td>
              <td className="tw-py-2 tw-px-4">
                {dataIdUserPersonSearch.lastName}
              </td>
              <td className="tw-py-2 tw-px-2">
                {dataIdUserPersonSearch.phone}
              </td>
              <td className="tw-py-2 tw-px-2">
                {dataIdUserPersonSearch.email}
              </td>
              <td className="tw-py-2 tw-px-2">
                {dataIdUserPersonSearch.status}
              </td>
              <td className="tw-py-2 tw-px-2 tw-flex tw-justify-center tw-items-center">
                <img
                  src={dataIdUserPersonSearch.profile || iconUser}
                  alt="User Profile Picture"
                  className="tw-w-12 tw-h-12 tw-rounded-full tw-cursor-pointer hover:tw-w-14 hover:tw-h-14"
                />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
