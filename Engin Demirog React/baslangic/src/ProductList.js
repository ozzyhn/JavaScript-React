import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.info.title}-{this.props.currentCategory}</h1>
      </div>
    )
  }
}
