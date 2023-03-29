import "./Products.module.css"
import Button from "../evento/Button";

interface ProductProps {
    product: {  
        title: string;
        description: string;
        value: number;
        image: string;
    }

}

function Products({product}: ProductProps) {
    return (
        <div>
            <img src={product.image} alt="imagem do produto" />
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <p>R${product.value}</p>
            <Button/>
        </div>  
    )
}

export default Products