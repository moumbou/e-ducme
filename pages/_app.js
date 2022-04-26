import "../css/style.css";
import Head from "next/head";
import { Provider } from "react-redux";
import { store } from "../store";
import MessageHandler from "../components/messages/MessageHandler";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>E-learning</title>
      </Head>
      <div className="grid wrapper">
        <MessageHandler />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;
