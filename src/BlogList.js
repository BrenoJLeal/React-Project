import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) =>(
                //Pega o id | o titulo | e o autor
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.tittle}</h2>
                        <p>Escrito por {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}
export default BlogList ;