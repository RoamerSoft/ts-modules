import SessionStorage from './session-storage';
import LocalStorage from './local-storage';

const defaultStorage = SessionStorage;
export { defaultStorage as Default, LocalStorage, SessionStorage };
