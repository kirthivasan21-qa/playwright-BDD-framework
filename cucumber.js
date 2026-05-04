module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: ['step-definition/**/*.js', 'hooks/**/*.js'],
        format: ['progress-bar', 'html:reports/cucumber-report.html'],
        formatOptions: {
            snippetInterface: 'async-await'
        },
        publishQuiet: true
            }
}