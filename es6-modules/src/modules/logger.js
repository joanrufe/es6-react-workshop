const NEWLINE = "\n\n";

const logarea = document.getElementById("logger");
const loggerFactory = elem => string => elem.innerHTML += string + NEWLINE;
export const logger = loggerFactory(logarea);