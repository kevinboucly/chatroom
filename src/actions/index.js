export const SEND_MESSAGE = 'SEND_MESSAGE';
export const CHANGE_TEXT = 'CHANGE_TEXT';
export const TOGGLE_OPEN = 'TOGGLE_OPEN';

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});

export const changeText = (value) => ({
  type: CHANGE_TEXT,
  payload: value,
});

export const toggleOpen = () => ({
  type: TOGGLE_OPEN,
});
