import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { useDebounce } from '..';
import ShowDocs from '../util/ShowDocs';

const Demo = () => {
  const [state, setState] = React.useState('Typing stopped');
  const [val, setVal] = React.useState('');

  useDebounce(
    () => {
      setState('Typing stopped');
    },
    2000,
    [val]
  );

  return (
    <div>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState('Waiting for typing to stop...');
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
    </div>
  );
};

storiesOf('Side effects（副作用）/useDebounce', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/useDebounce.md')} />)
  .add('Demo', () => <Demo />);
