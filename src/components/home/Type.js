import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
        options={{
            strings: [
                "Web Developer",
                "Front-end Engineer",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
    />
  );
}

export default Type;
