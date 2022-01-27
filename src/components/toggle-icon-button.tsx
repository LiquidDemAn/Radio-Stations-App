import {Button} from 'react-bootstrap';
import {FcLike, FcLikePlaceholder} from 'react-icons/all';
import React from 'react';

type Props = {
    active: boolean,
    onClick: () => void
};

export const ToggleIconButton = ({active, onClick}: Props) => {
    return (
        <Button variant='outline-light' onClick={onClick}>{active ? <FcLike/> : <FcLikePlaceholder/>}</Button>
    )
};