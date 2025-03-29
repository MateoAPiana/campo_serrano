import { productsWalks } from "src/pages/products/service/walks/productsWalks";
import "./DescriptionClient.css"

export const DescriptionClient = () => {
  const walkZone = globalThis.window?.location?.search?.split('page=')[1];

  return (
    <>
      <main className="DescriptionClient">
        <h1 className="DescriptionClient__title">{walkZone ?? ""}</h1>
      </main>
      <nav className="nav">
        <h2 className="nav__title">Walks</h2>
        <ul className="nav__list">
          {
            productsWalks.map((walk, index) => (
              <li key={index}>
                <a
                  className={`nav__item ${walk === walkZone ? "item_checked" : ""}`}
                  href={`/products/service/walks/description/?page=${walk}`}
                >
                  {walk}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
    </>
  )
}
