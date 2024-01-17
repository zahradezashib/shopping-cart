import { Container } from "react-bootstrap"
import {CartProvider} from './context/CartContext'
import Navbar from "./components/Navbar"
import Shopp from "./components/Shopp"

function App(){
  return(
    <CartProvider>
     <Container>
       <Navbar></Navbar>
       <Shopp></Shopp>
     </Container>
    </CartProvider>
  )
}
export default App