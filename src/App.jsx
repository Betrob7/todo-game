import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/todo-game">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/todopage" element={<TodoPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
