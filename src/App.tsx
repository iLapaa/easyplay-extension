import "./App.css";
import Header from "./components/header";

function App() {
  // perform a check to see if the user has an "account"

  return (
    <div className="flex min-h-[100vh] items-center justify-center bg-gray-500">
      <div className="h-[500px] w-[400px] border-2 border-white bg-gray-500">
        <Header />
      </div>
    </div>
  );
}

export default App;
