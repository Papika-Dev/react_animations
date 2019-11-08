import React, { useState } from 'react';
import { useTransition } from 'react-spring';
import { Route, Switch, useLocation, useRouteMatch } from 'react-router-dom';
import { SlideWrapper, Links, Title, Icons, AnimatedBox } from './styles';
import { arrowRight2 } from 'react-icons-kit/icomoon/arrowRight2';
import { arrowLeft2 } from 'react-icons-kit/icomoon/arrowLeft2';

const First = ({ pre, next }) => {

    return (
        <SlideWrapper position={1}>
            <Title>First</Title>
            <Links to="/slider/2" onClick={next}>
                <Icons icon={arrowRight2} size={28} />
            </Links>
            <Links to="/slider/3" prev="true" onClick={pre}>
                <Icons icon={arrowLeft2} size={28} />
            </Links>
        </SlideWrapper>
    )
}

const Second = ({ pre, next }) => {

    return (
        <SlideWrapper position={2}>
            <Title>Second</Title>
            <Links to="/slider/3" onClick={next}>
                <Icons icon={arrowRight2} size={28} />
            </Links>
            <Links to="/slider/1" prev="true" onClick={pre}>
                <Icons icon={arrowLeft2} size={28} />
            </Links>
        </SlideWrapper>
    )
}

const Third = ({ pre, next }) => {

    return (
        <SlideWrapper position={3}>
            <Title>Third</Title>
            <Links to="/slider/1" onClick={next}>
                <Icons icon={arrowRight2} size={28} />
            </Links>
            <Links to="/slider/2" prev="true" onClick={pre}>
                <Icons icon={arrowLeft2} size={28} />
            </Links>
        </SlideWrapper>
    )
}


const Slider = () => {
    const [isNext, setIsNext] = useState(false);
    const location = useLocation();
    let { url } = useRouteMatch();
    
    const transitions = useTransition(location, location => location.pathname, {
        config: { duration: 300 },
        from: { opacity: 0, transform: isNext ? `translate3d(100%, 0, 0)` : `translate3d(-100%, 0, 0)` },
        enter: { opacity: 1, transform: `translate3d(0%, 0, 0)` },
        leave: { opacity: 0, transform: isNext ? `translate3d(-50%, 0, 0)` : `translate3d(50%, 0, 0)` }
    });

    const handleNextOnCLick = () => {
        setIsNext(true)
    }
    const handlePrevOnCLick = () => {
        setIsNext(false)
    }
    return (
        transitions.map(({ item, props, key }) => (
            <AnimatedBox style={props} key={key}>
                <Switch location={item}>
                    <Route path={`${url}/`} exact >
                        <First pre={handlePrevOnCLick} next={handleNextOnCLick} />
                    </Route>
                    <Route path={`${url}/1`} >
                        <First pre={handlePrevOnCLick} next={handleNextOnCLick} />
                    </Route>
                    <Route path={`${url}/2`} >
                        <Second pre={handlePrevOnCLick} next={handleNextOnCLick} />
                    </Route>
                    <Route path={`${url}/3`} >
                        <Third pre={handlePrevOnCLick} next={handleNextOnCLick} />
                    </Route>
                </Switch>
            </AnimatedBox>
        ))
    )
};

export default Slider;