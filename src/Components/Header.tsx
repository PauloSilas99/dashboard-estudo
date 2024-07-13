import { useData } from "../Context/DataContext";
import DateRange from "./DateRange";
import Meses from "./Meses";

function Header(){
    const {data} = useData();
    console.log(data)
    return (
        <header className="mb">
            <div className="mb">
                <DateRange />
            </div>
            <Meses />
        </header>
    )
}
export default Header;