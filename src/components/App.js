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
    const { id, name, job, image, text } = reviews[index]; // WHy we written index in reviews[index] because we want to access the current review based on the index state

    // Helper function to keep the index within bounds
    const checkNumber = (number) => {
        if(number > reviews.length - 1) return 0; // If number exceeds the last index, wrap around to the first index
        if(number < 0) return reviews.length - 1; // If number is less than 0, wrap around to the last index
        return number; // Otherwise, return the number as is
    };

    // Function to go to the next review
    const nextPerson = () => {
        setIndex((index) => {
            return checkNumber(index + 1); // Increment the index and check if it's within bounds
        });
    };

    // Function to go to the previous review
    const prevPerson = () => {
        setIndex((index) => {
            return checkNumber(index - 1); // Decrement the index and check if it's within bounds
        })
    }

    // Function to go to a random review
    const randomPerson = () => {
        let randomIndex = Math.floor(Math.random() * reviews.length); // Generate a random index
        if(randomIndex === index) {
            randomIndex = index + 1; // If the random index is the same as the current index, increment it
        }
        setIndex(checkNumber(randomIndex)); // Set the index to the random index and check if it's within bounds))
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