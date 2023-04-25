import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

import styles from './Product.module.css'

interface Product {
    description: string;
    value: number;
    image: string;
    title: string;
}

function Product() {

    const [product, setProduct] = useState<Product>({ description: '', value: 0, image: '', title: '' })

    const { id } = useParams()

    async function loadProduct() {
        const response = await axios.get(`http://localhost:3333/products/${id}`)
        setProduct(response.data)
    }

    useEffect(() => {
        loadProduct()
    }, [])

    return (
        <div>
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
            <a className={styles.button} href={`/shopping/cart`}><button>ADICIONAR AO CARRINHO</button></a>
            </div>
        </div>
    )
}

export default Product