import classes from '../App.module.css';
import {MouseEvent, useState} from 'react';

type BlockProps = {
    title: string;
    index: number;
    onMove: (index: number, x: number, y: number) => object
}

export default function BlockComponent(props: BlockProps) {

    const [drag, setDrag] = useState(false);
    const [previous, setPrevious] = useState({x: 0, y: 0});

    const mouseMoveListener = (e: MouseEvent<HTMLDivElement>) => {
        if (drag) {
            props.onMove(props.index, e.clientX - previous.x, e.clientY - previous.y);
            setPrevious({x: e.clientX, y: e.clientY});
        }
    }

    return (
        <div className={classes.block}
             onMouseDown={(e: MouseEvent<HTMLDivElement>) => {
                 setPrevious({x: e.clientX, y: e.clientY});
                 setDrag(true)
             }}
             onMouseUp={() => setDrag(false)}
             onMouseOut={() => setDrag(false)}
             onMouseLeave={() => setDrag(false)}
             onMouseMove={mouseMoveListener}
        >
            <p className={classes.title}>{props.title}</p>
        </div>
    )
}
