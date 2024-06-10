import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../components/ui/ScrollToTop";
import Login from "./website/login";
import UnAuthorized from "./website/Unauthorized";
import NotFound from "./website/NotFound";
import SignUp from "./website/signup";
import Home from "./website/Home";
import AuthProvider from "../providers/AuthProvider";
import TopNav from "../shared/TopNav";
import Student from "./website/student";
import TeacherIndex from "./website/Teacher";

export default function Index() {
  return (
    <>
      <ScrollToTop />
      <TopNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<AuthProvider />}>
          <Route path="/student" element={<Student />} />
          <Route path="/teacher" element={<TeacherIndex />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
