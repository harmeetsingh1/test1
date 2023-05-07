import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Movie() {
    const {id} = useParams();
   
    const [product, setProduct] = useState([])
    
 
    useEffect(() => {
     const getProduct = async () =>{
         
         const response = await fetch(`https://api.tvmaze.com/search/shows?q=all/${id}`);
         setProduct(await response.json());
         console.log(await response.json());
        
     }
      
         getProduct();
     }, []);
  
     const ShowProduct = () =>{
       
        return(
            <>
            <div className="col-md-6">
                <img src={product.image} alt={product.title} 
                height="400px" width="400px"/>
            </div>

            <div className="col-md-6">
                <h4 className='text-uppercase text-black-50'>
                    {product.id}
                </h4>

                <h1 className='display-5'>{product.title}</h1>

                <p className='lead fw-bolder'>
                    Rating{product.rating && product.rating.rate}
                </p>
                    <i className='fa fa-star'></i>

                    <h3 className='display-6 fw-bold my-4'>
                        ${product.price}
                    </h3>

                    <p className='lead'>{product.summary}</p>

                    <Button><Link to="/form" className="card-text lead fw-bold" id="but" >
                         BUY NOW
                        </Link></Button>
                     
                     {/* <button className="btn btn-outline-dark px-4 py-2"
                     onClick={()=>addProduct(product)}
                     >
                        Add To Cart
                     </button> */}
                    
                     {/* <Link to="/cart" className="btn btn-outline-dark ms-2 px-3 py-2">
                        Go To Cart
                     </Link> */}

            </div>
        
            </>
        )
    
    }
    
   
     return (
    
    <>
 <div className="container py-5">
        <div className="row py-4">
            <ShowProduct/>
        </div>
      </div>

    </>
    
  )
}

export default Movie
