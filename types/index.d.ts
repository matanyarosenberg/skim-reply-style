export type Level = 'L1' | 'L2' | 'L3'

declare module 'claude-code' {
  interface PluginState {
    'skim-style': { level: Level }
  }
}
