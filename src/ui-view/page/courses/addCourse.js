import { Link } from "react-router-dom";

const AddCourse = () => {
    return (
        <>
            <h1 className="h2">Thêm khóa học</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Tên khóa học
                    </label>
                    <input type="email" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Mô tả
                    </label>
                    <input type="text" className="form-control" id="description" />
                </div>
                <Link to="/courses" className="btn btn-outline-primary me-1">
                    Hủy
                </Link>
                <button type="submit" className="btn btn-primary">
                    Thêm
                </button>
            </form>
        </>
    );
};
export default AddCourse;
