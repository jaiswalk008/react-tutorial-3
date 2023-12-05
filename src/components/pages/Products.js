import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Products = () => {
    return (
        <>
            <h1>The Products Page</h1>
            <section>
                <ul>
                    <Link to="/products/book"><li>Book</li></Link>
                    <Link to="/products/mobile"><li>Mobile</li></Link>
                    <Link to="/products/course"><li>Course</li></Link>
                    
                </ul>
            </section>
        </>
    )
}
export default Products;