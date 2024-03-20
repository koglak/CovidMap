import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function MainLayout({ children }) { 
    return (
        <div>
            <Navigation />
            <div className="p-5">{children}</div> 
            <Footer/>
        </div>
    );
}

export default MainLayout;
