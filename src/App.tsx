import Header from "./components/Header/Header";
import LedContainer from "./components/LedContainer/LedContainer";
import Input from "./components/Input/Input";

// Styles
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Header />
      <LedContainer />
      <Input />
    </div>
  );
};

export default App;
