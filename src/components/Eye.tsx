import React from 'react'
import Cornea from './Cornea'
import Pupil from './Pupil'

interface Props {
  x: Number;
  y: Number;
}

function Eye(props: Props) {
  return (
    <Cornea>
      <Pupil x={props.x} y={props.y} />
    </Cornea>
  );
}

export default Eye