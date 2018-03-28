import { ADD_COMMENT } from "./actions.js";
import { EDIT_COMMENT } from "./actions.js";
import { REMOVE_COMMENT } from "./actions.js";
import { THUMB_UP_COMMENT } from "./actions.js";
import { THUMB_DOWN_COMMENT } from "./actions.js";

import { combineReducers } from "redux";
import comments from "./comments";
import users from "./users";


const app = combineReducers({
	comments,
	users
});
