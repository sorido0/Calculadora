function Imagen(prosp) 
{
    return(
        <div className='contenedorImagen'>
    (<img className='imagen-logo'
    src={require(`../imagenes/${prosp.imagen}.png`)} alt='imagenyo'/>  ) 
    </div>
    )
}
export default Imagen;