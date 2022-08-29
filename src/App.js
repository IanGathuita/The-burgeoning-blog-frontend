import { Home } from './Components/Home/Home';
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { NavBar } from './Components/NavBar/NavBar';
import { Blogs } from './Components/Blogs/Blogs';
import { Blog } from './Components/Blog/Blog';
import { About } from './Components/About/About';
import { Create } from './Components/Create/Create';
import { Search } from './Components/Search/Search';
import { PageNotFound } from './Components/404/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <NavBar></NavBar>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='blogs' element={<Blogs/>}/>
        <Route path='blogs/:blogId' element = {<Blog/>}/>
        <Route path='about' element={<About/>} />
        <Route path='create' element={<Create/>} />
        <Route path='search' element={<Search/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
