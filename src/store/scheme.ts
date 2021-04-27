import {createSlice} from '@reduxjs/toolkit';
import {Block, Connector} from './types';

export type SchemeState = {
    blocks: Block[]
}

const initialSchemeState = {
    blocks: [
        {
            id: 0,
            topConnectors: [{link: null, id: 0}],
            bottomConnectors: null,
            leftConnectors: null,
            rightConnectors: null,
            title: "Block_1"

        },
        {
            id: 1,
            topConnectors: null,
            bottomConnectors: [{link: null, id: 1}],
            leftConnectors: null,
            rightConnectors: [{link: null, id: 4}],
            title: "Block_2"
        }
    ]
};

const schemeSlice = createSlice({
    name: 'counter',
    initialState: initialSchemeState,
    reducers: {
        incrementTop: function (state: SchemeState, action: { type: string, payload: number }) {
            if (state && state.blocks && state.blocks[action.payload] && state.blocks[action.payload].topConnectors) {
                (state.blocks[action.payload].topConnectors as Array<Connector>).push({
                    link: null,
                    id: (new Date()).getTime()
                })
            } else {
                state.blocks[action.payload].topConnectors = [{
                    link: null,
                    id: (new Date()).getTime()
                }];
            }
        },
        incrementBottom: function (state: SchemeState, action: { type: string, payload: number }) {
            if (state && state.blocks && state.blocks[action.payload] && state.blocks[action.payload].bottomConnectors) {
                (state.blocks[action.payload].bottomConnectors as Array<Connector>).push({
                    link: null,
                    id: (new Date()).getTime()
                })
            } else {
                state.blocks[action.payload].bottomConnectors = [{
                    link: null,
                    id: (new Date()).getTime()
                }];
            }
        },
        incrementLeft: function (state: SchemeState, action: { type: string, payload: number }) {
            if (state && state.blocks && state.blocks[action.payload] && state.blocks[action.payload].leftConnectors) {
                (state.blocks[action.payload].leftConnectors as Array<Connector>).push({
                    link: null,
                    id: (new Date()).getTime()
                })
            } else {
                state.blocks[action.payload].leftConnectors = [{
                    link: null,
                    id: (new Date()).getTime()
                }];
            }
        },
        incrementRight: function (state: SchemeState, action: { type: string, payload: number }) {
            if (state && state.blocks && state.blocks[action.payload] && state.blocks[action.payload].rightConnectors) {
                (state.blocks[action.payload].rightConnectors as Array<Connector>).push({
                    link: null,
                    id: (new Date()).getTime()
                })
            } else {
                state.blocks[action.payload].rightConnectors = [{
                    link: null,
                    id: (new Date()).getTime()
                }];
            }
        },
        decrementTop(state: SchemeState, action: { type: string, payload: number }) {
            console.log('decrementTop');
            (state.blocks[action.payload].topConnectors as Array<Connector>).pop();
        },
        decrementBottom(state: SchemeState, action: { type: string, payload: number }) {
            console.log('decrementBottom');
            (state.blocks[action.payload].bottomConnectors as Array<Connector>).pop();
        },
        decrementLeft(state: SchemeState, action: { type: string, payload: number }) {
            console.log('decrementLeft');
            (state.blocks[action.payload].leftConnectors as Array<Connector>).pop();
        },
        decrementRight(state: SchemeState, action: { type: string, payload: number }) {
            console.log('decrementRight');
            (state.blocks[action.payload].rightConnectors as Array<Connector>).pop();
        },
    },
});

export const schemeActions = schemeSlice.actions;
export default schemeSlice.reducer;
