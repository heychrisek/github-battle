var React = require("react")

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p>Loading...</p>
    : <p>Confirmed</p>
}

module.exports = ConfirmBattle