import { Link } from "react-router-dom";

const Categories = ({categories}) => {
    return ( 
        <div className="flex flex-wrap w-full justify-around">
          {categories.map((el) => (
            <Link to={`/catalog-artist?id=${el._id}`} key={el.name} className="relative my-[27px] w-[110px]">
              <div className="w-full flex flex-col items-center gap-[12px]">
                <img src={`${process.env.REACT_APP_API_URL}/media/${el.svgName}`} alt="icon" className="w-[60px] h-[60px]" />
                <span className="text-[16px] font-bold">{el.name}</span>
              </div>
              <div className={`rounded-[15px] py-[4px] px-[8px] flex items-center justify-center absolute right-4 -top-8 text-[12px] ${getClassColor(el.color)}`}>
                {el.countArtist}
              </div>
            </Link>
          ))}
        </div>
     );
}
 
const getClassColor = (color) => {
    switch(color) {
      case 'orange':
        return 'bg-customorange';
      case 'green':
        return 'bg-customgreen';
      case 'yellow':
        return 'bg-customyellow';
      case 'pink':
        return 'bg-custompink';
      case 'purple':
        return 'bg-custompurple';
      default:
        return '';
    }
  }

  
export default Categories;