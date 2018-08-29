import React, { Component } from 'react'
import Reactable from 'reactable';
import {Button} from "reactstrap";
import { NavLink } from "react-router-dom";


class DataTable extends Component {

  handleDelete(id) {
    this.props.deleteRecord(id);
    if (this.props.isEditModeOn) {
      this.props.toggleMode();
    }
  }

  render() {
    if (this.props.records.length === 0) {
      return (
        <div className='emptyMessage'>
          <h1>There is no data</h1>
        </div>
      )
    } else {
      return (
        <div>
          <Reactable.Table
            className='table table-hover table-sm table-bordered'
            itemsPerPage={15}
            pageButtonLimit={6}
          >
            {this.props.records.map(record => {
              return (
                <Reactable.Tr key={record.id}>
                  <Reactable.Td column='Name'>{record.name}</Reactable.Td>
                  <Reactable.Td column='Username'>{record.username}</Reactable.Td>
                  <Reactable.Td column='Email'>{record.email}</Reactable.Td>
                  <Reactable.Td column=' '>
                    <NavLink className='btn btn-secondary' to={`/${record.id}`}>Edit</NavLink>
                  </Reactable.Td>
                  <Reactable.Td column='  '>
                    <Button color='danger' onClick={this.handleDelete.bind(this, record.id)}>Delete</Button>
                  </Reactable.Td>
                </Reactable.Tr>
              )
            })}
          </Reactable.Table>
        </div>
      )
    }
  }
}

export default DataTable;