import * as React from 'react';
import { Row } from './row';
import { TableHeader } from './header';

interface Props{
    data: {}[]; // An array of objects
    toggleSort: (elem) => void;
}

export class TableComponent extends React.Component<Props, {}> {
    constructor(){
        super();
    }
    render() {
        return <table>
            <TableHeader 
                fields={ (this.props.data.length)? Object.keys(this.props.data[0]): [] }
                toggleSort={ this.props.toggleSort} 
            />
            <tbody>
                {(this.props.data)? 
                    this.props.data.map( (item,index) => {
                        return <Row key={index} item={item}/>
                    })
                :'' /* fallback */}
            </tbody>
        </table>
    }
}
