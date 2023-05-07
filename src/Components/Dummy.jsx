import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Dummy() {
 
    const [data, setData] = useState([]);

    const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

    let componentMounted = true;

    useEffect(() => {
      const getProducts = async () => {
        setLoading(true);
        const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
        if (componentMounted) {
          setData(await response.clone().json());
          console.log(await response.clone().json());
          setFilter(await response.json());
          setLoading(false);
          console.log(filter);
        }
  
        return () => {
          componentMounted = false;
        };
      };
      getProducts();
    }, []);

    // const filterProduct = (cat) =>{
    //     const updatedList = data.filter((x)=>x.category === cat);
    //     setFilter(updatedList)
    //   }

    const ShowProducts = () => {
        return (
          <>
            
            {filter.map((data) => {
              return (
                <>
                  <div className="col-md-3 mb-4">
                    <div className="card h-100 text-center p-4 " key={data.id} >
                      <img src={data.show.image} className="card-img-top" alt={data.name} height="250px"/>
                      <div className="card-body">
                        <h5 className="card-title mb-0 fs-5">{data.show.name}</h5>
                        <p>{data.show.language}</p>
                        <p>{data.show.type}</p>
                        <Button ><Link to= {`/movie/${data.show.id}`} className="card-text lead fw-bold"  id="but2">
                         BUY NOW
                        </Link></Button>
                        {/* <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                          BUY NOW
                        </Link> */}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </>
        );
      };
    
      return (
        <>
          <div className="container my-5 py-5">
            <div className="row">
              <div className="col-12 mb-5">
                <h1
                  className="display-6 fw-bolder
                text-center"
                >
                  LATEST MOVIES
                </h1>
              </div>
              <div className="row justify-content-center">
                {/* {loading ? <Loading /> : <ShowProducts />} */}
                <ShowProducts/>
              </div>
            </div>
          </div>
        </>
      );
    }
    

    

export default Dummy