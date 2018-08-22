class Band extends React.Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-2">
          <div>
            <img src={this.props.band.image} alt={this.props.band.name} />
          </div>
        </div>
      </div>
    )
  }
}

class BandShow extends React.Component {
  render() {
    return (
      <div className="tile is-ancestor">
        <div className="tile is-2">
          <div>
            <img src={this.props.band.image} alt={this.props.band.name} />
          </div>
        </div>
        <div className="tile is-2" />
        <div className="tile">
          <div>
            <p className="tile is-child ">
              <span>Band Name </span> {this.props.band.name}{" "}
            </p>
            <p className="tile is-child ">
               {this.props.band.image}
            </p>
            <p className="tile is-child ">
              <span>Description: </span> {this.props.band.description}{" "}
            </p>
            <p className="tile is-child ">
              <span>Website </span> {this.props.band.website}{" "}
            </p>
          </div>
        </div>
      </div>
    )
  }
}
