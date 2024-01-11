export default function Jumbotron() {

    return(

        <section className="jumbotron ">

        <div id="carouselExampleCaptions" className="carousel slide selector ">
          <div className="carousel-indicators wrap">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active wrap" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="/src/assets/images/jumbotronarreglado.jpg" className="d-block w-100" alt="Imagen Jumbotron1" />

              <div className="carousel-caption d-none d-md-block">
                <h5>Libre de culpa, libre de alergenos</h5>
                <p>Conoce nuestra gran variedad de productos</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/images/jumbotronhogaza.jpg" className="d-block w-100" alt="Imagen Jumbotron"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Especialistas en pan</h5>
                <p>Prueba ahora nuestros panes: hogaza, molde, tradicional, dulce.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/src/assets/images/jumbotronpasta1.jpeg.jpg" className="d-block w-100" alt="Imagen Jumbotron"/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Pastas y salsas</h5>
                <p>Comida autentica al mejor precio</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </section>
      
    )
}