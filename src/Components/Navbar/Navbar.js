import React from "react";
import logo from "../../assets/logo.png";



const Navbar = ({nombre, apellido, id, children }) => {

    const categorias = [ 
        { id: 0, nombre: 'Categoria 1 ' },
        { id: 1, nombre: 'Categoria 2 ' },
        { id: 2, nombre: 'Categoria 3 ' },
        { id: 3, nombre: 'Categoria 4 ' },
    ]
    
    return (
        <>
        <header style={styles.container}>
            <img style={imagen.container2} src={logo} alt="logo" />
            <h1>Título de prueba</h1>
            <Navbar categorias={categorias}/>
        </header>
        </>
    )
}

const styles = {
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

const imagen = {
    container2:{
        width: '8%'
    }
}

const links = {
    container3:{
        padding: 10,
    }
}

export default Navbar