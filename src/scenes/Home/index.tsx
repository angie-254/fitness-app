import type { SelectedPage } from '@/shared/types';
import useMediaQuery from '@/useMediaQuery';
import HomePageText from "@/assets/HomePageText.png";

type Props = {
     SelectedPage: (value: SelectedPage) => void;
}

const Home = ( {setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
        
        {/*IMAGE AND MAIN HEADER */}
        <div>
            {/**MAIN HEADER */}
            <div>
                {/* HEADINGS */}
            <div>
                <div>
                    <img alt="home-page-text" src={HomePageText} />
                </div>
            </div>

            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
            
            </div>

           

        </div>

    </section>
  )
}

export default Home;