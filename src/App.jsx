import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogsPage from "./app/blogs/page";
import ContactPage from "./app/contact/page";
import RootLayout from "./app/layout";
import Home from "./app/page";
import ProjectsPage from "./app/projects/page";

function NotFoundPage() {
  return (
    <div>
      <h1>[ 404 ]</h1>
      <p>Page not found.</p>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
