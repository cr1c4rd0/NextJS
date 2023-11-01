const MyButton = () => {
    return(
        <button>Soy un botón</button>
    );
};

const App = () => {
    // interpolación: expresiones y variables de javascript dentro de un componente React
    const title = "una constante";
    //para retornar más de un elementos hay que hacer un contenedor entre ();
    return (
    // Fragment <> </> para hacer un componente contenedor es como un div invisible    
    <>
        <h1 className="text-center">{title.toLocaleUpperCase()}</h1>
        <img  src="https://picsum.photos/200/300" alt="" />
        <MyButton></MyButton>
    </>
    );
};

export default App;