// grabs csv file and parses its content to a string
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in something satisfying the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

/*const summary = new Summary(
  new WinsAnalysis('Man United'),
  // new HtmlReport() - change report class to the desired output format - very cool!
  new ConsoleReport()
)*/
// abbreviabes the class initiations above
/// swap invocations depending on what kind of report is desired
// const summary = Summary.winsAnalysisHtmlReport('Man United')
const summary = Summary.winsAnalysisConsoleReport('Man United')


summary.buildAndPrintReport(matchReader.matches);