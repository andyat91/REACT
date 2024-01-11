import "./card.css";

export default function Card() {

    return(

        <div className="card">
        
             <img src="/src/assets/images/jumbotronarreglado.jpg"/>         {/*"${json[i].foto}"  */}
            <div className="paddingcard">
                 <h4>NOMBRE </h4>                 {/* ${json[i].nombre} */}
                    <div className="nombreprecio">
                        <div>
                            <h5>38.20<i className="bi bi-currency-euro m-color"></i></h5>       {/*  ${json[i].precio} */}
                        </div>
                    <div className="valoracion">
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                        <i className="bi bi-star"></i>
                    </div>
                     <p>Producto muy guay qeu tiene pecha de cosas, mu guay</p>                                                               {/*  ${json[i].descripcioncorta} */}
                    <div>
                        <button onClick="addProducto(${json[i].id})" className="btn">Añadir al carrito</button>
                        <a href="/html/descripcion.html?productoid=${json[i].id}" className="btn" >VER</a>
                    </div>  
            </div>
            </div>
        </div>    
    
    )
}