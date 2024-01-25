

export default function Square({ value , onCLickSquare }) {

  



    return(
        <button className="cuadrado"
                onClick={onCLickSquare}>{value} </button>
    )
}