import React from "react";
import { Ancet } from "./Ancet";
import { useParams } from "react-router-dom";

const ContainerAncet = () => {
    const id = useParams().id;
    const idUser = useParams().idUser;




    return (
        <Ancet
        />
    )
}
export { ContainerAncet }