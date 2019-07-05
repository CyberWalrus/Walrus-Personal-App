export const arrayMoveKeyValue = <ValueType>(
  arrayInput: ValueType[],
  key: string,
  oldIndex: number,
  newIndex: number,
): ValueType[] => {
  console.log(arrayInput);
  const lengthElements: number = getLengthSame(arrayInput, key, oldIndex);
  const lengthEndElements: number = getLengthSame(arrayInput, key, oldIndex) - 1;
  const isIndex: boolean = oldIndex <= newIndex ? true : false;
  const arrayOutput: ValueType[] = arrayInput.slice();
  const keyValue = arrayOutput[oldIndex][key];
  if (isIndex) {
    newIndex += lengthEndElements;
    for (let i = oldIndex; i < newIndex; i += 1) {
      if (i + lengthElements < newIndex) {
        arrayOutput[i][key] = arrayOutput[i + lengthElements][key];
      } else {
        break;
      }
    }
    for (let a = newIndex - lengthElements; a < newIndex; a += 1) {
      arrayOutput[a][key] = keyValue;
    }
  } else {
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
