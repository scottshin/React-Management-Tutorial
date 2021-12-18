import React from 'react';

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'


class Customer extends React.Component {

    render() {
        return (

            <TableRow>
                <TableCell> {this.props.id }</TableCell>
                <TableCell> <img src={this.props.image} alt="image" /> </TableCell>
                <TableCell> {this.props.name}  </TableCell>
                <TableCell> {this.props.birthday}  </TableCell>
                <TableCell> {this.props.gender}  </TableCell>
                <TableCell> {this.props.job}  </TableCell>
            </TableRow>


        );
    }

}

class CustomerInfo extends React.Component
{
    render(){
        return (
            <div>
            <p> {this.props.birthday}  </p>
            <p> {this.props.gender}  </p>
            <p> {this.props.job}  </p>
            </div>
        )
    }
}


class CustomerProfile extends React.Component
{
    render() {
        return (
            <div>
                <img src={this.props.image} alt="prop" />
                <h2> {this.props.name}({this.props.id}) </h2>
            </div>
        )
    }
}



export default Customer;



