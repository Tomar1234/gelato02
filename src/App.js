import React from 'react';
import Why_Choose_Gelato from './Components/Content/Why_Choose_Gelato';
import Header from './Components/Header';

import Footer from './Components/Footer';
function App() {
  return (
    <div>
      {/* <Header /> */}
      <main>
        {/* <section className="hero">
          <div className='image-container'>
          <h1>Print on demand for your ecommerce business</h1>
          <img src = "./images/img1.png" />
      
          </div>
        </section> */}
        <Why_Choose_Gelato />

        {/* <ProductList /> */}
      </main>

      <Footer />
    </div>
  );
}

export default App;
