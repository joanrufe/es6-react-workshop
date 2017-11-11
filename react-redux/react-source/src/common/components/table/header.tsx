import * as React from 'react';

interface Props {
    fields: Array<String>;
}

export const TableHeader = (props: Props) => {
    return <thead>
        <tr>
            {props.fields.map( (elem,index) => <th key={index}>{elem}</th> )}
        </tr>
    </thead>
}
