import Form from "./component/form";
import Navbar from "./component/navbar";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">Hikaru 短網址產生器</div>
        <Form />
        <Navbar />
      </div>
    </>
  );
}

export default App;
