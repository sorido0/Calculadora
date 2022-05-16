import'../Estilos/Limpiar.css'

const BotonLimpiar = (props) => (
    <div className="boton-limpiar" 
    //llamar a la funcion dentro del boton
    onClick={props.menejarLimiar}>
        {props.children}
    </div>
)

export default BotonLimpiar;