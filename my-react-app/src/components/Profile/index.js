import { getImageUrl } from "../../utils/imgUrl";
import { avatarList } from "../../utils/mock";
import "./index.css";
// props解构传参
function Avatar({ person, size = 100 }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
// 使用props传参
function PropsAvatar(props) {
  return (
    <img
      className="avatar2"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}
// 父子组件嵌套
function Card({ children }) {
  return <div className="card">{children}</div>;
}
// 列表渲染
function AvatarList({}) {
  console.log(avatarList);
  const listItems = avatarList.map((person) => (
    <Avatar key={person.id} person={person} />
  ));
  return <ul>{listItems}</ul>;
}
export function Profile({ isAvatar = false }) {
  return (
    <div>
      <Card>
        {/* 通过条件渲染选择图片 */}
        {isAvatar ? (
          <Avatar
            size={100}
            person={{
              name: "郑景鹏",
              imageId: "1bX5QH6",
            }}
          />
        ) : (
          <PropsAvatar
            size={100}
            person={{
              name: "zjp",
              imageId: "OKS67lh",
            }}
          />
        )}
        <AvatarList />
      </Card>
    </div>
  );
}
