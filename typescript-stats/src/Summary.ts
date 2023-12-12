import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReports";
import { ConsoleReport } from "./reportTargets/ConsoleReports";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// builds a generic class that can output different kinds of information based on the type that it is constructed with - very cool!
export class Summary {
  // static functions can be called without initiating a class
  /// allows to pre-load summary instance with companion classes - nice shortcut to avoid lots of class initiation syntax!
  static winsAnalysisHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new HtmlReport()
    )
  }
  static winsAnalysisConsoleReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      new ConsoleReport()
    )
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }
}