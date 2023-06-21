import react from "react";

export default function Table(props) {
    let data=props.data;
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">name</th>
                        <th scope="col">prenom</th>
                        <th scope="col">city</th>
                        <th scope="col" colSpan={2}>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(element=>{
                            return(
                                <tr>
                                <th scope="row">{element.id}</th>
                                <td>{element.name}</td>
                                <td>{element.prenom}</td>
                                <td>{element.city}</td>
                                <td>delete</td>
                                <td>update</td>
                            </tr>
                            )
                        })
                    }
                    
                </tbody>
            </table>
        </>
    );
}