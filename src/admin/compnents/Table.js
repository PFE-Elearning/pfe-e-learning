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
                    {data.map((element, index) => (
            <tr key={index}>
              {headings.map((heading, index) => (
                <td key={index} className="text-center">
                  {element[heading]}
                </td>
              ))}
              <td className="text-center">
                <i className="mx-5">
                  <i className="fa-solid fa-trash text-danger"></i>
                </i>
                <i className="fa-solid fa-pen-to-square text-primary"></i>
              </td>
            </tr>
          ))}

                </tbody>
            </table>
        </>
    );
}