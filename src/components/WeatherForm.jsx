import React from 'react';


class WeatherForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
    //this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit = (e) => {
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.handleSearch(location);
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref='location' placeholder="Enter city name"/>
          <button>Get weather</button>
        </form>
      </div>
    );
  }
}

export default WeatherForm;