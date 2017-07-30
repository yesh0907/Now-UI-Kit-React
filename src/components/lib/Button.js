import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../../styles/index.scss';

const BUTTON_COLORS = [
    'default',
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'neutral'
];

const BUTTON_SIZES = ['lg', 'nr', 'sm'];

const BUTTON_TYPES = [
    'default',
    'round',
    'round-icon',
    'icon',
    'simple'
];

class Button extends Component {
    getClassName() {
        const { color, size, type } = this.props;
        const btnSize = size === 'nr' ? '' : `${size}`;
        let btnType;
        switch (type) {
            case 'round':
            case 'round-icon':
                btnType = 'btn-round';
                break;
            case 'icon':
                btnType = 'btn-icon btn-icon-mini btn-round';
                break;
            case 'simple':
                btnType = 'btn-simple'
                break;
            default:
                btnType = '';
                break;
        }
        return `btn btn-${color} ${btnSize} ${btnType}`;
    }
    

    render() {
        const className = this.getClassName();
        const children = this.props.children;
        return (
            <button className={className} {...this.props}>{children}</button>
        );
    }
}

Button.propTypes = {
    color: PropTypes.oneOf(BUTTON_COLORS),
    size: PropTypes.oneOf(BUTTON_SIZES),
    type: PropTypes.oneOf(BUTTON_TYPES),
    children: PropTypes.node.isRequired
}

Button.defaultProps = {
    color: 'default',
    size: 'nr',
    type: 'default'
}

export default Button;