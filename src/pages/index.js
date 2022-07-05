/* eslint-disable react-hooks/exhaustive-deps */
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
import Script from "next/script";
import { Box } from "@chakra-ui/react";
import { getApolloClient } from "../utils/apollo-client";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Home({ cursos, equipe }) {
  // console.log(cursos);
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
        {/* <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script> */}
      </Head>
      <Hero />
      <Cursos cursos={cursos} />
      <CTA />
      <Mensagens />
      <VoceVaiAprender />
      <CTA />
      <Vagas />
      <CTA />
      <Equipe equipe={equipe}/>
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
  const apolloClient = getApolloClient();

  const data = await apolloClient.query({
    query: gql`
      {
        cursosY(where: { orderby: { field: DATE, order: ASC } }, first: 30) {
          nodes {
            curso {
              aulas
              descricaoBreve
              descricaoCompleta
              ementa {
                nome
              }
              horas
              icone
              video
            }
            date
            cursoYId
            title
          }
        }
      }
    `,
  });

  const equipe = await apolloClient.query({
    query: gql`
      {
        lp {
          configuracoesLp {
            equipe {
              cargo
              foto {
                mediaItemUrl
              }
              nome
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      cursos: data.data.cursosY.nodes,
      equipe: equipe.data.lp.configuracoesLp,
    },
    revalidate: 60 * 60 * 1, //1 hour
  };
};

// export const getStaticProps = async () => {
//   const { cursos } = await request(
//     "https://api-sa-east-1.graphcms.com/v2/ckyymve7a03ms01zcfbwngp0c/master",
//     `
//            {
//             cursos {
//               id
//               horas
//               ementa
//               aulas
//               nome
//               video
//               icone
//               descricaoCompleta {
//                 html
//               }
//               descricaoBreve {
//                 html
//                 markdown
//                 text
//               }
//             }
//           }

//           `
//   );

//   return {
//     props: {
//       cursos,
//     },
//     revalidate: 60 * 60 * 1, //1 hour
//   };
// };
