import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ws } from '../App';
import { selectState, updateUsername } from '../features/counter/storageSlice';

export function LoginPage() {
	const store = useSelector(selectState);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const username = store.username;

	function changeUsername(e) {
		dispatch(updateUsername(e.target.value));
	}

	function handleLoginClick() {
		if ('WebSocket' in window) {
			ws.send(JSON.stringify(username));
			let path = `/public/main/`;
			navigate(path);
		}
	}

	return (
		<div id="main">
			<div id="login-form">
				<input
					type="text"
					id="nickname-box"
					placeholder="Type your nickname here"
					onChange={(e) => changeUsername(e)}
				/>
				<button id="send" title="Send Nickname!" onClick={handleLoginClick}>
					Send Nickname
				</button>
			</div>
		</div>
	);
}
