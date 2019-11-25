import React, { Component } from "react";
import axios from "axios";

import "./../card.scss";

export default class Planets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://swapi.co/api/planets")
      .then(res => {
        this.showDetail(res.data);
        console.log(res.data)
      })
      .catch(error => {
        console.log(error);
      });
  };

  getDetail(apiURL) {
    axios.get(apiURL).then(response => {
      this.showDetail(response.data);
    });
  }

  showDetail(data) {
    var joined = this.state.data.concat(data.results);
    this.setState({ data: joined });
    if (data["next"] && this.state.data.length !== 20) {
      this.getDetail(data.next);
    }
  }

  handleChange(e) {
    // Variable to hold the original version of the list
    let currentList = [];
    // Variable to hold the filtered list before putting into state
    let newList = [];

    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList
      currentList = this.items;

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      newList = this.items;
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
      filtered: newList
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          background: "",
          margin: "2vw"
        }}
      >
        {this.state.data.length > 0 &&
          this.state.data.map((item, key) => {
            return (
              <li className="results__item">
                <h3 className="results__title">{item.name}</h3>
                <div className="results__bg" id={item.model} />
                <ul className="results__info">
                  <li>
                    Terrain  <span>{item.terrain}</span>{" "}
                  </li>
                  <li>
                    Gravity  <span>{item.gravity}</span>
                  </li>
                  <li>
                    Population  <span>{item.population}</span>{" "}
                  </li>
                </ul>
                <a href="/Planets">DETAILS</a>
              </li>
            );
          })}
      </div>
    );
  }
}
