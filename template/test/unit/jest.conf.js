const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },{{#e2e}}
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],{{/e2e}}
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  mapCoverage: true,
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    {{#router}}
    '!src/router/index.js',
    {{/router}}
    '!**/node_modules/**'
  ],
  'testURL': 'http://localhost'//使用终端运行npm run unit时，需加这个配置,webstrom请参考:https://blog.csdn.net/yj1499945/article/details/88988628
}
