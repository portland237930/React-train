import "./index.css";

const BigBtnInfo = {
  BigBtnStyle: {
    padding: "2rem 1rem",
  },
  BigBtnText: "大按钮",
};
export function BigButton() {
  return (
    <button
      style={BigBtnInfo.BigBtnStyle}
      onClick={() => console.log("big button")}
    >
      {BigBtnInfo.BigBtnText}
    </button>
  );
}
function Button({ OnClick, children }) {
  return (
    // 阻止事件传播
    <button
      onClick={(e) => {
        e.stopPropagation();
        OnClick();
      }}
    >
      {children}
    </button>
  );
}
// 组件传参交互
export function ToolBar({ OnPlayVideo, OnPlayMovie, onClickToolBar }) {
  return (
    <div onClick={onClickToolBar} class="toolbar">
      <Button OnClick={OnPlayVideo}>playVideo</Button>
      <Button OnClick={OnPlayMovie}>playMovie</Button>
    </div>
  );
}
// 👇️ named export
export const SmallButton = () => {
  return (
    <button onClick={() => console.log("small button")}> Small button </button>
  );
};
