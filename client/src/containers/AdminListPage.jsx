import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as appActions from '../actions/appActions.js';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import HotelEachRow from '../components/HotelEachRow.jsx'

class AdminList extends React.Component {
    constructor(props){
      super(props)   
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
      this.props.actions.getAllHotels()
    }

    handleClick(){
      this.props.history.push('/createHotel')

    }


    render() { 
      console.log(this.props.appState) 
      let {hotelsList} = this.props.appState

        return (
            <main>
              <h1>This is Admin List</h1>
              <button onClick={this.handleClick}>Create Hotel</button>

               <Card>
               
                <CardTitle title="Hotels List" subtitle="" />
                <br/><br/><br/>

                <Table>
                  <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                      <TableHeaderColumn></TableHeaderColumn>
                      <TableHeaderColumn>Hotel Name</TableHeaderColumn>
                      <TableHeaderColumn>City</TableHeaderColumn>
                      <TableHeaderColumn>Setting</TableHeaderColumn>
                      <TableHeaderColumn>Experience</TableHeaderColumn>
                      <TableHeaderColumn>Delete?</TableHeaderColumn>
                      <TableHeaderColumn>Edit?</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody displayRowCheckbox={false}>
                    {
                      hotelsList ? hotelsList.map((item, i) => {
                        return(
                          <HotelEachRow key={i} hotel={item} count={i}/>
                        )
                      })
                      : ''
                    }
                  </TableBody>
                </Table>
                
              </Card>
                
            </main>
        )
    }
}

export default connect(
    state => ({
        appState: state.appReducer,
    }),
    dispatch => ({
        actions: bindActionCreators( appActions , dispatch)
    })
)(AdminList);


