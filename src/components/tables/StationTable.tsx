import React, {useEffect} from "react"
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {fetchBicycleCompanyById} from "../../store/action-creator/bicycle";

export const StationTable: React.FC = () => {

    const {id ,stations} = useTypedSelector(state => state.bicycle);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBicycleCompanyById(id))
        }, [])

    return (
        <table className="table table-stripped">
            <tbody id="data">
            {stations.map(station => <tr key={station.id}>
                <td>{station.name}</td>
                <td>{station.free_bikes}</td>
                <td>{station.extra?.slots ? station.extra?.slots : "Данные отсутствуют"}</td>
            </tr>)}
            </tbody>
        </table>
    )
}
