import React from 'react';
import {createStore} from 'redux';
import {studentReducer} from './reducer';

export const store = createStore(studentReducer);


