import "./main.sass"
import Header from "./components/Header";
import "./components/Header.css";
import Characters from "./components/Characters";


function App() {
  return (
    <div className="app">
      <Header
        title="Rick & Morty"
        sub="api"
      />
      <Characters />
    </div>
  )
}
export default App;