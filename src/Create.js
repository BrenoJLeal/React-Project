import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
    const [tittle,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author, setAuthor] = useState('Leonardo');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {tittle, body ,author};
        setIsPending(true)

        fetch('https://json-server-ashen-rho.vercel.app/blogs', {
            method:'POST',
            headers: {"content-Type" : "application/json"},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added')
            setIsPending(false)
            history.push('/')
        });

        
        
    }
    return ( 
        <div className="create">
            <h2>Adicione um novo Template</h2>
            <form onSubmit={handleSubmit}>
                <label>Titulo: </label>
                <input type="text" required value={tittle} onChange={(e) => setTitle(e.target.value)}/>
                <label>Texto: </label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}> </textarea>
                <label>Autor: </label>
                <select valur={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Leonardo">Leonardo</option>
                    <option value="Michelangelo">Michelangelo</option>
                    <option value="Donatello">Donatello</option>
                    <option value="Rafael">Rafael</option>
                </select>
                {!isPending && <button>Adicionar</button>}
                {isPending && <button disabled>Adicionando Template...</button>}
            </form>
        </div>
     );
}
 
export default Create ;
