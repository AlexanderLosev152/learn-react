import Code from "../Code/Code.jsx";
import Welcome from "../Welcome/Welcome.jsx";

export default function ConditionalComponent() {
  const display = false;
  let res = display === true ? <Code /> : <Welcome />;
  return <div>{res}</div>;
}
