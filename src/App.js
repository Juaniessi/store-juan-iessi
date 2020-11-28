import './styles/styles.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import AppProvider from "./context/ContextProvider";

function App() {
  return (
    <div>
      <AppProvider>
        <Header/>
        <Main/>
      </AppProvider>
    </div>
  );
}

export default App;
