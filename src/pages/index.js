import Head from "next/head";
import { Comunidade } from "../components/Comunidade";
import { CTA } from "../components/CTA";
import { Cursos } from "../components/Cursos.jsx";
import { Depoimentos } from "../components/Depoimentos";
import { Equipe } from "../components/Equipe";
import { Footer } from "../components/Footer";
import { Garantia } from "../components/Garantia";
import { Hero } from "../components/Hero";
import { Mensagens } from "../components/Mensagens";
import { Preco } from "../components/Preco";
import { Vagas } from "../components/Vagas";
import { VoceVaiAprender } from "../components/VoceVaiAprender";

import { request } from "graphql-request";
import { WhatsappButton } from "../components/WhatsappButton";

export default function Home({ cursos }) {
  return (
    <>
      <Head>
        <title>Adschool Prime</title>
        <meta property="og:title" content="Adschool Prime" />
        <meta
          name="description"
          content="Transformamos jovens em anunciantes profissionais e conectamos com o mercado"
        />
        <meta
          property="og:description"
          content="Transformamos jovens em anunciantes profissionais e conectamos com o mercado"
        />
        <meta property="og:image" content="/logo.png" key="ogimage" />
        <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script>
      </Head>
      <Hero />
      <Cursos cursos={cursos} />
      <CTA />
      <Mensagens />
      <VoceVaiAprender />
      <CTA />
      <Vagas />
      <CTA />
      <Equipe />
      <Comunidade />
      <Preco />
      <Garantia />
      <Depoimentos />
      <CTA />
      <Footer />
      <WhatsappButton />
    </>
  );
}

export const getStaticProps = async () => {
  const { cursos } = await request(
    "https://api-sa-east-1.graphcms.com/v2/ckyymve7a03ms01zcfbwngp0c/master",
    `
           {
            cursos {
              id
              horas
              ementa
              aulas
              nome
              video
              icone
              descricaoCompleta {
                html
              }
              descricaoBreve {
                html
                markdown
                text
              }
            }
          }
  
          `
  );

  return {
    props: {
      cursos,
    },
    revalidate: 60 * 60 * 1, //1 hour
  };
};
