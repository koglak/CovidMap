import World from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";
import MainLayout from '../layouts/MainLayout';
import "../styles/map.css"
import { useDispatch  } from 'react-redux';
import { fetchDataRequest, setCountryName } from '../store/actions';
import { getIsoCodeByName } from '../utils/methods';


function Main() {
    const dispatch = useDispatch();

    const onLocationClick = (event) => {
        const countryName = event.target.getAttribute("name");
        dispatch(setCountryName(countryName));
        const isoCode = getIsoCodeByName(countryName);
        if (isoCode) {
            dispatch(fetchDataRequest(isoCode));
        } else {
            // ISO kodu bulunamadı, uygun bir hata işleyici ekle
        }
    };
    
    return (
    <MainLayout>
        <SVGMap map={World} onLocationClick={onLocationClick}/>
    </MainLayout>);
}

export default Main;