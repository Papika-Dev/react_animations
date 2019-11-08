import React, { useRef, useState } from 'react';
import { useChain, useSpring, config, useTransition } from 'react-spring';
import { Item, Container } from './styles';
import Data from './Data';

const AnimaBox = () => {
    const [open, setOpen] = useState(false);
    const firstRef = useRef();
    const { sizeW, sizeH, ...rest } = useSpring({
        ref: firstRef,
        config: config.stiff,
        from: { sizeW: 150, sizeH: 35, background: 'hotpink' },
        to: { sizeW: open ? 900 : 150, sizeH: open ? 350 : 35, background: open ? 'white' : 'hotpink' }
    })
    const transRef = useRef();
    const transitions = useTransition(open ? Data : [], item => item.name, {
        ref: transRef,
        unique: true,
        trail: 200 / Data.length,
        from: { opacity: 0, transform: `scale(0)` },
        enter: [{opacity: 1, transform: `scale(1.1)`}, {opacity: 1, transform: `scale(1)`}],
        leave: { opacity: 0, transform: `scale(0)` }
    })
    useChain(open ? [firstRef, transRef] : [transRef, firstRef], 0, open ? 0.1 : 0.4);

    return (
        <>

            <Container style={{ ...rest, maxWidth: sizeW, height: sizeH }} onClick={() => setOpen(!open)}>
                {transitions.map(({ item, key, props }) => (
                    <Item key={key} style={{ ...props, background: item.css }} />
                ))}
            </Container>

        </>
    )
};

export default AnimaBox;