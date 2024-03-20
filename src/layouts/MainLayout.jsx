import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function MainLayout({ children }) { // children burada props olarak doğru bir şekilde tanımlanmış
    return (
        <div>
            <Navigation />
            <div>{children}</div> {/* Çocuk bileşenler burada doğru bir şekilde render edilir */}
            <Footer/>
        </div>
    );
}

export default MainLayout;
