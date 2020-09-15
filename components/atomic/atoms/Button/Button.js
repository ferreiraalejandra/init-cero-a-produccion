import React from 'react';
import PropTypes from 'prop-types'

const Button = ({ children }) => <button>{children}</button>
Button.displayName = 'Button'

// Button.propTypes = {
//     children: PropTypes.node.isRequired
// }

export default Button;