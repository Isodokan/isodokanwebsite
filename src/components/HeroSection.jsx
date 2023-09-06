import "../css/index.css";
import hero from "../assets/hero.svg";
export default function Hero() {
  return (
    <div className='hero-section'>
      <h2>
        This here is for simple notifications you want your users to get aware
        of. It is easily removeable when users click on the close icon
        <img src={hero} alt='' className='hero-svg' />
      </h2>
    </div>
  );
}
