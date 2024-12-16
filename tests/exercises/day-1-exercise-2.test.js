import { readFileSync } from 'fs'
import { strict as assert } from 'assert'


describe('Project', () => {
  it('should be configured to use ES6 Modules for importing', () => {
    const config = JSON.parse(readFileSync('package.json'))
    assert.equal(config.type, 'module')
  })

  it('should let me import num from hello.js', async () => {
    const module = await import('../../exercises/hello.js')
    assert.equal(module.num, 3495)
  })

  it('should let me import sayHi() from hello.js', async () => {
    const module = await import('../../exercises/hello.js')
    assert.equal(module.default(), 'Hello ES6 Modules!')
  })
})
