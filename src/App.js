import React, { memo } from "react";
import PropTypes from "prop-types";

import "./App.css";

const App = memo(({ showFirst }) => {
  const renderFirst = () => (
    <div>
      <p>First</p>
    </div>
  );

  const renderSecond = () => (
    <div>
      <p>Second</p>
    </div>
  );

  return showFirst ? renderFirst() : renderSecond();
});

App.propTypes = {
  showFirst: PropTypes.bool.isRequired,
};

export default App;
