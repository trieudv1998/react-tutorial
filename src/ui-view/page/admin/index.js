import React from "react";
import { Route, Routes } from "react-router-dom";
import Courses from "../courses";
import AddCourse from "../courses/addCourse";
import CourseDetail from "../courses/courseDetail";
import Dashboard from "../dashboard";
import HooksPage from "../hooks";
import PageCustomHooks from "../hooks/custom-hooks";
import PageUseCallBack from "../hooks/useCallback-hooks";
import PageUseMemo from "../hooks/useMemo-hooks";
import Products from "../products";
import NotFound from "./not-found";
import Sidebar from "./sidebar";
import "./styles.css";

const RootPage = (props) => {
    return (
        <div className="container-fluid">
            <div className="row admin-layout">
                <div className="col-2 bg-dark min-height-100vh">
                    <Sidebar />
                </div>
                <main className="col-10 main-content">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/products" element={<Products />} />

                        {/* start clourses */}
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:courseType/:courseId" element={<CourseDetail />} />
                        <Route path="/courses/add-course" element={<AddCourse />} />
                        {/* end clourses */}

                        {/* start hooks */}
                        <Route path="/hooks" element={<HooksPage />} />
                        <Route path="/hooks/custom-hooks" element={<PageCustomHooks />} />
                        <Route path="/hooks/use-callback-hooks" element={<PageUseCallBack />} />
                        <Route path="/hooks/use-memo-hooks" element={<PageUseMemo />} />
                        {/* end hooks */}

                        <Route path='*' element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </div>
    )
}
export default RootPage;