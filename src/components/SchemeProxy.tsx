import classes from './SchemeProxy.module.css';
import {Block, Connector} from '../store/types';
import DefaultConnector from './DefaultConnector';
import PlusConnector from './PlusConnector';
import BlockComponent from './Block';

type SchemeProxyProps = {
    id: number;
    index: number;
    top: number;
    left: number;
    onTopInc: (index: number) => void;
    onBottomInc: (index: number) => void;
    onLeftInc: (index: number) => void;
    onRightInc: (index: number) => void;
    onTopDec: (index: number) => void;
    onBottomDec: (index: number) => void;
    onRightDec: (index: number) => void;
    onLeftDec: (index: number) => void;
    block: Block;
    onMove: (index: number, x: number, y: number) => object
}

export default function SchemeProxyWrapper(props: SchemeProxyProps) {
    let topConnectors = null;
    let bottomConnectors = null;
    let leftConnectors = null;
    let rightConnectors = null;
    if (props.block.topConnectors?.length) {
        topConnectors = props.block.topConnectors.map((connector: Connector) => {
            return <DefaultConnector key={connector.id} index={props.index}
                                     onDec={props.onTopDec}/>

        });
    }
    if (props.block.bottomConnectors?.length) {
        bottomConnectors = props.block.bottomConnectors.map((connector: Connector) => {
            return <DefaultConnector key={connector.id} index={props.index}
                                     onDec={props.onBottomDec}/>
        });
    }
    if (props.block.leftConnectors?.length) {
        leftConnectors = props.block.leftConnectors.map((connector: Connector) => {
            return <DefaultConnector key={connector.id} index={props.index}
                                     onDec={props.onLeftDec}/>
        });
    }
    if (props.block.rightConnectors?.length) {
        rightConnectors = props.block.rightConnectors.map((connector: Connector) => {
            return <DefaultConnector key={connector.id} index={props.index}
                                     onDec={props.onRightDec}/>
        });
    }
    return (
        <div className={classes.proxy} key={props.id}
             style={{left: props.left, top: props.top}}>
            <div className={classes.top}>
                {topConnectors}
                <PlusConnector index={props.index} onInc={props.onTopInc}/>
            </div>
            <div className={classes.left}>{leftConnectors}<PlusConnector
                index={props.index} onInc={props.onLeftInc}/></div>
            <div className={classes.center}>
                <BlockComponent title={props.block.title}
                                index={props.index}
                                onMove={props.onMove}/>
            </div>
            <div className={classes.right}>{rightConnectors}<PlusConnector
                index={props.index} onInc={props.onRightInc}/></div>
            <div className={classes.bottom}>{bottomConnectors}<PlusConnector
                index={props.index} onInc={props.onBottomInc}/></div>
        </div>
    )
}
