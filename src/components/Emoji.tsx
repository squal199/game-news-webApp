/** @format */

import { Image } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumpsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: {} } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumpsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
