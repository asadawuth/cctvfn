import iconUser from "../../assets/foruser/iconforuser.png";

export default function Item({ dataListEmployee }) {
  return (
    <>
      {dataListEmployee.map((item, index) => (
        <tr className="tw-border-b" key={index}>
          <td className="tw-py-2 tw-px-4">{item.num}</td>
          <td className="tw-py-2 tw-px-2">{item.gender}</td>
          <td className="tw-py-2 tw-px-4">{item.firstName}</td>
          <td className="tw-py-2 tw-px-4">{item.lastName}</td>
          <td className="tw-py-2 tw-px-2">{item.phone}</td>
          <td className="tw-py-2 tw-px-2">{item.email}</td>
          <td className="tw-py-2 tw-px-2">{item.status}</td>
          <td className="tw-py-2 tw-px-2 tw-flex tw-justify-center tw-items-center">
            <img
              src={item.profile || iconUser}
              alt="User Profile Picture"
              className="tw-w-12 tw-h-12 tw-rounded-full tw-cursor-pointer hover:tw-w-14 hover:tw-h-14"
            />
          </td>
        </tr>
      ))}
    </>
  );
}
