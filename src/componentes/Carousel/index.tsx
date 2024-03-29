import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import image1 from "@src/assets/image1.png";
import image2 from "@src/assets/image2.png";
import image3 from "@src/assets/image3.png";
import styles from "./Carousel.module.css";
/* 
Carossel com a biblioteca awasome slider,foi usado o css module para o style
*/
export const Carousel = () => {
  return (
    <AwesomeSlider className={styles.aws} mobileTouch={true}>
      <div data-src={image1} data-alt="Bem vindo ao site"/>
      <div data-src={image2} data-alt="Uma loja da starbucks"/>
      <div data-src={image3} data-alt="Copo da starbucks"/>
    </AwesomeSlider>
  );
};
export default Carousel;
