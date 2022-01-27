import React, {ReactElement} from 'react';
import './play-button.css';

type Props = {
    toggle: () => void,
    children: ReactElement | ReactElement[]
};

export const PlayButton = ({toggle, children}: Props) => {
    return (
        <button className='play-button' onClick={toggle}>
            {children}
        </button>
    );
};

