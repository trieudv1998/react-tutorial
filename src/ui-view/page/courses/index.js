import { Link, Outlet } from 'react-router-dom'

const courses = [
    { id: "HTML", type: "ebook" },
    { id: "CSS", type: "slide" },
    { id: "Javascript", type: "video" },
    { id: "jQuery", type: "cheetsheet" },
    { id: "ReactJS", type: "ebook" },
    { id: "Angular", type: "slide" },
    { id: "Vue", type: "video" }
]

const Courses = (props) => {
    return (
        <>
            <h1 className="h2">Khóa học online</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <Link to={course.type + "/" + course.id}>
                            {course.id}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/courses/add-course" className="btn btn-primary">
                Thêm khóa học
            </Link>
            <Outlet />
        </>
    )
}

export default Courses