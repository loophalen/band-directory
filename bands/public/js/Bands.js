class Bands extends React.Component {
    constructor (props){
        super(props)
        this.state = { 
            bandsList: true, 
            addBand: false, 
            bandAvailable: false, 
            editBand: false, 
            bandShow: false, 
            bands:[], 
            band:{}
        }
        this.toggleState = this.toggleState.bind(this)
        this.getBand = this.getBand.bind(this)
        this.handleCreate = this.handleCreate.bind(this)
        this.handleCreateSubmit = this.handleCreateSubmit.bind(this)
        this.deleteBand = this.deleteBand.bind(this)
        this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this)
    }

    componentDidMount(){
        this.getBands()
    }

    deleteBand (band, index){
        fetch('bands/' + band.id, {
            method: 'DELETE'
        })
        .then(data => {
            this.setState({
                bands: [
                    ...this.state.bands.slice(0, index), 
                    ...this.state.bands.slice(index + 1)
                ]
            })
        })
    }
    handleCreate(band){
        console.log([band, ...this.state.bands])
        this.setState({bands: [bands, ...this.state.bands]})
    }
    handleUpdateSubmit(band){
        console.log(band.id)
        fetch('/bands/' + band.id, {
            body: JSON.stringify(band), 
            method: 'PUT', 
            headers: {
                'Accept': 'application/json, text/plain, */*', 
                'Content-Type': 'application/json'
            }
        })
        .then(updatedBand => {
            return updatedBand.json()
        })
        .this(jsonedBand => {
            this.getBands()
            this.toggleState('bandsList', 
        'bandAvailable')
        })
        .catch(error => console.log(error))
    }

    handleCreateSubmit(band){
        fetch('/bands', {
            body:JSON.stringify(band), 
            method: 'POST', 
            headers:{
                'Accept': 'application/json, text/plain, */*', 
                'Content-Type': 'application/json'
            }
        })
        .then(createdBand => {
            return createdBand.json()
        })
        .then(jsonedBand => {
            this.handleCreate(jsonedBand)
            this.toggleState('addBand', 'bandsList')
        })
        .catch(error => console.log(error))
    }

    getBand(band){
        this.setState({band: band})
    }

    getBands(){
        fetch('http://localhost:3000/bands')
        .then(response => response.json())
        .then(data => {
            this.setState({
                bands: data
            })
        })
        .catch(error => console.log(error))
    }

    toggleState(st1, st2){
        console.log(st1, st2)
        this.setState({
            [st1]: !this.state[st1], 
            [st2]: !this.state[st2]
        })
    }

    render(){
        return(
            <div className='bands-column'>
                {this.state.bandsList ? <button className='button is-sucess' onClick={()=>this.toggleState('addBand', 'bandsList')}>Add Band</button>:''}
                {
                    this.state.bandsList ?
                    <bandsList
                    toggleState={this.toggleState}
                    bands={this.state.bands}
                    getBand={this.getBand}
                    deleteBand={this.deleteBand}
                    />:''
                }
                {
                    this.state.bandShow ?
                    <bandShow
                    toggleState={this.toggleState}
                    band={this.state.band}
                    getBand={this.getBand}
                    />:''
                }
                {
                    this.state.addBand ? 
                    <BandForm
                    toggleState={this.toggleState}
                    handleCreate={this.handleCreate}
                    handleSubmit={this.handleCreateSubmit}
                    />:''
                }
                {
                    this.state.bandAvailable?
                    <Band 
                    toggleState={this.toggleState}
                    book={this.state.book}
                    handleSubmit={this.handleUpdateSubmit}
                    />:''
                }
                <bandShow />
            </div>
        )

    }
}


