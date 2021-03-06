import React from "react";
import Link from "next/link";

const Home = () => (
  <div>
    <h1>Home</h1>
    <Link href="/">
      <a style={{ marginRight: "2rem" }}>About</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </div>
);

Home.getInitialProps = () => {
  console.log("Running getInitialProps");

  return { hello: "world" };
};

export default Home;
