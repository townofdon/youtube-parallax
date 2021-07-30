import { Image } from '../components/Image';

import img from '../assets/img-spaceport.jpg';

export const ExampleFixedBackground = () => {
  return (
    <section className="bg-dark">
      <div className="container py-5">
        <h1 className="pb-4">1. Fixed Background Parallax</h1>
        <p className="constrain mb-3">This is the simplest type of parallax to implement.</p>
        <p className="constrain">
          We pretty much just need a <code>&lt;div&gt;</code> element and use CSS <code>background-image</code> and{' '}
          <code>background-attachment: fixed;</code>
        </p>
      </div>

      <Image src={img} alt="Space Port Background" height="50vh" fixed darken>
        <h3>That's kinda neat huh</h3>
      </Image>
    </section>
  );
};