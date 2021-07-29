import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

import { counterSelectors, counterActions } from '../../store';
import { useState } from 'react';

function Example1({ counterValue, increment, decrement, reset, set }) {
  const [inputValue, setInputValue] = useState(0);
  return (
    <>
      <div>
        CurrentValue: {counterValue}
      </div>

      <Button onClick={decrement}>Уменьшить</Button>
      <Button onClick={reset}>Сбрость</Button>
      <Button onClick={increment}>Увеличить</Button>

      <div>
        <TextField type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} />
        <Button onClick={() => set(inputValue)}>Установить из инпута</Button>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  counterValue: counterSelectors.getValue(state),
  // counterValue: state.counter.value,
});
const mapDispatchToProps = { ...counterActions };
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(counterActions.increment()),
//   // increment: () => dispatch({ type: 'COUNTER.INCREMENT' }),
//
//   decrement: () => dispatch(counterActions.decrement()),
//   reset: () => dispatch(counterActions.reset()),
//   set: (value) => dispatch(counterActions.set(value)),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Example1);
