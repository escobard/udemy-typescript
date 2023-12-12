import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

// builds a generic class that can output different kinds of information based on the type that it is constructed with - very cool!
export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget){}

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output)
  }
}