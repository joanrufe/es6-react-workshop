import * as React from 'react';

// Presentational component
export const LoggerComponent = (props) => {
    return <pre>
        {props.body}
    </pre>;
}
