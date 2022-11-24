import React, { } from "react";
import { useSearchParams } from "react-router-dom";

// Hook useSearchParams được sử dụng để đọc và sửa đổi query string trên URL, hook này trả về một mảng gồm 
// hai giá trị: tham số tìm kiếm và một hàm để thay đổi.

// Để thay đổi searchParams
// <button onClick={() => setSearchParams({product: 'laptop'})}>
//   Laptop
// </button>
// <button onClick={() => setSearchParams({product: 'laptop', stock: 'in-stock'})}>
//   Còn hàng
// </button>
// Khi click vào button Laptop => https://example.com/?product=laptop
// Khi click vào button Còn hàng => https://example.com/?product=laptop&stock=in-stock


// Để đọc searchParams ta sử dụng get
// const productType = searchParams.get('product'); // laptop
// const stock = searchParams.get('stock'); // in-stock

const PageUseSearchParams = (props) => {

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
        </>
    );
};
export default PageUseSearchParams;
