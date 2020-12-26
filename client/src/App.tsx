import React, { Component } from "react";
import "./App.css";
import axios from "axios";

interface AppState {
  title: string;
  description: string;
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: "Loading...",
      description: "Loading...",
    };
  }

  componentDidMount = () => {
    axios.get("/fetch").then((res) => {
      this.setState(res.data);
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
