import Link from "next/link";

function BuildTogether() {
  return (
    <div className="sl-padding">
      <div className="container">
        <div className="buildTogether">
          <h2>Let's build something great together</h2>
          <p className="buildTogether__text">Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
          <Link className="buildTogether__link" href="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default BuildTogether;
