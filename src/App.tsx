import {useState} from 'react';
import SchemeProxyWrapper from './components/SchemeProxy';
import {SchemeProxy, SchemeProxies} from './store/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from './store';
import {schemeActions} from './store/scheme';
import classes from './App.module.css';

export const schemeProxies: SchemeProxies = {
    proxies: [
        {
            top: 100,
            left: 100,
        },
        {
            top: 300,
            left: 300,
        },
    ]
}

function App() {
    const dispatch = useDispatch();
    const scheme = useSelector((state: AppState) => state.scheme.blocks);
    const [proxies, setProxies] = useState(schemeProxies.proxies);

    const incTopConnectorsHandler = (index: number) => {
        dispatch(schemeActions.incrementTop(index));
    }
    const incBottomConnectorsHandler = (index: number) => {
        dispatch(schemeActions.incrementBottom(index));
    }
    const incLeftConnectorsHandler = (index: number) => {
        dispatch(schemeActions.incrementLeft(index));
    }
    const incRightConnectorsHandler = (index: number) => {
        dispatch(schemeActions.incrementRight(index));
    }

    const decTopConnectorsHandler = (index: number) => {
        dispatch(schemeActions.decrementTop(index));
    }

    function decBottomConnectorsHandler(index: number) {
        dispatch(schemeActions.decrementBottom(index));
    }

    function decLeftConnectorsHandler(index: number) {
        dispatch(schemeActions.decrementLeft(index));
    }

    function decRightConnectorsHandler(index: number) {
        dispatch(schemeActions.decrementRight(index));
    }

    function onMoveHandler(index: number, valueX: number, valueY: number) {
        setProxies((prevState) => {
            return prevState.map((proxy: SchemeProxy, idx: number) => {
                if (idx === index) {
                    return {
                        left: (proxy.left + valueX) >= 0 ? (proxy.left + valueX < 800 ? proxy.left + valueX : 800) : 0,
                        top: (proxy.top + valueY) >= 0 ? (proxy.top + valueY < 800 ? proxy.top + valueY : 800) : 0,
                    };
                }
                return proxy;
            });
        })
    }


    const mouseListener = (index: number, x: number, y: number) => {
        onMoveHandler(index, x, y);
        return {x, y};
    }


    const blockScheme = scheme.map((block, index) => {
        return (
            <SchemeProxyWrapper key={block.id} id={block.id} index={index}
                                left={proxies[index].left}
                                top={proxies[index].top}
                                onTopInc={incTopConnectorsHandler}
                                onBottomInc={incBottomConnectorsHandler}
                                onLeftInc={incLeftConnectorsHandler}
                                onRightInc={incRightConnectorsHandler}
                                onTopDec={decTopConnectorsHandler}
                                onBottomDec={decBottomConnectorsHandler}
                                onLeftDec={decLeftConnectorsHandler}
                                onRightDec={decRightConnectorsHandler}
                                block={block}
                                onMove={mouseListener}/>
        );
    })
    return (
        <div className={classes.canvas}>
            {blockScheme}
        </div>
    );
}

export default App;
