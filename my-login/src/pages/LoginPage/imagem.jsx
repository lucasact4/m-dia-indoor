import React, { Component } from "react";
import Img from "./softex.png"
import "./styleimg.css"

class Imagem extends Component {
  render() {
    return (
      <section>
        <img src={Img} alt="IMG" />
      </section>
    );
  }
}

export default Imagem;