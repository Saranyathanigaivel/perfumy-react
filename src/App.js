import Navbar from "./components/Navbar"
import Search from "./components/Searchbar"
import Product from "./components/Product"
import Aboutus from "./components/Aboutus"
import Footer from "./components/footer"

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </>
    )
}
export default App