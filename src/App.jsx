import CartWidget from './component/CartWidget/CartWidget'
import NavBar from './component/NavBar/NavBar'
import ItemListContainers from './containers/ItemListContainers'

function App() {
  return (
    <>
      <div>
        <CartWidget/>
        <NavBar/>
        <ItemListContainers text="  hola soy ItemListContainers el hijo de app"/>
      </div>
  
    </>
  )
}

export default App
