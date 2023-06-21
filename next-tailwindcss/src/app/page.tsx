import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Main from "./sections/Main";
import Rockets from "./sections/Rockets";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <body className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header></Header>
      <Main></Main>
      <hr className="mx-auto bg black dark:bg-white w-1/2"></hr>
      <Rockets></Rockets>
      <hr className="mx-auto bg black dark:bg-white w-1/2"></hr>
      <Testimonials></Testimonials>
      <hr className="mx-auto bg black dark:bg-white w-1/2"></hr>
      <Contact></Contact>
      <Footer></Footer>
    </body>
  );
}
