function TituloCapsLock (props){
  const texto = props.texto
  const textoTransformado = texto.toUpperCase()
  return(
    <h2>{textoTransformado}</h2>
  )
}

export default TituloCapsLock


{/*function TituloCapsLock(props) {
    const textoInserido = props.nomeDoBts; //funcionalidade
    const textoTransformado = textoInserido.toUpperCase();
    return(
      <h2>{textoTransformado}</h2> //na tag html
  )
}
TituloCapsLockAula/ */}