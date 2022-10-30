import { ComponentMeta, ComponentStory } from '@storybook/react';
import Switch from 'atoms/Switch';
import { useState } from 'react';

export default {
  title: 'Atoms/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <Switch {...args} {...{ checked, setChecked }} />
    </div>
  );
};

// const getToggleData = () => {
//   let checked = false;
//   const setChecked = () => (checked = !checked);
//   return { checked, setChecked };
// };

export const Default = Template.bind({});
Default.args = {
  // ...getToggleData(),
};
