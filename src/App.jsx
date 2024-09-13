import { createElement } from "react";

function App() {

  const heading = 'Post Malone';

  const f1Trillion = "https://shop.postmalone.com/cdn/shop/files/2lp-standard.png?v=1718939320";
  const AUSTIN = "https://m.media-amazon.com/images/I/61pKgBdQSJL._UF1000,1000_QL80_.jpg"

  const content = (
    <>
      <h1>{heading}</h1> 
<div className="album_container"> 
  <img src={f1Trillion} alt=" " className="photo" />
        <details className="Album1">
          <summary>F1 Trillion</summary>
          <ol>
            <li>Wrong Ones Feat. Tim McGraw</li>
            <li>Finer Things Feat. Hank Williams Jr.</li>
            <li>I Had Some Help Feat. Morgan Wallen</li>
            <li>Pour Me A Drink Feat. Blake Shelton</li>
            <li>Have The Heart Feat. Dolly Parton</li>
            <li>What Don't Belong To Me</li>
            <li>Goes Without Saying Feat. Brad Paisley</li>
            <li>Guy For That Feat. Luke Combs</li>
            <li>Nosedive Feat. Lainey Wilson</li>
            <li>Losers Feat. Jelly roll</li>
            <li>Devil I've Been Feat. ERNEST</li>
            <li>Never Love You Again Feat. SSierra Ferrell</li>
            <li>Missin' You Like This Feat. Luke Combs</li>
            <li>Who Needs You</li>
          </ol>
        </details>
</div>

<div className="album_container">
  <img src={AUSTIN} alt=" " className="photo_two" />
    <details className="Album1">
      <summary>Austin</summary>
        <ol>
          <li>Socialite</li>
          <li>Something Real</li>
          <li>Green Thumb</li>
          <li>Joy</li>
          <li>Novacanda</li>
          <li>Mourning</li>
          <li>Texas Tea</li>
          <li>Laugh It Off</li>
        </ol>
    </details>
</div>
    </>
    );

  return content;
}

function Greeting() {

  const greeting = <p>Hello, React</p>;

  const greeting2 = createElement('p', null, 'Hello, React');

  return greeting2;
}

export default App
