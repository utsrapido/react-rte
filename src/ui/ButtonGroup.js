/* @flow */

import React from 'react';
import cx from 'classnames';

import {Button} from "semantic-ui-react";

type Props = {
  className?: string;
};

export default function ButtonGroup(props: Props) {
  return (
    <Button.Group style={{paddingRight: "5px"}} {...props}/>
  );
}
