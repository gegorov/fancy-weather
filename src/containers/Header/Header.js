import React, { Component } from 'react';

const defaultState = {
  searchInput: '',
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  searchHandler = () => {
    this.props.search(this.state.searchInput);
    this.setState({
      ...defaultState,
    });
  }

  handleEnter = (event) => {
    if (event.key === 'Enter') {
      this.searchHandler();
    }
  }

  render() {
    const { search } = this.props;
    return (
      <header>

        <input
          type="text"
          name="search"
          value={this.state.searchInput}
          placeholder="Enter City"
          onChange={(event) => this.setState({ searchInput: event.target.value })}
          onKeyPress={this.handleEnter}
        />
        <button
          type="button"
          onClick={this.searchHandler}
        >
          Search
        </button>
      </header>
    );
  }
}

export default Header;
