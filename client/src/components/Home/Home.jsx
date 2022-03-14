import "./home.scss";
import {Header} from "../Header/Header"
import { Banner } from "../Banner";
import {Product} from "../Product/Product"
import { Footer } from "../Footer/Footer";
export const Home = ()=>{
    return <>
            <Header />
            <Banner />
            <Product />
            <Footer />
    </>
}