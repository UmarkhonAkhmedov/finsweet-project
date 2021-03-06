import Image from "next/image";
import Link from "next/link";



function FilterMenu({menuItem}) {
  return (
    <div className='filterMenu'>
      {menuItem.map((item) => {
        return (
          <div key={item.id} className="filterMenu__block">
            <div className="filterMenu__block--img">
              <Image width={623} height={380}  src={`/images/Work/template__${item.img}.png`} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link href={`/work/${item.id}`} passHref> 
              <span>View Portfolio <Image width={24} height={15} src="/images/Work/template__arrow.svg" alt=""/></span>
            </Link>
          </div>
        )
      })}
    </div>
  );
}

export default FilterMenu;

