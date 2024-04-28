const reviewData = [
  {
    user_name: "John Doe",
    user_image: "https://example.com/user1.jpg",
    rating: 5,
    review_text:
      "Absolutely stunning craftsmanship! The attention to detail is remarkable. I couldn't be happier with my purchase.",
  },
  {
    user_name: "Emily Smith",
    user_image: "https://example.com/user2.jpg",
    rating: 4,
    review_text:
      "Beautiful designs and excellent quality. I love the unique pieces available in the collection.",
  },
  {
    user_name: "Michael Johnson",
    user_image: "https://example.com/user3.jpg",
    rating: 5,
    review_text:
      "Fantastic customer service! The team was extremely helpful and went above and beyond to ensure I found the perfect piece for my home.",
  },
];

function Choose() {
  return (
    <div>
      <h2>Testimonials</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {reviewData.map((review, i) => (
          <div key={i} className="col-span-1">
            <img src={review.user_image} alt="" />
            <h3>{review.user_name}</h3>
            <p>{review.rating}</p>
            <p>{review.review_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choose;
