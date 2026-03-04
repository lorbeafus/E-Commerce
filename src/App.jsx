import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
    return (
        <>
            <NavBar />
            <main className="main-content">
                <ItemListContainer greeting="¡Bienvenidos a nuestra tienda de cursos de programación e informática!" />
            </main>
        </>
    )
}

export default App
