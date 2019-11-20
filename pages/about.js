import React from "react";
import Link from "next/link";

const About = () => (
  <div>
    <h1>About</h1>
    <Link href="/">
      <a style={{ marginRight: "2rem" }}>Home</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

About.getInitialProps = () => {
  console.log("Running getInitialProps");

  return { hello: "world" };
};

export default About;
