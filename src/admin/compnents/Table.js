import react from "react";

export default function Table(props) {
    let data = props.data;
    let headings = props.headings;
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        {
                            headings.map(element => {
                                return (
                                    <th scope="col" className="text-center">{element}</th>
                                )
                            })
                        }
                        <th scope="col" className="text-center">actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(element => {
                            return (
                                <tr>
                                    <th scope="row">{element.id}</th>
                                    <td className="text-center">{element.name}</td>
                                    <td className="text-center">{element.prenom}</td>
                                    <td className="text-center">{element.city}</td>
                                    <td className="text-center">
                                        <i className="mx-5"><i className="fa-solid fa-trash text-danger"></i></i>
                                        <i className="fa-solid fa-pen-to-square text-primary"></i>
                                    </td>

                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    );
}