import World from '@svg-maps/world';
import { SVGMap } from 'react-svg-map';
import "react-svg-map/lib/index.css";
import MainLayout from '../layouts/MainLayout';

function Main() {
    return (
    <MainLayout>
        <SVGMap map={World} />
    </MainLayout>);
}

export default Main;