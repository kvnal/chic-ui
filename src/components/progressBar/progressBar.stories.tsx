import React from 'react';
import { Story, Meta } from '@storybook/react';

import ProgressBar, { ProgressBarProps } from '.';
import progressBar from './progressBar';

export default {
  title: 'Components/progress-bar',
  component: progressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Default = Template.bind({});
Default.args = {    
}
export const Custom = Template.bind({});
Custom.args = {
    progress:80,
 fgColor:"rgb(30, 167, 253)",
 bgColor:"#DDE0E2",
 height: 24,
 loadingText:true
}




