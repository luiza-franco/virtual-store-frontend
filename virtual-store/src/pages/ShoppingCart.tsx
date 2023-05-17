import styles from './Product.module.css'

function ShoppingCart() {

    const productsString = localStorage.getItem('products')
    const products = JSON.parse(productsString ?? '[]'); //o código irá interpretar productsString como uma string vazia '[]' e realizar o parse corretamente

    return (
        <>
            <ul>
                {products.map((product: any, index: any) => (
                    <li key={index}>
                        <div className={styles.img}>
                            <img src={product.image} alt="imagem do produto" />
                        </div>
                        <div className={styles.title}>
                            <p></p>{product.title}<p />
                        </div>
                        <div className={styles.value}>
                            <h2>R${product.value}</h2>
                        </div>
                        <div className={styles.description}>
                            <p>DESCRIÇÃO DO PRODUTO: <br />
                                {product.description}</p>
                        </div>
                        <div>
                            <p>Quantidade<p/>
                                {product.quantity}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default ShoppingCart