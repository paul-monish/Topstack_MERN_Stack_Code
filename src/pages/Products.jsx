import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../services/product-service'
import Loader from '../components/Loader';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(null);
    useEffect(() => {
        (
            async () => {
                setLoading(true);
                try {
                    const data = await getProducts();
                    setProducts(data);
                } catch (error) {
                    setError(error);
                }
                finally{
                    setLoading(false);
                }
            }
        )()
    }, [])

    return (
        <>
            {
                loading ? (
                    <Loader/>
                ) : (
                   error?(
                        <div>{error}</div>
                   ):(
                    products.map((prod) => (
                        <ProductCard key={prod.id} prod={prod} />
                    ))
                   )
                )
            }

        </>
    )
}

export default Products