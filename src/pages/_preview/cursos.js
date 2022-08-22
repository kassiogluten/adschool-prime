import Head from "next/head";
import { CursosPreview } from "../../components/CursosPreview";

export default function Preview() {
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
        {/* <script
          src="https://cdn.onesignal.com/sdks/OneSignalSDK.js"
          async=""
        ></script> */}
      </Head>
      <CursosPreview />
    </>
  );
}
