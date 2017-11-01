import React, { Component } from "react";
class GiamSat extends Component {
  render() {
    return (
      <section class="content">
        <div className="wraper container-fluid">
          <iframe
            width="100%"
            height={550}
            frameBorder={0}
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDtDu--fwhDZxVQKnCSZODbTAyZrnw5tn4&q=Space+Needle,Seattle+WA"
            allowFullScreen
          />
        </div>
      </section>
    );
  }
}
export default GiamSat;
