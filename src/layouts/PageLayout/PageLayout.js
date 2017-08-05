import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

import Counter from '../../components/counter/counter.js'

export const PageLayout = ({ children }) => (
  <Counter />
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
