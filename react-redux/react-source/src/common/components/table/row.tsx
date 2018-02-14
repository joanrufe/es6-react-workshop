import * as React from 'react';

interface Props {
    item: {};
}

export const Row = (props : Props) => {
    return <tr>
        {Object.keys(props.item).map((field, index) => {
            return <td key={index}>{props.item[field]}</td>
        })}
    </tr>
}
