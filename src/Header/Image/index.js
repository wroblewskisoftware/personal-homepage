import myImage from "../../images/image.jpg";
import { StyledImage } from "./styled";

const Image = () => (
  <StyledImage
    width="384"
    height="384"
    src={myImage}
    alt="Mężczyzna nad jeziorem"
  />
);

export default Image;
