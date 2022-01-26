import Head from "next/head";
import { Comunidade } from "../components/Comunidade";
import { CTA } from "../components/CTA";
import { Cursos } from "../components/Cursos";
import { Depoimentos } from "../components/Depoimentos";
import { Equipe } from "../components/Equipe";
import { Footer } from "../components/Footer";
import { Garantia } from "../components/Garantia";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Mensagens } from "../components/Mensagens";
import { Preco } from "../components/Preco";
import { Vagas } from "../components/Vagas";
import { VoceVaiAprender } from "../components/VoceVaiAprender";

export default function Home() {
  return (
    <>
      <Head>
        <title>Adschool Prime</title>
        <meta property="og:title" content="Adschool Prime" />
        <meta
          name="description"
          content="Transformamos jovens em anunciantes profissionais e conectamos com o mercado​"
        />
        <meta
          property="og:description"
          content="Transformamos jovens em anunciantes profissionais e conectamos com o mercado​"
        />
        <meta property="og:image" content="/logo.png" key="ogimage" />
      </Head>
      {/* <Header/> */}
      <Hero />
      <Cursos />
      <CTA />
      <Mensagens />
      <VoceVaiAprender />
      <CTA />
      <Vagas/>
      <CTA />
      <Equipe/>
      <Comunidade/>
      <Preco/>
      <Garantia/>
      <Depoimentos/>
      <CTA />
      <Footer/>

    </>
  );
}
