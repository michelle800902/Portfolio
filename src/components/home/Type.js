import React from "react";
import Typewriter from "typewriter-effect";
import PropTypes from 'prop-types';

function Type(props) {
  return (
    <Typewriter
        options={{
            strings: props.strings,
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
        }}
    />
  );
}

Type.propTypes = {
    strings: PropTypes.array.isRequired,
};

export default Type;
