import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
    const {id} = useParams();
    const {data:blog, error, isPending} = useFetch('https://json-server-ashen-rho.vercel.app/blogs' + id);
    const history = useHistory();

    const handleClick = () =>{
        fetch('https://json-server-ashen-rho.vercel.app/blogs' + blog.id,{
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        })
        
    }
    return ( 
        <div className="blog-details">
            {isPending && <div>Carregando...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.tittle}</h2>
                    <p>Escrito por {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Deletar</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails ;
