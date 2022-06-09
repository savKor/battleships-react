import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ws } from '../App';
import { selectState, updateUsername } from '../features/counter/storageSlice';

export function LoginPage() {
	const store = useSelector(selectState);
	const username = store.username;
	const dispatch = useDispatch();
	let navigate = useNavigate();

	function changeUsername(e) {
		dispatch(updateUsername(e.target.value));
	}

	function handleLoginClick() {
		ws.send(JSON.stringify(username));
		let path = `/public/main/`;
		navigate(path);
	}

	return (
		<div id="login">
			<input
				type="text"
				id="nicknameBox"
				placeholder="Type your nickname here"
				onChange={(e) => changeUsername(e)}
			/>
			<button id="send" title="Send Nickname!" onClick={handleLoginClick}>
				Send Nickname
			</button>
		</div>
	);
}
