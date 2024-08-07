import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

export const CardReview = ({ testimonial }) => {
    return (
        <div className="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure className="rounded-2xl bg-[#1A1A1A] p-8 text-sm leading-6">
                <blockquote className="text-gray-900">
                    <p className="text-white">{`“${testimonial?.body}”`}</p>
                </blockquote>
                <div className="flex items-center gap-2 mt-3">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                </div>
                <figcaption className="mt-6 flex items-center justify-between gap-x-4">
                    <div className="flex items-center gap-2">
                        <img alt="" src={testimonial?.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                        <div>
                            <div className="font-semibold text-white">{testimonial?.name}</div>
                            <div className="text-white">{`${testimonial?.handle}`}</div>
                        </div>
                    </div>
                    <Image src={"/google.png"} width={40} height={40} alt="Reseña de Google" title="Icono de Google" />
                </figcaption>
            </figure>
        </div>
    )
}
