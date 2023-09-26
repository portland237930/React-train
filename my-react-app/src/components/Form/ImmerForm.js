import { useImmer } from "use-immer";
// 使用user-immer实现对象更改
export function ImmerForm() {
  // 通过useState改变深层对象
  const [person, updatePerson] = useImmer({
    name: "郑景鹏",
    info: {
      address: "水心柏1栋",
      phone: "17758012942",
      city: "浙江温州",
    },
  });
  const [userList, updateUserList] = useImmer([]);
  // 通过浅拷贝改变值
  function handleNameChange(e) {
    updatePerson((p) => {
      p.name = e.target.value;
    });
  }
  function handleAddressChange(e) {
    updatePerson((p) => {
      p.info.address = e.target.value;
    });
  }
  function handlePhoneChange(e) {
    updatePerson((p) => {
      p.info.phone = e.target.value;
    });
  }
  function handleAddUser() {
    updateUserList((u) => {
      u.push(person);
    });
  }
  return (
    <div>
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
        <button onClick={handleAddUser}>添加用户</button>
      </ul>
      <ul>
        <h1>已添加列表</h1>
        {userList.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
