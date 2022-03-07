import "./App.css";

import Modal from "./components/Modal";

declare global {
  interface Window {
    ethereum: any;
  }
}

function App() {
  return (
    <div className="App">
      <Modal show={true} hideModal={() => {}} />
    </div>
  );
}

export default App;
