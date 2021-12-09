import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionTilesProps.types,
};

const defaultProps = {
	...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	pushLeft,
	...props
}) => {
	const outerClasses = classNames(
		"features-tiles section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-tiles-inner section-inner pt-0",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const tilesClasses = classNames(
		"tiles-wrap center-content",
		pushLeft && "push-left"
	);

	const sectionHeader = {
		title: "#AdoptLove",
		paragraph: "Approximately 1478 dogs & cats die every day on road in India. Tails N' Roses is on a mission to provide every dog and cat a home before 2035.",
	  subheading: "Here's how you can adopt!"
  };

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={tilesClasses}>
						<div className="tiles-item reveal-from-bottom">
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require('./../../assets/images/feature-tile-icon-01.svg')}
											alt="Features tile icon 01"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Why adopt?</h4>
									<p className="m-0 text-sm">
									Did you know that over 2000 people per hour in India run a search right here looking to adopt a pet? Pet adoption is becoming the preferred way to find a new pet. 
									</p>
								</div>
							</div>
						</div>

						<div
							className="tiles-item reveal-from-bottom"
							data-reveal-delay="200"
						>
							<div className="tiles-item-inner">
								<div className="features-tiles-item-header">
									<div className="features-tiles-item-image mb-16">
										<Image
											src={require("./../../assets/images/feature-tile-icon-02.svg")}
											alt="Features tile icon 02"
											width={64}
											height={64}
										/>
									</div>
								</div>
								<div className="features-tiles-item-content">
									<h4 className="mt-0 mb-8">Re-Home</h4>
									<p className="m-0 text-sm">
									

Hundreds of pets are abandoned and rescued in India everyday. Although there are many wonderful souls across the nation who work extra hours and put in efforts beyond their capacity, there is always a shortage of funding and communication across the animal activist circuit.
Every Pet Deserves a Good Home. #Adoptlove
									</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
