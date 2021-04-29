import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchBicycle, saveID} from "../../store/action-creator/bicycle";
import {useTypedSelector} from "../../hooks/useTypeSelector";
import {useHistory} from "react-router-dom"

export const BicycleTable: React.FC = () => {

    const history = useHistory()
    const {bicycle} = useTypedSelector(state => state.bicycle);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBicycle())
    }, [])

    const handlerRow = (id) => {
        dispatch(saveID(id))
        history.push(`/networks/${id}`)
    }

    return <React.Fragment>
        <table className="table table-stripped">
            <tbody id="data">
            {(bicycle.map(item => <tr onClick={() => handlerRow(item.id)} key={item.id}>
                    <td>{item.company}</td>
                    <td>{item.location.city}</td>
                </tr>))}
            </tbody>
        </table>
    </React.Fragment>
}