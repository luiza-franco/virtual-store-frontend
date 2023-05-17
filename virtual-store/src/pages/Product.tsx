import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

import styles from './Product.module.css'

interface Product {
    id: string,
    description: string;
    value: number;
    image: string;
    title: string;
    quantity: number;
}

function Product() {

    const [product, setProduct] = useState<Product>({ id: '', description: '', value: 0, image: '', title: '',quantity: 0 })

    const { id } = useParams()

    async function loadProduct() {
        const response = await axios.get(`http://localhost:3333/products/${id}`)
        setProduct(response.data)
    }

    function handleAddToCart(product:Product, quantity:number) {
        const products = localStorage.getItem('products');
        
        //pegar os produtos do localstorage OK
        //verificar no array de produtos se o produto que o usuario quer adicionar já existe no array OK
        //se existir, adicionar uma quantidade ao produto já existente OK
        //se não existir adicionar um produto com a quantidade específica OK
    
        if (products) {
            const productsArray = JSON.parse(products) //criação da const que recebe os produtos e depois transforma em objeto
            let productExisting = false;
            for(let i = 0; i < productsArray.length; i++) { //percorre todos os produtos do array
                if(productsArray[i].id === product.id) {    //verificando se o produto adicionado é igual ao existente
                    productExisting = true;                 //se for igual é true
                    productsArray[i].quantity += quantity;  //e soma a quantidade adicionada a propriedade quantity
                }
            } if (!productExisting) {                       //se for falsa n existe no array
                product.quantity = quantity;                //a quantity passa a ser a quantity do product
                productsArray.push(product)                 //o produto é adicionado no final do array
            }
            localStorage.setItem('products', JSON.stringify(productsArray)); //array é atualizado(em string) e atualizado localStorage
        } 
        else {
            product.quantity = quantity                     //caso n exista produtos no storage
            localStorage.setItem('products', JSON.stringify([product])) //é criado um array com um produto e a quantidade dada
        }
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
            <div className={styles.button}>
                <button onClick={() => handleAddToCart(product, 1)}>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    )
}

export default Product