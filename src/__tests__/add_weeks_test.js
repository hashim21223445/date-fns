var assert = require('power-assert')
var addWeeks = require('../add_weeks')

describe('addWeeks', function() {
  it('adds number of passed days', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1), 4)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 29))
  })

  it('accepts string', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1).toISOString(), 2)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 15))
  })

  it('accepts timestamp', function() {
    var result = addWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1)
    assert.deepEqual(result, new Date(2014, 8 /* Sep */, 8))
  })

  it('does not mutate original date', function() {
    var date = new Date(2014, 8 /* Sep */, 1)
    addWeeks(date, 2)
    assert.deepEqual(date, new Date(2014, 8 /* Sep */, 1))
  })
})
