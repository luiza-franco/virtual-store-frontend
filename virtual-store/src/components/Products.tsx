import "./Products.module.css"

interface ProductProps {
    product: {  
        title: string;
        description: string;
        value: number;
        image: string;
        id: string;
    }

}

function Products({product}: ProductProps) {
    return (
        <div>
            <img src={product.image} alt="imagem do produto" />
            <h1>{product.title}</h1>
            <a className="button" href={`/products/${product.id}`}><button>COMPRAR</button></a>
        </div>  
    )
}

//<h2>{product.description}</h2>
//<p>R${product.value}</p>
export default Products