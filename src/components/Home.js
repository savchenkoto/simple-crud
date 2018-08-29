import React, {Component} from 'react';
import DataTable from "./DataTable";
import ControlForm from "./ControlForm";
import {deleteRecord, fetchRecords} from '../actions/recordsActions';
import {toggleMode} from '../actions/formActions';
import {connect} from "react-redux";


class Home extends Component {

  async componentDidMount() {
    this.props.fetchRecords();
    try {
      setInterval(async () => {
        this.props.fetchRecords();
      },
      30000);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const record = this.props.match.params.id
      ? this.props.records.find(record => record.id == this.props.match.params.id)
      : null;
    return (
      <div className='container'>
        <ControlForm
          record={record}
          toggleMode={this.props.toggleMode}
          isEditModeOn={this.props.isEditModeOn}
        />
        <DataTable
          records={this.props.records}
          deleteRecord={this.props.deleteRecord}
          toggleMode={this.props.toggleMode}
          isEditModeOn={this.props.isEditModeOn}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    records: state.records,
    isEditModeOn: state.isEditModeOn
  }
}

export default connect(mapStateToProps, {fetchRecords, deleteRecord, toggleMode })(Home);