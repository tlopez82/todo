import React, { Component } from 'react';

export class ToDoRow extends Component {
    // oneMappedIem below is the mapping of my filtered todoItems array
    // the filter is for items that are either
    render = () =>
        <tr>
            <td>
                {this.props.oneMappedItem.action}
        </td>
            <td>
                <input 
                    type="checkbox"
                    checked={this.props.oneMappedItem.done}
                    onChange={() => this.props.callback(this.props.oneMappedItem)}
                   
                />
            </td>
        </tr>
}
