import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import PropTypes from "prop-types";

const testimonialList = [
	{
		author: {
			fullName: "Paul Hindes",
			picture: "https://cdn.easyfrontend.com/pictures/users/user17.jpg",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"I haven't changed my room layout for 5 years, but this app may change that. Great job.",
	},
	{
		author: {
			fullName: "Eve Porcello",
			picture: "https://cdn.easyfrontend.com/pictures/users/user8.jpg",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"You can now see your rooms in different themes before you renovate. How cool is that!",
	},
	{
		author: {
			fullName: "Rob Attfield",
			picture: "https://cdn.easyfrontend.com/pictures/users/user18.jpg",
			designation: "Founder / CEO",
		},
		rating: 5,
		description:
			"InteriorGPT - was using this today - the best AI room photo reimaginer I have seen! Will be using it again in the future.",
	},
];

const Rating = ({ rating, showLabel, className, ...rest }: {rating: number, showLabel: boolean, className?: string, rest?: any}) => (
	<div className={classNames("mb-6 flex justify-center", className)} {...rest}>
		<p className="flex items-center">
			{[...Array(5)].map((_, i) => {
				const index = i + 1;
				let content: JSX.Element | string = "";
				if (index <= Math.floor(rating))
					content = (
						<FontAwesomeIcon icon={faStar} className="text-yellow-500 h-4" />
					);
				else if (rating > i && rating < index + 1)
					content = (
						<FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-500 h-4"  />
					);
				else if (index > rating)
					content = (
						<FontAwesomeIcon
							icon={faStar}
							className="text-yellow-200 dark:text-opacity-20 h-4"
						/>
					);

				return <Fragment key={i}>{content}</Fragment>;
			})}
		</p>
		{showLabel && <span>{rating.toFixed(1)}</span>}
	</div>
);

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
	showLabel: PropTypes.bool,
	className: PropTypes.string,
};

const TestimonialItem = ({ testimonial } : { testimonial: any }) => (
	<div className="bg-slate-800 shadow-xl  rounded-2xl transition duration-300 h-full p-6">
		<img
			src={testimonial.author.picture}
			alt={testimonial.author.fullName}
			className="max-w-full h-auto rounded-full mx-auto"
			width="120"
		/>
		<div className="mt-4">
			<h4 className="text-2xl font-medium mb-1">
				{testimonial.author.fullName}
			</h4>

			<Rating rating={testimonial.rating} showLabel={false} />

			<p className="opacity-50 mb-0">{testimonial.description}</p>
		</div>
	</div>
);

TestimonialItem.propTypes = {
	testimonial: PropTypes.object.isRequired,
};

const Testimonials = () => {
 
	return (
		<section className="ezy__testimonial5 light py-14 md:py-24  text-white">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center md:mb-6">
					<div className="sm:max-w-lg text-center">
						<h2 className="text-3xl leading-none md:text-[45px] font-bold mb-4">
							Loved by many <span className="text-blue-600">Worldwide.</span>
						</h2>
						
					</div>
				</div>

				<div className="grid grid-cols-6 gap-6 text-center pt-12 lg:pt-6">
					{testimonialList.map((testimonial, i) => (
						<div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
							<TestimonialItem testimonial={testimonial} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};


export default Testimonials

