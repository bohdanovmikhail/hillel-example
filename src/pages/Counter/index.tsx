import { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core';

import { IRootState, counterSelectors, counterActions } from '../../store';

function Counter({ counterValue, increment, decrement, reset, set }: Props) {
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
        <TextField type="text" value={inputValue} onChange={(e: ChangeEvent<any>) => setInputValue(e.target.value)} />
        <Button onClick={() => set(inputValue)}>Установить из инпута</Button>
      </div>
    </>
  );
}

const mapStateToProps = (state: IRootState) => ({
  counterValue: counterSelectors.getValue(state),
});
const mapDispatchToProps = { ...counterActions };

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

interface Props {
  counterValue: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  set: (newValue: number) => void;
}
