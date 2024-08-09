import { CardReview, SwiperReviews } from "../../components";

const testimonials = [
    {
        body: 'BigBrothersCT transformed my home! I couldn\'t be happier with the spotless results.',
        name: 'Emily H.',
        handle: '2024-01-12',
        imageUrl: '/cliente-2.jpg',
    },
    {
        body: 'Amazing service! My apartment looks brand new after every cleaning.',
        name: 'David S.',
        handle: '2024-02-12',
        imageUrl: '/cliente-1.jpg',
    },
    {
        body: 'BigBrothersCT is reliable, thorough, and professional. Highly recommend!',
        name: 'Lisa K.',
        handle: '2024-03-12',
        imageUrl: '/cliente-6.jpg',
    },
    {
        body: 'They go above and beyond! My house has never been cleaner.',
        name: 'Mark D.',
        handle: '2024-04-12',
        imageUrl: '/cliente-7.jpg',
    },
    {
        body: 'Quick, efficient, and always leave my home sparkling. BigBrothersCT is the best!',
        name: 'Rachel F.',
        handle: '2024-05-12',
        imageUrl: '/cliente-5.jpg',
    },
    {
        body: 'I can always count on BigBrothersCT for a deep clean that lasts.',
        name: 'Tom W.',
        handle: '2024-06-12',
        imageUrl: '/cliente-3.jpg',
    },
    {
        body: 'Incredible attention to detail! My home feels fresh and welcoming after every visit.',
        name: 'Susan M.',
        handle: '2024-07-12',
        imageUrl: '/cliente-4.jpg',
    },
    {
        body: 'BigBrothersCT never disappoints. Their service is top-notch every time.',
        name: 'Paul J.',
        handle: '2024-08-12',
        imageUrl: '/cliente-8.jpg',
    },
    {
        body: 'Friendly staff, impeccable cleaning. BigBrothersCT has earned my trust.',
        name: 'Amanda L.',
        handle: '2024-09-12',
        imageUrl: '/cliente-9.jpg',
    },
];


export default function pageTestimonials() {
    return (
        <main className="bg-black py-24 sm:py-32">
            <div className="px-6 lg:px-8 md:w-8/12 md:mx-auto">
                <h1 className="font-bold text-lg text-white md:text-2xl lg:text-5xl border-b-4 w-fit border-b-green-600">Client Reviews</h1>
                <p className="text-white md:text-xl lg:text-2xl mt-5">Our clients praise us for great results, a healthier alternative and reliable service. Read what a few of our customers had to say:</p>
                <div>
                    <SwiperReviews />
                </div>
            </div>
            <div className="mx-auto md:w-10/12 md:mx-auto px-6 lg:px-8">
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial, index) => (
                            <CardReview key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
