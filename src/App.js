import TituloCapsLock from "./Components/TituloCapsLock";
import TituloChildren from "./Components/TituloChildren";
import Hello from "./Components/Hello";
import Tick from "./Components/Tick";


//o que precisar mostrar na tela, vem dentro do app.js 
function App() {
  return (
    <div>
    {/* ex 02  */}
    <h1>Hello React! (pelo app)</h1>

    {/* ex 03 */}

    <Hello texto="Hello por props" />

    {/* ex 04 */}

    <TituloCapsLock texto="Texto transformado por props" />

    {/* ex 05 */}
    <TituloChildren>Texto alterado pelo children</TituloChildren>

    {/* ex 06 */}
    <Tick />


    <img src="https://s2.glbimg.com/iKlAG_zisQLFhD1gs6QxZEkWLu8=/620x413/top/e.glbimg.com/og/ed/f/original/2021/04/29/image_XSBZkAA.png" alt="imagem do grupo de k-pop bts" />

    


    </div>
  );
}

export default App;
