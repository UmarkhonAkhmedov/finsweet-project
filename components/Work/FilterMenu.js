import Link from "next/link";

function FilterMenu({menuItem}) {
  return (
    <div className='filterMenu'>
      {menuItem.map((item) => {
        return (
          <div key={item.id} className="filterMenu__block">
            <img className="filterMenu__block--img" src={`/images/work/template__${item.img}.png`} alt="" />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href={`/work/${item.id}`}>
              <span>View Portfolio <img src="/images/work/template__arrow.svg"/></span>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default FilterMenu;
