import { FaStar } from "react-icons/fa";

const reviewData = [
  {
    user_name: "John Doe",
    user_image: "https://i.ibb.co/LznTvKz/reviewer1-1.jpg",
    rating: 5,
    review_text:
      "Absolutely stunning craftsmanship! The attention to detail is remarkable. I couldn't be happier with my purchase.",
  },
  {
    user_name: "Emily Smith",
    user_image: "https://i.ibb.co/9rvtqBH/reviewer2-1.jpg",
    rating: 4,
    review_text:
      "Beautiful designs and excellent quality. I love the unique pieces available in the collection.",
  },
  {
    user_name: "Michael Johnson",
    user_image: "https://i.ibb.co/kKZXM3v/reviewer3-1.jpg",
    rating: 5,
    review_text:
      "Fantastic customer service! The team was extremely helpful and went above and beyond to ensure I found the perfect piece for my home.",
  },
];

function Choose() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl text-center font-semibold mb-8">Testimonials</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewData.map((review, i) => (
          <div key={i} className="col-span-1 border-2 p-4 rounded-lg">
            <img
              src={review.user_image}
              alt=""
              className="h-72 w-full object-cover object-center rounded-lg"
            />
            <h3 className="text-2xl font-semibold mt-4">{review.user_name}</h3>
            <div className="flex gap-2 text-yellow-500 my-4 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="max-w-sm font-medium">{review.review_text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Choose;
