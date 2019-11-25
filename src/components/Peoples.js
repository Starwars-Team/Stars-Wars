import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import axios from "axios";

const API_STRING = process.env.API_URL;

export default class Peoples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    axios
      .get("https://swapi.co/api/people")
      .then(res => {
        this.showDetail(res.data);
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
    for (let i = 0; i < 9; i++) {
      console.log(data.next)
      console.log(i);
      this.setState({ data : data + data.results });
      // name1.innerText = name1.innerText + "\n" + data.results[i].name;
      if (data["next"]) {
        this.getDetail(data.next);
      }
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          background: ""
        }}
      >
        {this.state.data.length > 0 &&
          this.state.data.map((item, key) => {
            return (
              <Card style={{ maxWidth: "400px", margin: "20px" }} key={key}>
                <CardContent>
                  <Typography color="textSecondary">{item.email}</Typography>
                  <Typography variant="body1" component="p">
                    Hello my name is {item.name}
                  </Typography>
                  <br />
                  <Typography variant="subtitle2" component="p">
                    Phone: {item.phone}
                  </Typography>
                  <Typography variant="subtitle2" component="p">
                    Website: {item.website}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    <Link to={`/people/${item.id}`}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            );
          })}
      </div>
    );
  }
}