import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
	...SectionSplitProps.types,
};

const defaultProps = {
	...SectionSplitProps.defaults,
};

const FeaturesSplit = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	invertMobile,
	invertDesktop,
	alignTop,
	imageFill,
	...props
}) => {
	const outerClasses = classNames(
		"features-split section",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"features-split-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	const splitClasses = classNames(
		"split-wrap",
		invertMobile && "invert-mobile",
		invertDesktop && "invert-desktop",
		alignTop && "align-top"
	);

	const sectionHeader = {
		title: "Timeline of events",
		paragraph:
			"This is a recap of the escalating violence since heavy exchanges of fire began on May 10.",
	};

	return (
		<section {...props} className={outerClasses}>
			<div className="container">
				<div className={innerClasses}>
					<SectionHeader data={sectionHeader} className="center-content" />
					<div className={splitClasses}>
						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									May 10, 2021
								</div>
								<h3 className="mt-0 mb-12">Gaza Attacks</h3>
								<p className="m-0">
									Gaza's Islamist rulers Hamas launch volleys of rockets towards
									Israel in "solidarity" with Palestinians in annexed east
									Jerusalem. Israel responds with deadly strikes on the
									Palestinian enclave.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/tile1.webp")}
									alt="Features split 01"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-right"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									May 11-12, 2021
								</div>
								<h3 className="mt-0 mb-12">Air strike and it's retaliation</h3>
								<p className="m-0">
									Hamas rains rockets down on Tel Aviv after an Israeli air
									strike destroys a Gaza City tower block where senior Hamas
									officials are said to have offices. State of emergency is
									declared in Lod near Tel Aviv
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/tile2.webp")}
									alt="Features split 02"
									width={528}
									height={396}
								/>
							</div>
						</div>

						<div className="split-item">
							<div
								className="split-item-content center-content-mobile reveal-from-left"
								data-reveal-container=".split-item"
							>
								<div className="text-xxs text-color-primary fw-600 tt-u mb-8">
									uptil May 19th
								</div>
								<h3 className="mt-0 mb-12">Death toll</h3>
								<p className="m-0">
									With no sign of a let up, at least 212 Palestinians in the
									crowded coastal enclave of Gaza have so far been killed,
									including 61 children. More than 1,300 have been injured.
									Israel's army says over 3,220 rockets have now been fired from
									Gaza, killing 10 people, including one child, and injuring
									almost 300.
								</p>
							</div>
							<div
								className={classNames(
									"split-item-image center-content-mobile reveal-from-bottom",
									imageFill && "split-item-image-fill"
								)}
								data-reveal-container=".split-item"
							>
								<Image
									src={require("./../../assets/images/tile3.webp")}
									alt="Features split 03"
									width={528}
									height={396}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
