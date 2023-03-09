import Routing from "../../pages";
import {BrowserRouter} from "react-router-dom";
import {AuthProvider} from "../../hoc/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routing/>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
