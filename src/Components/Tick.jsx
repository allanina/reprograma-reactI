function Tick(){
  let horaLocal = new Date().toLocaleTimeString()
  return(
    <div>
      <h2>Exemplo 6</h2>
      <p>{horaLocal}</p>
    </div>
  )
}

export default Tick