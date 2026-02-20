import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>Where taste meets passion.</p>
            </div>

            <p className="mid">
              Welcome to ZaykaHub, your go-to destination for delicious and
              freshly prepared meals. We believe that food is not just about
              eating, but about experiencing flavors that bring people together.
              Our platform offers a seamless way to explore a variety of dishes,
              discover new tastes, and enjoy quality meals from the comfort of
              your home.
            </p>

            <p className="mid">
              At ZaykaHub, we focus on quality, hygiene, and fast service. Our
              goal is to deliver not just food, but happiness with every order.
              Whether you're craving something spicy, sweet, or healthy, we have
              something for everyone.
            </p>
          </div>

          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;