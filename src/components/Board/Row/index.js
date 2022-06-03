import React, { useContext, useState } from 'react';
import { Cells } from './cell';

export function Row(props) {
	return (
		<div id={props.rowIndex} className="row">
			<Cells {...props} />
		</div>
	);
}
