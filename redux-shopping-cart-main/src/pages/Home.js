import { useDispatch, useSelector  } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../store/productSlice';
import { add } from '../store/cartSlice';
import { STATUSES } from '../store/productSlice';
import Filter from '../components/Filter';
const Home = () => {

    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const [filter,setFilter]=useState('');
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
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase())
    );
    return (
        <div>
            <h2 className="heading">Welcome to my store</h2>
            <Filter setFilter={setFilter}/>
            <div className="productsWrapper">
            {
    filteredProducts.length === 0 ? (
        <h2>No matching products found.</h2>
    ) : (
        filteredProducts.map((product) => (
            <div className="card" key={product.id}>
                <img src={product.image} alt="" />
                <h4>{product.title}</h4>
                <h5>price:<span>{product.price}</span></h5>
                <h6>category:<span>{product.category}</span></h6>
                <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
            </div>
        ))
    )
}
</div>
            <section>
                <h3>Products</h3>
                <div className="productsWrapper">
            {products.map((product) => (
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
            </section>
           

        </div>
    );
};

export default Home;
// Home.js

// Home.js

/*import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { add, increaseQuantity, decreaseQuantity } from '../store/cartSlice';
import { STATUSES } from '../store/productSlice';
import Filter from '../components/Filter';

// Product component for displaying individual products
const ProductCard = ({ product, handleAdd }) => (
    <div className="card" key={product.id}>
        <img src={product.image} alt="" />
        <h4>{product.title}</h4>
        <h5>Price: <span>{product.price}</span></h5>
        <h6>Category: <span>{product.category}</span></h6>
        <button onClick={() => handleAdd(product)} className="btn">
            Add to cart
        </button>
    </div>
);

// CartItem component for displaying individual cart items
const CartItem = ({ cartItem, handleIncreaseQuantity, handleDecreaseQuantity }) => (
    <div key={cartItem.id} className="cartItem">
        <img src={cartItem.image} alt="" />
        <h4>{cartItem.title}</h4>
        <p>Price: ${cartItem.price}</p>
        <p>Quantity: {cartItem.quantity}</p>
        <button onClick={() => handleIncreaseQuantity(cartItem.id)}>+</button>
        <button onClick={() => handleDecreaseQuantity(cartItem.id)} disabled={cartItem.quantity === 1}>-</button>
    </div>
);


const Home = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    const { cart } = useSelector((state) => state.cart);
    const [filter, setFilter] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleAdd = (product) => {
        dispatch(add(product));
    };

    const handleIncreaseQuantity = (productId) => {
        dispatch(increaseQuantity(productId));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    if (status === STATUSES.LOADING) {
        return <h2>Loading....</h2>;
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong!</h2>;
    }

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div>
        <h2 className="heading">Welcome to my store</h2>
        <Filter setFilter={setFilter} />

        <section>
            <h3>Products</h3>
            <div className="productsWrapper">
                {filteredProducts.length === 0 ? (
                    <h2>No matching products found.</h2>
                ) : (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} handleAdd={handleAdd} />
                    ))
                )}
            </div>
        </section>

        <section>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((cartItem) => (
                        <CartItem
                            key={cartItem.id}
                            cartItem={cartItem}
                            handleIncreaseQuantity={handleIncreaseQuantity}
                            handleDecreaseQuantity={handleDecreaseQuantity}
                        />
                    ))
                )}
            </div>
        </section>
    </div>
);
};

export default Home*/