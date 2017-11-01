import {logger} from './modules/logger';
import {speedMeasures} from './modules/measuresData';

const measuresLogger = item => logger(`Timestamp ${item.timestamp} - ${item.speed} Kb/s`);
speedMeasures.map(item => measuresLogger(item));

// Parse to kb using Arrow Function
const speedInMBs = speedMeasures.map( 
    ({timestamp, speed}) => { // Destructuring
        return {timestamp, speed: speed/1024 } ;
        // There is no need of timestamp: timestamp ... implicit variable name
    }
);

// Can be shorter with implicit return
const shorterSpeedInMBs = speedMeasures.map(obj => obj.speed/1024);

// Useful when a simple anonymous function is needed
const lowerThanOneMBs = speedInMBs.filter(item => item.speed < 1);

// Template strings
const summaryTemplate = `SUMMARY: There's ${speedMeasures.length} measures, ${lowerThanOneMBs.length} under 1 Mb/s`;
logger(summaryTemplate);

// Spread operator can be use
const moreMeasures  = [
    ...speedMeasures,
    {timestamp: '1508876061', speed: 1102 },
    {timestamp: '1508877071', speed: 1009 }
]
