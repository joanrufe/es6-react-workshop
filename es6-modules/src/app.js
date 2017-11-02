import {LoggerComponent, NEWLINE} from './modules/logger'; // Import Component class
import {speedMeasures} from './modules/measuresData'; // Immport bunch of data

// Instantiate imported object
const logger = new LoggerComponent();

// Parse to kb using Arrow Function
const speedInMBs = speedMeasures.map( 
    ({timestamp, speed}) => { // Destructuring
        return {timestamp, speed: speed/1024 } ;
        // There is no need of timestamp: timestamp ... implicit variable name
    }
);

// Can be shorter with implicit return
const shorterSpeedInMBs = speedMeasures.map(obj => obj.speed/1024);
 
// Become shorter and cleaner to write simple functions
const measureTemplateFactory = ({timestamp, speed}) => `Timestamp ${timestamp} - ${speed} Kb/s`;
// Getting into a more functional programming style
const measuresLogger = item => logger.log(measureTemplateFactory(item));

// And easily iterate throught data sets
speedMeasures.map(item => measuresLogger(item));
const lowerThanOneMBs = speedMeasures.filter(item => item.speed < 1024);
 
// Again
const summaryTemplate = `SUMMARY: There's ${speedMeasures.length} measures, ${lowerThanOneMBs.length} under 1 Mb/s`;
logger.log(summaryTemplate);

// Spread operator can be use to create new object from another
const moreMeasures  = [
    {timestamp: '1508876061', speed: 1102 },
    {timestamp: '1508877071', speed: 1009 }
];

// Create a button for attach event
const button = document.createElement('button');
button.innerText = 'Log more data';
document.body.appendChild(button);

// Again using arrow functions to easy iterate
let newLog = '';
moreMeasures.forEach( item => newLog += measureTemplateFactory(item) + NEWLINE);

// Check out LoggerComponent class, logOnClick method
logger.logOnClick(newLog, button);
