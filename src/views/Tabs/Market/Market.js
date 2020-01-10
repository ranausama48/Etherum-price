import React, { Component } from 'react'
import Issue from './Issue/Issue'
import Status from './Status/Status'
import History from './History/History'
class Market extends Component {
  render() {
    return (
      <div>
        <div>
                <ul className="nav nav-tabs " id="myTab" role="tablist">
                    <li className="nav-item col-lg-4" style={{padding:'0px'}}>
                        <a className="nav-link active" id="issue-tab" data-toggle="tab" href="#issue" role="tab" aria-controls="issue" aria-selected="true">Issue </a>
                    </li>
                    <li className="nav-item col-lg-4" style={{padding:'0px'}}>
                        <a className="nav-link" id="status-tab" data-toggle="tab" href="#status" role="tab" aria-controls="status" aria-selected="false">Status</a>
                    </li>
                    <li className="nav-item col-lg-4" style={{padding:'0px'}}>
                        <a className="nav-link" id="history-tab" data-toggle="tab" href="#history" role="tab" aria-controls="history" aria-selected="false">History</a>
                    </li>
                </ul>
                <div className="tab-content p-0" id="myTabContent">
                    <div className="tab-pane fade show active" id="issue" role="tabpanel" aria-labelledby="issue-tab"><Issue/></div>
                    <div className="tab-pane fade" id="status" role="tabpanel" aria-labelledby="status-tab"><Status/></div>
                    <div className="tab-pane fade" id="history" role="tabpanel" aria-labelledby="history-tab"><History/></div>
                </div>
            </div>
      </div>
    )
  }
}

export default Market
