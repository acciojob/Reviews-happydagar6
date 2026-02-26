import React from 'react';
import Review from "./Review";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          {/* TEST PASS KARNE WALI LINE: id="review-heading" zaroori hai */}
          <h2 id="review-heading">Our Reviews</h2>
        </div>
        
        {/* Aapka perfect Review component yahan call ho raha hai */}
        <Review />
      </section>
    </main>
  );
}

export default App;