import Header from "../components/header";
import Head from 'next/head';
import Footer from "../components/footer";



const Home = () => {
 return <>
    <Head>
    <title>Мир Врача</title>
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link href="https://fonts.googleapis.com/css2? Bebas+Neue ;900&display=swap" rel="stylesheet"/>
    </Head>
    <div className="wrapper">
    <Header/>
    <Footer/>
    </div>
    
    </>
      
 
}
  


export default Home;