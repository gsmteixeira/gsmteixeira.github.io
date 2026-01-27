import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider value={defaultSystem}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
