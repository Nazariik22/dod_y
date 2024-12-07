import React from "react";
import { Ancet } from "./Ancet";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteAncetsAC } from "../../Redux/AncetReduser";
import { useNavigate } from 'react-router-dom';

const ContainerAncet = () => {
    const id = useParams().id;
    const idUser = useParams().idUser;
    const person = useSelector(state => state.person.id)
    const state = useSelector(state =>
        state.ancets).filter(item =>
            item.id === Number(id)
            && item.idUser === Number(idUser) && item)[0]
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hendletDelete = () => {
        dispatch(deleteAncetsAC(state.id, state.idUser));
        navigate(-1);
    }
    return (
        <Ancet
            state={state}
            person={person}
            hendletDelete={hendletDelete}
        />
    )
}
export { ContainerAncet }