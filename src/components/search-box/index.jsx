import React from "react";

import './styles.css'

class SearchBox extends React.Component {

  render() {
    return (
      <input
        className={this.props.className}
        type="search"
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    )
  }
}

export default SearchBox