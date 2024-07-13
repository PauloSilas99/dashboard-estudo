import { useData } from "../Context/DataContext";

function Resumo(){
    const {data} = useData();
    console.log(data)
    return <div>Resumo</div>
}
export default Resumo;