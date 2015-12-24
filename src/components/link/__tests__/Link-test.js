import React from 'react'
import { findDOMNode } from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Link from './../Link'

chai.use(sinonChai)

describe('Link', () => {
  afterEach(() => {
    window.location.href = ''
  })

  it('check use href', () => {
    const link = TestUtils.renderIntoDocument(
      <Link href='#/test' />
    )

    TestUtils.Simulate.click(findDOMNode(link))

    expect(window.location.href).to.contain('#/test')
  })

  it('check trigger click event', () => {
    const callback = sinon.spy()

    const link = TestUtils.renderIntoDocument(
      <Link href='#/test' onClick={callback} />
    )

    TestUtils.Simulate.click(findDOMNode(link))

    expect(callback).to.have.been.calledOnce
    expect(window.location.href).to.not.contain('#/test')
  })
})
