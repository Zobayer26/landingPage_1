import Banner from "./components/Banner"
import Categories from "./components/Categories"
import CategoryProduct from "./components/CategoryProduct"
import Contact from "./components/Contact"
import Header from "./components/Header"


function App() {
  return (
    <div  className=" max-w-[1440px] mx-auto">
      <Header/>
      <Banner/>
      <Categories/>
      <CategoryProduct/>
      <Contact/>
    </div>
  )
}

export default App