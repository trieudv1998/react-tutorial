import React, { createContext, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { getUserInfo } from "../../../helper";
import FlyToCart from "../animation/fly";
import Courses from "../courses";
import AddCourse from "../courses/addCourse";
import CourseDetail from "../courses/courseDetail";
import Dashboard from "../dashboard";
import ExcercisesPage from "../exercises";
import Exercise2WithUseRef from "../exercises/hooks/useRef/excercise2";
import Exercise1WithUseRef from "../exercises/hooks/useRef/exercise1";
import HooksPage from "../hooks";
import PageCustomHooks from "../hooks/custom-hooks";
import PageUseCallBack from "../hooks/useCallback-hooks";
import PageUseContext from "../hooks/useContext-hooks";
import PageUseMemo from "../hooks/useMemo-hooks";
import Form from "../hooks/useReduces-hooks";
import PageUseRef from "../hooks/useRef-hooks";
import PageUseSearchParams from "../hooks/useSearchParams-hook";
import LazyLoadingPage from "../lazy-loading";
import NotFound from "./not-found";
import Sidebar from "./sidebar";
import "./styles.css";
const LazyHooks = React.lazy(() => import("../hooks"));
const LazyLoading = React.lazy(() => import("../lazy-loading"));

const RootPage = (props) => {
    const userInfo = getUserInfo();
    console.log('userInfo 222', userInfo)

    const ProtectedRoute = ({ redirectPath = '/login' }) => {
        if (!userInfo) {
            return <Navigate to={redirectPath} replace />;
        }

        return <Outlet />;
    };

    return (
        <div className="admin-layout">
            <div className="col-2 bg-dark min-height-100vh">
                <Sidebar />
            </div>
            <main className="col-10 main-content">
                <Routes>
                    <Route path="/" element={<Dashboard />} />

                    <Route element={<ProtectedRoute user={userInfo} />}>
                        {/* start clourses */}
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/courses/:courseType/:courseId" element={<CourseDetail />} />
                        <Route path="/courses/add-course" element={<AddCourse />} />
                        {/* end clourses */}

                        {/* start hooks */}
                        <Route path="/hooks" element={<React.Suspense fallback={<div>Loading...</div>}>
                            <LazyHooks />
                        </React.Suspense>} />
                        <Route path="/hooks/custom-hooks" element={<PageCustomHooks />} />
                        <Route path="/hooks/use-callback-hooks" element={<PageUseCallBack />} />
                        <Route path="/hooks/use-memo-hooks" element={<PageUseMemo />} />
                        <Route path="/hooks/use-ref-hooks" element={<PageUseRef />} />
                        <Route path="/hooks/use-searchparams-hooks" element={<PageUseSearchParams />} />
                        <Route path="/hooks/useContext-hook" element={<PageUseContext />} />    
                        <Route path="/hooks/useReduces-hooks" element={<Form />} />
                        {/* end hooks */}

                        {/* start exercises */}
                        <Route path="/exercises" element={<ExcercisesPage />} />
                        <Route path="/exercises/hooks/useRef/exercise1" element={<Exercise1WithUseRef />} />
                        <Route path="/exercises/hooks/useRef/exercise2" element={<Exercise2WithUseRef />} />
                        {/* end exercises */}

                        <Route path="/lazy-loading" element={<React.Suspense fallback={<div>Loading...</div>}>
                            <LazyLoading />
                        </React.Suspense>} />

                        <Route path="/animation" element={<FlyToCart />} />
                        <Route path="/animation/fly" element={<FlyToCart />} />

                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </main>
        </div>
    )
}
export default RootPage;