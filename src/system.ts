const winMap = (() => {
  const map: Record<string, string> = {}

  ;[
    ['nt 5.0', '2000'],
    ['nt 5.1', 'XP'],
    ['nt 5.2', '2003'],
    ['nt 6.0', 'Vista'],
    ['nt 6.1', '7'],
    ['nt 6.2', '8'],
    ['nt 6.3', '8.1'],
    ['nt 6.4', '10'],
    ['nt 10.0', '10'],
    ['arm', 'RT']
  ].forEach(([v1, v2]) => {
    map[`windows ${v1}`] = `Windows ${v2}`
  })

  return map
})()

const linuxMap = {
  harmonyos: 'HarmonyOS',
  android: 'Android',
  linux: 'Linux'
}

export const systemRules: [string, any][] = [
  ['windows phone', 'Windows Phone'],
  ['win32', winMap],
  ['windows', winMap],
  ['ipad', 'iOS'],
  ['iphone', 'iOS'],
  ['macintosh', 'macOS'],
  ['macIntel', 'macOS'],
  ['mac', 'macOS'],
  ['linux', linuxMap],
  ['x11', 'Unix']
]
