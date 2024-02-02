# TS with React and Redux functional components
- it is recommended to design out the redux state in a diagram before coding with redux and TS
- it is also recommended to isolate redux logic from the rest of your ts application
  - isolate all imports under a single file and ensure redux specific logic is not managed in components!

## big issues with redux/react-redux + ts
- instructor notes on gotchas with react/react-redux and TS
- imports between files can turn into a mess very quickly
- communicating types over to your component can be challenging
  - the hooks workaround makes the syntax easier to read, but harder to understand
- type def files for Redux, React-Redux and others are possibly over-engineered
  - completely agreed, seems like there is a lot of overlap between library types that cause weird type issues that require workarounds