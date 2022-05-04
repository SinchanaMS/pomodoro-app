import { Route, Routes } from "react-router-dom";
import { HomePage, TasksList, SingleTask, PageNotFound } from "pages/pages";

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/taskslist" element={<TasksList />} />
        <Route path="/task" element={<SingleTask />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
