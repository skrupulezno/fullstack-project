import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import AuthProvider from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);