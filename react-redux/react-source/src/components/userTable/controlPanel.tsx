import * as React from 'react';
import { filterEnums } from './actions/';

interface Props{
    // Action creators
    updateFilters: (configOptions) => void;
    resetFilters: () => void;
}

 export const ControlPanel = (props:Props) => {
    return <div className="container">
        <div className="col-md-12 btn-group">
            <a href="#" className="btn btn-default"
                onClick={ e => {
                    props.updateFilters({
                        filterType: filterEnums.gender,
                        value:'Male'
                    })
                }}>
                Filter males
            </a>
            <a href="#" className="btn btn-default"
                onClick={ e => {
                    props.updateFilters({
                        filterType: filterEnums.gender,
                        value:'Female'
                    })
                }}>
                Filter females
            </a>
            <a href="#" className="btn btn-default"
                onClick={ e => props.resetFilters() }>
                Reset Filters
            </a>
        </div>
        <div className="col-md-12">
            <div className="input-group">
                <span className="input-group-addon">By first name</span>
                <input name="textinput" onChange={ e => props.updateFilters({
                    filterType: filterEnums.first_name,
                    value: e.target.value
                })}/>
            </div>
            <div className="input-group">
                <span className="input-group-addon">By last name</span>
                <input name="textinput" onChange={ e => props.updateFilters({
                    filterType: filterEnums.last_name,
                    value: e.target.value
                })}/>
            </div>
        </div>
    </div>
}