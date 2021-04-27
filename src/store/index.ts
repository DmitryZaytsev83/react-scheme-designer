import {configureStore} from '@reduxjs/toolkit';
import authReducer, {AuthState} from './auth';
import schemeReducer, {SchemeState} from './scheme';

export type AppState = {
    scheme: SchemeState,
    auth: AuthState
}

const store = configureStore({
    reducer: {
        scheme: schemeReducer,
        auth: authReducer,
    },
});

export default store;
