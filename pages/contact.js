import React from "react";
import Link from "next/link";

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <Link href="/">
      <a style={{ marginRight: "2rem" }}>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

Contact.getInitialProps = () => {
  console.log("Running getInitialProps");

  return { hello: "world" };
};

export default Contact;
