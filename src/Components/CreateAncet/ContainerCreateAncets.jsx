import { useState } from "react"
import { useSelector } from "react-redux"
import { CreateAncets } from "./CreateAncets";
import imageCompression from "browser-image-compression";
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ContainerCreateAncets = () => {
    const user_id = useSelector(state => state.person._id);
    const params = useParams().d;
    const [ancet, setAncet] = useState({
        idUser: user_id,
        alias: null,
        allergy: null,
        age: null,
        breed: null,
        vaccinations: null,
        c: null,
        city: null,
        img: 'null',
        description: null,
    })
    const hendlerInput = async (data, action) => {
        switch (action) {
            case 'alias':
                setAncet({ ...ancet, alias: data })
                break;
            case 'allergy':
                setAncet({ ...ancet, allergy: data })
                break;
            case 'city':
                setAncet({ ...ancet, city: data })
                break;
            case 'age':
                setAncet({ ...ancet, age: data })
                break;
            case 'breed':
                setAncet({ ...ancet, breed: data })
                break;
            case 'vaccinations':
                setAncet({ ...ancet, vaccinations: data })
                break;
            case 'c':
                setAncet({ ...ancet, c: data })
                break;
            case 'description':
                setAncet({ ...ancet, description: data })
                break;
            case 'img':
                const option = {
                    maxSizeMB: 1,
                    maxWidthOrHeight: 400,
                    useWebWorker: true,
                }
                const compress = await imageCompression(data, option);
                const reader = new FileReader();
                reader.onloadend = () => {
                    const base64Data = reader.result;
                    setAncet({ ...ancet, img: base64Data });
                }
                reader.readAsDataURL(compress);
                break;
            default:
                break;
        }
    }
    const addAncet = async () => {
            try {
                const response = await axios.post(`https://glacial-island-86858-012f45b91779.herokuapp.com/ancet/create`, ancet, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                setAncet({
                    idUser: user_id,
                    alias: null,
                    allergy: null,
                    age: null,
                    breed: null,
                    vaccinations: null,
                    c: null,
                    city: null,
                    img: 'null',
                    description: null,
                })
                alert('Успіх!')
                
            } catch (error) {
                alert('Не вдалося створити анкету. Спробуйте ще раз.');
            }
        
    }
    return <CreateAncets
        url={params}
        hendlerInput={hendlerInput}
        addAncet={addAncet}
        ancet={ancet}
    />
}
export { ContainerCreateAncets }

