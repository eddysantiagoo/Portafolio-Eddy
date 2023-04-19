import axios from "axios";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Image from "next/image";


function EjemploRuta() {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto py-12 w-full px-6 lg:px-0">
      {/* SEO CON NEXT */}

      <NextSeo
        title="Detroit"
        titleTemplate="Eddy | Blog personal %s"
        description="Este artículo de reseña del videojuego Detroit: Become Human presenta una visión general del juego, enfocándose en su trama y en las características que lo hacen único en su género."
        // canonical="https://www.misitioweb.com/" "canonical" es una etiqueta que se utiliza en SEO para indicar a los motores de búsqueda la URL canónica de una página. Esto significa que se establece una URL preferida para una página específica, que ayuda a evitar contenido duplicado y mejora la clasificación en los motores de búsqueda. En este caso, "canonical=https://www.misitioweb.com/" significa que se está indicando que la URL canónica de la página es https://www.misitioweb.com/.
        keywords={[
          "la aventura grafica de detroit become human",
          "articulo de eddy santiago",
          "articulo eddy detroit videojuego",
        ]}
        openGraph={{
          type: "website",
          title: "Eddy | Blog personal articulo Detroit",
          description:
            "Articulo sobre la aventura gráfica de Detroit: Become Human",
          images: [
            {
              url: "https://imgbox.io/ib/w35gZgMZfq.png",
              width: 1440,
              height: 661,
              alt: "Imagen del blog",
            },
          ],
        }}
      />

      <div className="relative h-96 w-full">
        <img
          src="/images/Detroit.jpg"
          alt="Imagen Logo Detroit"
          className="rounded-xl absolute h-full w-full object-cover object-center sm:object-contain"
        />
        <div className="absolute bottom-0 left-0 w-full h-full dark:bg-black/10 shadow-xl" />
      </div>

      <div className="mt-8">
        <p className="text-4xl font-bold mt-8">
          La aventura gráfica de Detroit: Become Human
        </p>
        <div className="flex items-center gap-4 mt-2">
          <div>
            <i className="fas fa-clock text-zinc-400" />
            <span className="text-zinc-400 ml-2">4 minutos de lectura</span>
          </div>
          <div>
            <i className="fas fa-calendar-alt text-zinc-400" />
            <span className="text-zinc-400 ml-2">13 de abril de 2023</span>
          </div>
        </div>
        <article className="mt-12 prose prose-sm lg:prose-lg dark:prose-invert prose-img:rounded-lg prose-a:text-blue-500 prose-a:no-underline">
          En el año 2020, después de ahorrar mucho tiempo, tuve la oportunidad
          de comprarme mi PlayStation 4. A pesar de que fue una experiencia
          curiosa (ya que casi no me la envian), finalmente la consola llegó.
          Cuando la abrí, aún recuerdo que por suerte venía mi consola y no un
          ladrillo. Además de la consola en sí, también venía un videojuego del
          cual no tenía ni idea cuál era. En ese momento, no había acordado nada
          con el vendedor sobre la compra de algún juego extra, pero bueno, ese es el
          titulo del que les quiero contar hoy.
          <br />
          <br />
          
          Desarrollado por Quantic Dream y publicado en el 2018{" "}
          <strong>Detroit: Become Human</strong> es una aventura gráfica que
          plantea una interesante reflexión sobre el futuro de la inteligencia
          artificial y su impacto en la sociedad. A través de una trama
          cautivadora y la toma de decisiones importantes que influyen en el
          rumbo de la historia, el jugador sé sumerge en un mundo donde los
          androides se han vuelto cada vez más presentes en la vida cotidiana de
          los humanos. Siendo sinceros él juego no me llamo mucho la atención no
          lo conocía, no lo había escuchado ni nada, pero finalmente le di una
          oportunidad.{" "}
          <strong>Spoiler: no pude haber tomado mejor decisión.</strong>
          <br />
          <br />
          Este juego es simple (Se los juro) literalmente es una aventura
          gráfica que se desarrolla mediante tus decisiones. Nos pone en la
          "piel" de tres androides y está ambientado en el año 2035. En ese
          momento, por lo general, todas las personas tienen un androide de uso
          personal. Existen varios modelos especializados en diferentes áreas,
          algunos de ellos son:
          <ul>
            <li>
              PL600: Modelo comercial de androide diseñado para asistencia
              doméstica como el mantenimiento del hogar y la supervisión de
              niños
            </li>
            <li>
              GJ200: Modelo comercial de androide diseñado para simular la
              amistad
            </li>
            <li>
              ST300: Modelo comercial de androide diseñado para ser una
              recepcionista
            </li>
            <li>
              El HR400 y WR400 "Traci": Son el diseño más avanzado de parejas
              sexuales masculinas y femeninas, diseñados para participar en
              actividades sexuales desde las formas más simples hasta las más
              fantasiosas
            </li>
            <li>RT600: Primer androide en pasar el Test de Turing</li>
            <a
              href="https://detroit-become-human.fandom.com/wiki/Android#List_of_android_models"
              target="_blank"
            >
              Existen muchos otros modelos de androides, si te interesa saber
              mas puedes ingresar a la lista completa dando click aquí :)
            </a>
          </ul>
          Los androides de los cuales seremos lideres en sus decisiones se
          llaman: <strong>Connor</strong>, un androide de la policía que busca
          detener a los androides desviados que se rebelan contra los humanos
          conocidos en esta sociedad como "Divergentes"; <strong>Markus</strong>
          , un androide que comienza a cuestionar su existencia y lidera a un
          grupo de androides que buscan su libertad; y <strong>Kara</strong>,
          una androide que se escapa de la casa de sus dueños para comenzar una
          nueva vida.
          <img
            src="https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2018/05/Detroit-Become-Human-review-feature-image.jpg"
            alt="Imagen de los 3 androides"
          />
          El juego se centra en las decisiones y elecciones que el jugador debe
          tomar a lo largo de la historia, lo que afecta el curso y resultado
          del juego. La trama principal del juego consiste en que nosotros le
          demos rumbo con nuestras decisiones, utilizando la ética y la moral de
          cada uno, lo que impactaría de alguna manera en la forma de actuar de
          un androide. ¿Es cierto que la razón, la ética, la moral, los
          sentimientos y la libertad son algo que un androide puede llegar a
          sentir e identificar, o simplemente es una máquina que sigue las
          líneas de código que le fueron dadas en su momento? No lo sé, Rick...
          <br />
          <br />
          En el juego se abordan estos y muchos otros temas. No existe un final
          específico, la verdad es que se rumorea que cuenta con hasta{" "}
          <strong>8 finales,</strong> ya que todo depende de las decisiones que
          tú tomes en la historia y las diferencias entre cada uno de los
          finales son notables.
          <br />
          <br />
          Por lo comentado antes, por su ciencia ficción, su narrativa, sus
          gráficos, por los avances tecnológicos que estamos presenciando y por
          su jugabilidad que se puede adaptar para casi cualquier persona, les
          recomiendo este bello videojuego.{" "}
          <strong>(Abajo esta el trailer denle un vistazo)</strong>
          <iframe
            className="rounded-xl max-w-7xl mx-auto pt-3 w-full lg:px-0"
            width="676"
            height="380"
            src="https://www.youtube.com/embed/ldNsaU4eGFU"
            title="ELIGE el DESTINO de la HUMANIDAD en DETROIT: BECOME HUMAN – Tráiler en Español"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <hr />
          Pueden encontrar a Detroit Become Human en:{" "}
          <strong>Steam, Epic Games y PlayStation 4/5. </strong>
          Yo personalmente lo he visto en formato físico para PS4 usado por unos
          COP $40.000 o incluso COP $30.000 y en formato digital en temporada de
          rebajas lo he visto en unos COP $49.000 en la Store de Play Station y
          en Steam también a ese precio.
        </article>
      </div>
    </div>
  );
}

export default EjemploRuta;
