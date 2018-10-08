import React from "react";

export class OptionBoxes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="options-container">
          <div className="option-box">
            <p>How it works</p>
          </div>
          <div className="option-box">
            <p>Enter a Trade</p>
          </div>
          <div className="option-box">
            <p>See Trade History</p>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
