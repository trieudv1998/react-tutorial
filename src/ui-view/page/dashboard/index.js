import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Dashboard = (props) => {
    const navigate = useNavigate()
    let [searchParams, setSearchParams] = useSearchParams();
    const productType = searchParams.get("product");
    const stock = searchParams.get("stock");
    return (
        <>
            <div className="mt-5 mb-4">
                Lọc:
                <button
                    className="btn btn-outline-primary ms-2"
                    onClick={() => setSearchParams({ product: "laptop" })}
                >
                    Laptop
                </button>
                <button
                    className="btn btn-outline-primary mx-2"
                    onClick={() =>
                        setSearchParams({
                            product: "laptop",
                            stock: "in-stock"
                        })
                    }
                >
                    Còn hàng
                </button>
                <button
                    className="btn btn-outline-primary"
                    onClick={() => setSearchParams({})}
                >
                    Clear
                </button>
            </div>
            <h1>
                Các từ khóa: &nbsp;
                {productType}, {stock === "in-stock" ? "còn hàng" : ""}
            </h1>
            {/* <button onClick={() => navigate('products', { replace: true })}>
                Go to Products Page
            </button> */}
        </>
    )
}
export default Dashboard;