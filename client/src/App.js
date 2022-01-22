import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { Component } from 'react/cjs/react.production.min';
import Customer from './components/Customer'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'

const styles = theme=> ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: "auto"
  }, table: { minWidth:1000 } }) 
  
  
  class App extends Component 
  { 
    state = { customers: "" } 
    
    
    
    componentDidMount() { 
      this.callApi() 
          .then ( res => this.setState({customers:res})) 
          .catch(err=>console.log(err)); 
    }


    //서버에서 데이타를 갖고 옴 
    callApi = async() => {
      const response = await fetch('/api/customers' );
      const body = await response.json();
      return body;
    }

  render() {

    const { classes} = this.props;
    return (
      <Paper className = {classes.root} >
      <Table className ={classes.table} >

        <TableHead>
                  <TableCell> 번호 </TableCell>
                  <TableCell> 이미지 </TableCell>
                  <TableCell> 이름 </TableCell>
                  <TableCell> 생년월일  </TableCell>
                  <TableCell> 성별 </TableCell>
                  <TableCell> 직업 </TableCell>

        </TableHead>

        <TableBody>
         {  this.state.customers ? this.state.customers.map( c => {
            return ( 
              <Customer
              key = { c.key}  id={ c.id } image={c.image} name={ c.name }
              birthday={c.birthday} gender={ c.gender} job={c.job}
              /> 
            )
          })  : ""
         }
        </TableBody>
         </Table>
      </Paper>
    )
  }
}

export default withStyles(styles) (App);
