import {Header, Home, About, Skills, Services, Qualification, Contact, Work} from './componants'
import {BrowserRouter, Routes, Route}from 'react-router-dom';

function App() {
  

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={[<Home key={1}/>,<About  key={2}/>, <Skills key={3}/>, <Services key={4}/>, <Qualification key={5} />, <Work key={6} /> , <Contact key={7} />]} />
      <Route path="/about" element={[<About key={1}/>,<Qualification key={2} />]} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
