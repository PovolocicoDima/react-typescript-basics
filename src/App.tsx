import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserPage from "./componensts/UserPage";
import TodosPage from "./componensts/TodosPage";
import EventExamples from "./componensts/EventExamples";
import UserItemPage from "./componensts/UserItemPage";

function App() {
  return (
    <div>
      {/* <Card width="300px" height="300px" variant={CardVariant.outlined}>
        <button>Hi there</button>
      </Card>
      <EventExamples /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
          <Route path="/todos" element={<TodosPage />} />
          {/* <Route path="/todos/:id" element={<TodoItemPage />} /> */}
          <Route path="*" element={<EventExamples />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
