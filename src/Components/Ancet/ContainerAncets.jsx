import React from "react";
import { Ancet } from "./Ancet";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ContainerAncet = () => {
    const id = useParams().id;
    const idUser = useParams().idUser;
    const person = useSelector(state => state.person.id)
    const state = useSelector(state =>
        state.ancets).filter(item =>
            item.id === Number(id)
            && item.idUser === Number(idUser) && item)[0]

    return (
        <Ancet
            state={state}
            person={person}
        />
    )
}
export { ContainerAncet }