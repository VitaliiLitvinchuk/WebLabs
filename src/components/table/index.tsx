import classNames from "classnames";
import "./style.css";
import { ISkipTrace } from "./types";

const people: ISkipTrace[] = [];

const addToPeople = () => {
    people.push({
        name: "Barry Parker",
        confirmedHomeOwner: true,
        mobilePhone: "(224) 614-9985",
        homePhone: "(588) 900-2137",
        email: "bparker@example.com",
        language: "English",
        race: null,
        validPhone: Math.random() > 0.5
    });
    people.push({
        name: "Dominic Toretto",
        confirmedHomeOwner: false,
        mobilePhone: "(367) 602-7186",
        homePhone: "(979) 307-9402",
        email: "pireco@luporob.io",
        language: "English",
        race: null,
        validPhone: Math.random() > 0.5
    });
}

export const Lab5Table = () => {
    addToPeople();
    addToPeople();
    addToPeople();
    return (
        <div className="cust-container">
            <div className="func-icons">
                <i className="fa fa-close text-light-gray icon-close"></i>
            </div>
            <div className="table-content">
                <h2><b>Skiptrace Detail</b></h2>
                <div className="func-icons">
                    <div className="centered-icons">
                        <i className="fa fa-2x fa-check-square table-icon"></i>
                        <span className="text-light-gray">Show / Hide Rows</span>
                    </div>
                    <div className="centered-icons">
                        <i className="fa fa-2x fa-share-square table-icon"></i>
                        <span className="text-light-gray">Export</span>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th className="text-light-gray">Name</th>
                            <th className="text-light-gray">Conf. Home <br /> Owner</th>
                            <th className="text-light-gray">Mobile Phone</th>
                            <th className="text-light-gray">Home Phone</th>
                            <th className="text-light-gray">Email Address</th>
                            <th className="text-light-gray">Language</th>
                            <th className="text-light-gray">Race</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            people.map(val =>
                                <tr>
                                    <td>{val.name}</td>
                                    <td>{val.confirmedHomeOwner ? "Yes" : "No"}</td>
                                    <td className={classNames(val.validPhone && "text-red")}>{val.mobilePhone}</td>
                                    <td>{val.homePhone} &#160;<i className="fa fa-plus table-icon"></i></td>
                                    <td>{val.email} &#160;<i className="fa fa-plus table-icon"></i></td>
                                    <td>{val.language}</td>
                                    <td>{val.race || "Unknown"}</td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Lab5Table;