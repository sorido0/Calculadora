function Boton(props)
{ 
    // solo mente sera un operador cuando es diferente de un valor numerico, punto o signo de igual.
    const esOperador = valor  => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')
    };
    // props.chidren es para obtemer el valor retornable del componente
    return(
        <button className={`boton-contenedor 
        ${esOperador(props.children) ? 'operador' : null}`}
        onClick={() =>  props.manejarClic(props.children)}> 
            {props.children}
        </button>
    );
}
export default Boton;

