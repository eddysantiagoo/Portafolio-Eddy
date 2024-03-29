import Navbar from 'components/Static/Navbar'
import { PageProvider } from 'context/page'
import { ThemeProvider } from 'context/theme'
import toast, { Toaster } from 'react-hot-toast';
import 'styles/globals.css'
import "react-multi-carousel/lib/styles.css";
import { useEffect } from 'react';
import Footer from 'components/Static/Footer';
import ContextMenu, { Item } from 'components/Global/ContextMenu';
import Background from 'components/Global/background';
import Key from 'components/Global/Key';
import { Analytics } from '@vercel/analytics/react';
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";
import ScrollArrow from 'components/Global/ScrollArrow';


function MyApp({ Component, pageProps }) {

  return <>
      <PageProvider>
        <main>
          <head>
            <title>Eddy Santiago | Desarrollador</title>
          </head>
          <ContextMenu
            content={event => <>
              <div>
                {event.hasBack && (<Item icon={<i className="fa fa-arrow-left" />} text="Regresar" kbd={["Alt", "◀"]} onClick={event.goBack} />)}
                {event.hasForward && (<Item icon={<i className="fa fa-arrow-right" />} text="Adelantar" kbd={["Alt", "▶"]} onClick={event.goForward} />)}
                <Item icon={<i className="fa fa-redo" />} text="Refrescar" kbd={["Ctrl", "R"]} onClick={event.refreshPage} />
              </div>

              <div className="pt-2">
                <Item icon={<i className="fa fa-code" />} text="Codigo fuente" onClick={event.viewSource} />
              </div>
            </>}
          >
            <Navbar />
            <main className="min-h-[67vh] px-6 lg:px-0">
              <Component {...pageProps} />
              <Analytics />
              <ScrollArrow />
            </main>
            <Footer />
          </ContextMenu>
         
        </main>
      </PageProvider>
  </>
}

export default MyApp
