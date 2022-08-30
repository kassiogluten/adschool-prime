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
      <Hero data={wpData.sessao1} />
      <Cursos data={wpData.sessao2} cursos={cursos} />
      <CTA />
      <Mensagens data={wpData.sessao3} />
      <VoceVaiAprender data={wpData.sessao4} />
      <CTA />
      <Vagas data={wpData.sessao5} />
      <CTA />
      <Equipe data={wpData.sessao6} />
      <Comunidade data={wpData.sessao7} />
      <Preco data={wpData.sessao8} />
      <Garantia data={wpData.sessao9} />
      <Depoimentos data={wpData.sessao10} />
      <CTA />

      <Footer />
      <WhatsappButton />
    </>
  );
}

export const getServerSideProps = async () => {
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
            sessao3 {
              fieldGroupName
              mensagem
              texto
            }
            sessao4 {
              streaming {
                titulo
              }
              subtitulo
              titulo
            }
            sessao5 {
              subtitulo
              titulo
              listarVagas {
                local
                nivel
                nome
                regime
                salario
                fieldGroupName
              }
              fieldGroupName
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
            sessao7 {
              subtitulo
              titulo
              vantagens {
                icone
                texto
                titulo
              }
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
              }
            }
            sessao10 {
              fieldGroupName
              subtitulo
              titulo
            }
            sessao9 {
              fieldGroupName
              subtitulo
              texto
              titulo
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      cursos: data.data.cursosY.nodes,
      wpData: wpData.data.lp.configuracoesLp,
    },
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
