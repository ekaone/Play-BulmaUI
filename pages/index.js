import Head from "next/head";
// import styles from '../styles/Home.module.css'
//components
import { CardSmall, CardMessage, Columns } from "../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <article className="message page is-primary">
          <div className="message-header">
            <p>Hello Bulma</p>
            <button className="delete" aria-label="delete"></button>
          </div>
          <div className="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <strong>Pellentesque risus mi</strong>, tempus quis placerat ut,
            porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam
            gravida purus diam, et dictum <a>felis venenatis</a> efficitur.
            Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales,
            arcu et sollicitudin porttitor, tortor urna tempor ligula, id
            porttitor mi magna a neque. Donec dui urna, vehicula et sem eget,
            facilisis sodales sem.
          </div>
        </article>
        <CardSmall />
        <CardMessage />
        <Columns />
      </main>

      <footer>
        <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
          Powered by Bulma.io
        </a>
      </footer>
    </div>
  );
}
