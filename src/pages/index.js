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
import { useMyContext } from "../contexts/Context";

export default function Home({ cursos, wpData }) {
  const { setActiveCampain } = useMyContext();

  useEffect(() => {
    setActiveCampain(wpData.sessao8.planos[0].activeCampain);
  }, [wpData]);
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
      {wpData.sessao1 && <Hero data={wpData.sessao1} />}
      {wpData.sessao2 && <Cursos data={wpData.sessao2} cursos={cursos} />}
      <CTA />
      {wpData.sessao3 && <Mensagens data={wpData.sessao3} />}
      {wpData.sessao4 && <VoceVaiAprender data={wpData.sessao4} />}
      <CTA />
      {wpData.sessao5 && (
        <>
          <Vagas data={wpData.sessao5} />
          <CTA />
        </>
      )}
      {wpData.sessao6 && <Equipe data={wpData.sessao6} />}
      {wpData.sessao7 && <Comunidade data={wpData.sessao7} />}
      {wpData.sessao8 && <Preco data={wpData.sessao8} />}
      {wpData.sessao9 && <Garantia data={wpData.sessao9} />}
      {wpData.sessao10 && <Depoimentos data={wpData.sessao10} />}
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
              iconetb
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

  const wpData = await apolloClient.query({
    query: gql`
      {
        lp {
          configuracoesLp {
            sessao1 {
              logo {
                mediaItemUrl
              }
              slogan
              subtitulo
              titulo
            }
            sessao2 {
              titulo
              subtitulo
              cursos {
                aulas
                descricaoBreve
                descricaoCompleta
                fieldGroupName
                horas
                icone
                video
              }
            }
            sessao4 {
              streaming {
                titulo
              }
              subtitulo
              titulo
            }
            sessao6 {
              equipe {
                nome
                fieldGroupName
                cargo
                foto {
                  mediaItemUrl
                }
              }
              titulo
              subtitulo
              fieldGroupName
            }
            sessao8 {
              titulo
              subtitulo
              planos {
                conteudo {
                  titulo
                }
                legenda
                periodo
                subtitulo
                titulo
                valor
                activeCampain
                link
              }
            }
            sessao10 {
              fieldGroupName
              subtitulo
              titulo
            }
          }
        }
      }
    `,
  });

  console.log("root wp data", wpData);
  return {
    props: {
      cursos: data.data.cursosY.nodes,
      wpData: wpData?.data?.lp?.configuracoesLp || null,
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
