import React from "react";
import { Route, Routes } from "react-router-dom";
import { Auto } from "./Components/Auto/Auto";
import { Register } from "./Components/Auto/Register/Register";
import { Autorization } from "./Components/Auto/Autorization/Autorization";
import { Aside } from "./Components/Aside/Aside";
import { ProfileContainer } from "./Components/Profie/ProfileContainer";
import { ContainerCreateAncets } from "./Components/CreateAncet/ContainerCreateAncets";
import { Ancets } from "./Components/Ancets/Ancets";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/auto" element={<Auto />}>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Autorization />} />
                </Route>
                <Route path="/" element={<Aside />}>
                    <Route path="person" element={<ProfileContainer />} />
                    <Route path="ancets" element={<Ancets/>} />
                    <Route path="create/:d" element={<ContainerCreateAncets/>} />
                    <Route path="chat" element={<div></div>} />
                </Route>
            </Routes>
        </>
    );
}

export { App };