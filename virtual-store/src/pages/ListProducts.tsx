import axios from "axios"
import { useEffect, useState } from "react"
import Products from "../components/Products"
import styles from './ListProducts.module.css'

function ListProducts() {
    const [products, setProducts] = useState<any[]>([])

    async function loadProducts() {
        const response = await axios.get('http://localhost:3333/products')
        setProducts(response.data)
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <>
            <div className={styles.grid}>
                {products.map((product) =>
                 <Products product={product} key={product.id}/>
                )}
            </div>

        </>
    )
}

export default ListProducts