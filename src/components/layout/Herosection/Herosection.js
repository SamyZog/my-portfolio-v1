import { RiChat4Line, RiHeart3Fill, RiProfileLine } from "react-icons/ri";
import Basebutton from "../../common/actions/buttons/Basebutton/Basebutton";
import Hstack from "../../common/blocks/Hstack/Hstack";
import Vstack from "../../common/blocks/Vstack/Vstack";
import Section from "../../common/Section/Section";
import Text from "../../common/typography/Text/Text";
import styles from "./Herosection.module.scss";

const Herosection = (props) => {
	return (
		<Section>
			<Vstack className={styles.Herosection}>
				<Text>Hello, my name is</Text>
				<Text as="h1">Samy Zogeyb,</Text>
				<Text as="h2">
					I <RiHeart3Fill title="Love" /> creating awesome stuff for the Web
				</Text>
				<Text>
					I&apos;m a <strong>Front-End Developer</strong> that loves making awesome things with{" "}
					<strong>JavaScript</strong> & <strong>React</strong>
				</Text>
				<Hstack className={styles.calltoaction}>
					<Basebutton as="a" href="#contact">
						CONTACT ME <RiChat4Line />
					</Basebutton>
					<Basebutton as="a" href="/">
						DOWNLOAD CV <RiProfileLine />
					</Basebutton>
				</Hstack>
			</Vstack>
		</Section>
	);
};

export default Herosection;