// @flow
/**
 *
 * Notification
 *
 */
import React from 'react';
import styled from 'styled-components';

import styles from './Notification.style';
import type { Node } from './types';

import Heading from './../../atoms/Heading';
import Para from './../../atoms/Para';

type Props = {
  children?: Node,
  className?: string,
  ariaLabel?: string,
  primaryHeadingText?: string,
  secondaryHeadingText?: string,
  notificationDetailMsg?: string
};

const Notification = ({ children, className, ariaLabel, primaryHeadingText, secondaryHeadingText, notificationDetailMsg, ...others }: Props): Node => 
<div className={className} aria-label = {ariaLabel ? ariaLabel : notificationDetailMsg} {...others}>
  <Heading HeadingType="h1">{primaryHeadingText}</Heading>
  <Heading HeadingType="h3">{secondaryHeadingText}</Heading>
  <Para>{notificationDetailMsg}</Para>
</div>;

Notification.defaultProps = {
  className: "",
  ariaLabel: "",
  primaryHeadingText: "Notification",
  secondaryHeadingText: "Notification Message",
  notificationDetailMsg: "This is a notification error"
};

export default styled(Notification)`
  ${styles};
`;

export { Notification as NotificationVanilla };
