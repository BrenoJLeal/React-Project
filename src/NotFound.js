import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Desculpe!</h2>
            <p>Página não encontrada...</p>
            <Link to="/">Voltar para a página inicial...</Link>
        </div>
     );
}
 
export default NotFound;