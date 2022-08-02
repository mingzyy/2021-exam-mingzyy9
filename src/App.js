import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
import { useRecoilValue } from "recoil";
import { counterState, counterLabelSelector } from "./states/counter";
import Counter from "./components/Counter";

function App() {
  const counter = useRecoilValue(counterState);
  const counterLable = useRecoilValue(counterLabelSelector);

  return (
    /*<BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>*/

    <div>
      <Counter />
      <div>counter : {counter}</div>
      <div>counterLabel : {counterLable}</div>
    </div>
  );
}

export default App;
