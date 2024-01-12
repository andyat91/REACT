import "./card.css";
import products from "../../bbdd/Products";
export default function Card() {

    

    return(
        
        <div className="main-cards">
            {products.map(product => 
        <div className="card" key={product.id}>
        
             <img src={product.foto}/>         {/*"${json[i].foto}"  */}
            <div className="paddingcard">
                 <h4>{product.nombre}</h4>                 {/* ${json[i].nombre} */}
                    <div className="nombreprecio">
                        <div>
                            <h5>{product.precio}<i className="bi bi-currency-euro m-color"></i></h5>       {/*  ${json[i].precio} */}
                        </div>
                    <div className="valoracion">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                     <p>{product.descripcioncorta}</p>                                                               {/*  ${json[i].descripcioncorta} */}
                    <div>
                        <button onClick="addProducto(${json[i].id})" className="btn">Añadir al carrito</button>
                        <a href="/html/descripcion.html?productoid=${json[i].id}" className="btn" >VER</a>
                    </div>  
            </div>
            </div>
        </div>
        )} 
        </div>   
    
    )
}