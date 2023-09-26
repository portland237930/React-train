import { useState } from "react";
export function Form() {
  // 通过useState改变深层对象
  const [person, setPerson] = useState({
    name: "郑景鹏",
    info: {
      address: "水心柏1栋",
      phone: "17758012942",
      city: "浙江温州",
    },
  });
  // 通过浅拷贝改变值
  function handleNameChange(e) {
    setPerson({
      ...person,
      name: e.target.value,
    });
  }
  function handleAddressChange(e) {
    setPerson({
      ...person,
      info: {
        ...person.info,
        address: e.target.value,
      },
    });
  }
  function handlePhoneChange(e) {
    setPerson({
      ...person,
      info: {
        ...person.info,
        phone: e.target.value,
      },
    });
  }
  return (
    <ul>
      <li>
        姓名:
        <input type="text" value={person.name} onChange={handleNameChange} />
      </li>
      <li>
        地址:
        <input
          type="text"
          value={person.info.address}
          onChange={handleAddressChange}
        />
      </li>
      <li>
        电话号码:
        <input
          type="text"
          value={person.info.phone}
          onChange={handlePhoneChange}
        />
      </li>
    </ul>
  );
}
