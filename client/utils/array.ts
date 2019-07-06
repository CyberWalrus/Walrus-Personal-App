
// Функция передвигает значения
export const arrayMoveKeyValue = <ValueType>(
  arrayInput: ValueType[],
  key: string,
  oldIndex: number,
  newIndex: number,
): ValueType[] => {
  const lengthElements: number = getLengthSame(arrayInput, key, oldIndex);
  const lengthEndElements: number =
    getLengthSame(arrayInput, key, newIndex) - 1;
  const arrayOutput: ValueType[] = arrayInput.slice(0);
  const keyValue = arrayOutput[oldIndex][key];
  if (oldIndex < newIndex) {
    const addIndex =
      newIndex > arrayOutput.length - lengthElements ? lengthElements : 0;
    newIndex =
      newIndex > arrayOutput.length - lengthElements
        ? arrayOutput.length - lengthElements
        : newIndex;
    newIndex += lengthEndElements;

    for (
      let i = oldIndex;
      i + lengthElements - lengthEndElements < newIndex + addIndex;
      i += 1
    ) {
      arrayOutput[i][key] = arrayOutput[i + lengthElements][key];
    }

    for (let a = newIndex - lengthElements; a < newIndex; a += 1) {
      arrayOutput[a + lengthEndElements + addIndex][key] = keyValue;
    }
  } else if (oldIndex !== newIndex) {
    for (let i = oldIndex; i > newIndex; i -= 1) {
      if (i > newIndex) {
        arrayOutput[i - 1 + lengthElements][key] = arrayOutput[i - 1][key];
      } else {
        break;
      }
    }
    for (let a = newIndex + (lengthElements - 1); a >= newIndex; a -= 1) {
      arrayOutput[a][key] = keyValue;
    }
  }
  return arrayOutput;
};

export const getLengthSame = <ValueType>(
  arrayInput: ValueType[],
  key: string,
  index: number,
  length: number = 1,
): number => {
  try {
    const arrayOutput = arrayInput.slice();
    if (
      arrayOutput[index][key] !== undefined &&
      arrayOutput[index][key] === arrayOutput[index + 1][key]
    ) {
      return getLengthSame(arrayInput, key, index + 1, length + 1);
    } else {
      return length;
    }
  } catch (error) {
    return length;
  }
};
