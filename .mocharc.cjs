module.exports = {
    'reporter': 'mochawesome',
    'reporter-option': [
        'reportDir=test_result',
        // 'reportFilename=[datetime]/[status]-[name]-report',
        'reportFilename=[datetime]_[status]-[name]-report',
        'timestamp=yyyy-mm-dd HH:MM:ss'
    ]
}