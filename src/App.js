import './App.css';
import Nav from './components/nav.js'  ; 
import Home from './components/home.js';
import Footer from './components/footer.js';
import Members from './components/members.js';
import Content_Manager from './components/content_add.js';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";






function App() {
  
  return (
  <>
  
    <Router>
    <Nav/> 

    <section style={{minHeight:' 78vh', height: '84vh', overflow:"hidden", overflowY:"scroll"}}>
    <Routes>
        {/* add routes here */}

        <Route path='/' element={<Home/>}></Route>
        <Route path='/Members' element={<Members/>}></Route>
        <Route path='/contentManager' element={<Content_Manager/>}></Route>
      
        {/* <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/Type_text' element={<Text/>}></Route>
        <Route path='/Forms' element={<Form/>}></Route> */}
      </Routes>
   
    </section>
    <Footer/>
    </Router>
    

</>
    
  );
}

export default App;
 


  
  