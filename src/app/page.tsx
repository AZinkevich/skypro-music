//import styles from "./page.module.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Menu from "@/components/Menu/Menu";
import Search from "@/components/Search/Search";
import Filters from "@/components/Filters/Filters";
import Player from "@/components/Player/Player";
import Tracks from "@/components/Tracks/Tracks";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <Menu />
          <div className="main__centerblock centerblock">
            <Search />
            <h2 className="centerblock__h2">Треки</h2>
            <Filters />
            <Tracks />
          </div>
          <Sidebar />
        </main>
        <Player />
        <footer className="footer" />
      </div>
    </div>
  );
}
