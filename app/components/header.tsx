import { Inknut_Antiqua, Inria_Sans } from "next/font/google";

const inknut = Inknut_Antiqua({
  weight: "400",
  subsets: ["latin"],
});
const inria = Inria_Sans({
  weight: "400",
  subsets: ["latin"],
});
function Header() {
  return (
    <header>
      <h1 id='heading' className={inknut.className}>
            Clark Le<span id="pronouns" className={`inria.className`}> [he/him]</span>
      </h1>
      <div id="subheaders">
            <h2 id="subheader-one" className={inria.className}>
                  full stack developer
            </h2>
            <h2 id="subheader-two" className={inria.className}>
                  lifetime learner
            </h2>
      </div>     
    </header>
  );
}

export default Header;
