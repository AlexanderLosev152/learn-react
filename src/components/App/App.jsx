import "./App.scss";
import H1 from "../H1/H1.jsx";
import H2 from "../H2/H2.jsx";
import Fruits from "../Fruits/Fruits.jsx";
import ConditionalComponent from "../ConditionalComponent/ConditionalComponent.jsx";
import Message from "../Message/Message.jsx";
import Counter from "../Counter/Counter.jsx";
import Form from "../Form/Form.jsx";

function App() {
  return (
    <>
      <H1>HELLO WORLD !!!</H1>
      <H2 title="hello" />
      <Fruits />
      <ConditionalComponent />
      <Message />
      <Counter />
      <Form />
    </>
  );
}
export default App;
