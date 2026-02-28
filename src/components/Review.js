import React, { useState } from 'react';

// Hamara provided data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

const Review = () => {
  // State to keep track of the current review index
  const [index, setIndex] = useState(0);
  // Destructure the current review data
  const { name, job, image, text, id } = reviews[index];

  // Helper function to keep the index within bounds
  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1; // Wrap around to the last review
    }
    return number;
  };

  // Function to go to the next review
  const nextPerson = () => {
    setIndex((index) => checkNumber(index + 1));
  } 
  // Function to go to the previous review
  const prevPerson = () => {
    setIndex((index) => checkNumber(index - 1));
  }

  // Function to go to a random review
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * reviews.length);

    // Ensure we don't get the same review again
    if(randomIndex === index) {
      randomIndex = index + 1; // Ensure we get a different review
    }
    setIndex(checkNumber(randomIndex));
  };



  return (
    <article className="review">
      <div className="img-container">
        {/* Requirement: className="person-img" */}
        <img src={image} alt={name} className="person-img" />
      </div>
      
      {/* Requirement: className="author" and id="author-id" */}
      <h4 className="author" id={`author-${id}`}>{name}</h4>
      
      {/* Requirement: className="job" */}
      <p className="job">{job}</p>
      
      {/* Requirement: className="info" */}
      <p className="info">{text}</p>
      
      <div className="button-container">
        {/* Requirement: className="prev-btn" and "next-btn" */}
        <button className="prev-btn" onClick={prevPerson}>Prev</button>
        <button className="next-btn" onClick={nextPerson}>Next</button>
      </div>
      
      {/* Requirement: className="random-btn" and text "surprise me" */}
      <button className="random-btn" onClick={randomPerson}>surprise me</button>
    </article>
  );
};

export default Review;