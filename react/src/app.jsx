import { LoggerComponent } from './components/logger';
import * as Babel from 'babel-standalone';
import * as React from 'react';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            body: 'This is a log area',
            transpiled: 'Transpiled code will show up here',
            errors: 'No errors'
        };
    }
    _update(value){
        let transpiledValue, transpiledErrors;
        try{
            transpiledValue = Babel.transform(value,{
                presets: ['es2015', 'react']
            }).code;
        }catch (e) { 
            transpiledErrors = e.message;
        }finally{
            this.setState({
                ...this.state,
                transpiled: transpiledValue || this.state.transpiled,
                errors: transpiledErrors || 'No errors'
            })
        }
    }
    render() {
        return (
            <div className="container">
                <LoggerComponent body={this.state.transpiled} />
                <textarea 
                    onChange={event => this._update(event.target.value)}
                    placeholder="Write your code here"/>
                <LoggerComponent body={this.state.errors}/>
            </div>
        )
    }
}