class Header extends React.Component{
  render(){
    return(
      <div class="header">
        <h1 className="header-title">What's the Frequency</h1>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Bands />

      </div>
    )
  }
}

ReactDOM.render(
    <App />,
    document.querySelector('main')
  );