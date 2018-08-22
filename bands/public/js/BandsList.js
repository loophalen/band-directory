class BandsList extends React.Component {
    render(){
        return(
            <table>
                <tbody>
                    {this.props.bands.map((band, index)=>{
                        return(
                            <tr>
                                <td className='list' onClick={()=>
                                {this.props.getBand(band) 
                                this.props.toggleState('bandShow', 'bandsList')}
                                }>
                                <img src={band.image} alt={band.name} />
                                </td>
                                <td className='band' onClick={()=>{
                                    this.props.getBand(band)
                                    this.props.toggleState('bandsList', 'bandAvailable')}
                                }>
                                <h3>{band.name}</h3>
                                <p>{band.description}</p>
                                </td>

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    }
}