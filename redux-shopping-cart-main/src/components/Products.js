import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    
        const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const [productes, setProducts] = useState([]);


    const menuItems = [...new Set(productes.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = productes.filter((newVal) => {
          return newVal.category === curcat; 
                // comparing category for displaying data
        });
          setProducts(newItem)
      };

    useEffect(() => {
        dispatch(fetchProducts());
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data);
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }
    return (
        
        <div>
       <div>
       {menuItems.map((Val, id) => {
          return (
            <button  className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn" key={id} onClick={() => filterItem(Val)}>{Val}</button>
         );
        })}
         <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setProducts(products)}>categorys</button>
       

       </div>
        
        <div className="productsWrapper">
            {productes.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>price:<span>{product.price}</span></h5>
                     <h6>category:<span>{product.category}</span></h6>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default Products;
