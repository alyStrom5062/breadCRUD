const React = require('react')
const Default = require('./layouts/default')

function Error () {
    return (
        <Default>
            <h1>404: Page not found</h1>
            <p>Sorry. It looks like this page doesn't exist.</p>
            <a href="/breads">Return to Home</a>
        </Default>
    )
}

module.exports = Error