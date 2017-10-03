
import React, {Component} from 'react';
import cx from 'classnames';
import autobind from 'class-autobind';
import {Icon,Button as SemanticButton} from "semantic-ui-react";

type EventHandler = (event: Event) => any;

type Props = {
    children?: ReactNode;
    className?: string;
    focusOnClick?: boolean;
    icon: string;
    iconFlip: string;
    formSubmit?: boolean;
    isDisabled?: boolean;
    onMouseDown?: EventHandler;
    isActive: boolean;
};

export default class Button extends Component {
    props: Props;

    constructor() {
        super(...arguments);
        autobind(this);
    }

    render() {
        let {props} = this;
        let {isActive,iconName,label,iconFlip, isDisabled, focusOnClick, formSubmit, ...otherProps} = props;
        //className = cx(className, styles.root);
        let onMouseDown = (focusOnClick === false) ? this._onMouseDownPreventDefault : props.onMouseDown;
        let type = formSubmit ? 'submit' : 'button';
        const highlighted = {boxShadow: [0,0,"4px","2px","white","inset"]};
        return (
            <SemanticButton icon={<Icon name={iconName} flipped={iconFlip} />} {...otherProps} color={isActive ? "grey" : null} title={label} compact size="tiny" onMouseDown={onMouseDown} disabled={isDisabled}/>
        );
    }

    _onMouseDownPreventDefault(event: Event) {
        event.preventDefault();
        let {onMouseDown} = this.props;
        if (onMouseDown != null) {
            onMouseDown(event);
        }
    }
}
