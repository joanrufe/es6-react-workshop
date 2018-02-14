import * as React from 'react';

interface Props {
    fields: Array<String>;
    // Action creator function
    toggleSort: (field) => void;
}

export const TableHeader = (props: Props) => {
    return (
        <thead>
            <tr>
                {props.fields.map( (elem,index) => (
                    <th key={index}>
                        {elem}
                        <span  
                            className="glyphicon glyphicon-sort"
                            /* Launch aaction creator */
                            onClick={() => props.toggleSort(elem)}
                        />
                    </th>
                    )
                )}
            </tr>
        </thead>
    );
}
