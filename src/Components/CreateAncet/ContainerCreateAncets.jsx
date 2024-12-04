import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { CreateAncets } from "./CreateAncets";
import { createAncetsAC } from "../../Redux/AncetReduser";
import imageCompression from "browser-image-compression";

const ContainerCreateAncets = () => {
    const user_id = useSelector(state => state.person.id);
    const params = useParams().d;
    const [ancet, setAncet] = useState({
        id: null,
        idUser: null,
        alias: null,
        allergy: null,
        age: null,
        breed: null,
        vaccinations: null,
        c: null,
        city: null,
        img: null,
        description: null,
    })
    const dispatch = useDispatch();

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
                setAncet({ ...ancet, v: data })
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
    const countAncets = useSelector(state => state.ancets).length - 1;
    const maxLenghtAncets = useSelector(state => state.ancets)[countAncets];
    const addAncet = () => {
        if (ancet.alias && ancet.age && ancet.allergy && ancet.city && ancet.c && ancet.breed && ancet.img){
            setAncet({ ...ancet, idUser: user_id })
            setAncet({ ...ancet, id: maxLenghtAncets + 1 })
            dispatch(createAncetsAC(ancet))
            setAncet({
                id: null,
                idUser: null,
                alias: '',
                allergy: '',
                age: '',
                breed: '',
                vaccinations: '',
                c: '',
                city: '',
                img: null,
                description: '',
            })
        }else{
            alert('заповніть усі поля перед створенням анкети!')
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

