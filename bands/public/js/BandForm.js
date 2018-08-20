class BandForm extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: '',
        image: '',
        description: '',
        website: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  
    }

    componentDidMount(){
        if(this.props.band){
            this.setState({
                name: this.props.band.title,
                image: this.props.band.image, 
                description: this.props.band.description,
                website: this.props.band.website
            })
        }
    }

    handleChange(e){
        console.log(e.target.value)
        console.log(e.target.id)
        this.setState({[e.target.id]: e.target.value})
    }

    handleSubmit(e){
        e.preventDeafault()
        this.props.handleSubmit(this.state)
    }

    render(){
        return(
            <form>
                <input 
                name='name'
                id='name'
                placeholder="Band Name" 
                value={this.state.name} 
                onChange={this.handleChange} 
                />
                <br />
                <input 
                name='image'
                id='image'
                placeholder="Image" 
                value={this.state.image} 
                onChange={this.handleChange}   
                />
                <br />
                <input 
                name='description'
                id='description'
                placeholder="Description" 
                value={this.state.description} 
                onChange={this.handleChange}  
                />
                <br />
                <input 
                name='website'
                id='website'
                placeholder="Website" 
                value={this.state.website} 
                onChange={this.handleChange} 
                />
                <br />
                <button onClick={e => this.handleSubmit(e)}>Add Band</button>
            </form>
        )
    }
}

