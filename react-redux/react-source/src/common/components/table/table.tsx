import * as React from 'react';
import { Row } from './row';
import { TableHeader } from './header';

interface Props{
    data: {}[]; // An array of objects
}

export class TableComponent extends React.Component<Props, {}> {
    constructor(props){
        super(props);
        console.log(this)
    }
    render() {
        return <table>
            <TableHeader fields={
                (this.props.data.length)?
                    Object.keys(this.props.data[0]) : []
            } />
            <tbody>
                {(this.props.data)? this.props.data.map( (item,index) => {
                    return <Row key={index} item={item}/>
                }):''}
            </tbody>
        </table>
    }
}
