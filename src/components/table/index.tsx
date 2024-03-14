import classNames from "classnames";
import "./style.css";
import { ISkipTrace } from "./types";
import { useRef, useState } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";

export const people: ISkipTrace[] = [];

const addToPeople = () => {
    people.push({
        name: "Peter Parker",
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

addToPeople();
addToPeople();
addToPeople();

export const Lab5Table = () => {
    const [showTableRows, SetShowTableRows] = useState<boolean>(true);
    const [showContent, SetShowContent] = useState<boolean>(true);

    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Skiptrace Detail',
        sheet: 'Detail'
    });

    return (
        <div className="cust-container">
            <div className="func-icons" onClick={() => SetShowContent(!showContent)}>
                <i className="fa fa-close text-light-gray icon-close clickable" ></i>
            </div>
            <div className={classNames("table-content", !showContent && "display-none")}>
                <h2 style={{ fontSize: "32px" }}><b>Skiptrace Detail</b></h2>
                <div className="func-icons">
                    <div className="centered-icons clickable" onClick={() => SetShowTableRows(!showTableRows)}>
                        <i className={classNames("fa fa-2x", showTableRows ? "table-icon fa-check-square" : "text-red fa-close")}></i>
                        <span className="text-light-gray">Show / Hide Rows</span>
                    </div>
                    <div className="centered-icons clickable" onClick={onDownload}>
                        <i className="fa fa-2x fa-share-square table-icon"></i>
                        <span className="text-light-gray">Export</span>
                    </div>
                </div>
                <div className="ow-auto">
                    <table ref={tableRef}>
                        <thead>
                            <tr className="text-light-gray">
                                <th>Name</th>
                                <th>Conf. Home <br /> Owner</th>
                                <th>Mobile Phone</th>
                                <th>Home Phone</th>
                                <th>Email Address</th>
                                <th>Language</th>
                                <th>Race</th>
                            </tr>
                        </thead>
                        {
                            showTableRows &&
                            <tbody>
                                {
                                    people.map(val =>
                                        <tr>
                                            <td>{val.name}</td>
                                            <td>{val.confirmedHomeOwner ? "Yes" : "No"}</td>
                                            <td className={classNames(val.validPhone && "text-red")}>{val.mobilePhone}</td>
                                            <td className="text-light-gray">{val.homePhone} &#160;<i className="fa fa-plus table-icon"></i></td>
                                            <td className="text-light-gray">{val.email} &#160;<i className="fa fa-plus table-icon"></i></td>
                                            <td>{val.language}</td>
                                            <td>{val.race || "Unknown"}</td>
                                        </tr>)
                                }
                            </tbody>
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Lab5Table;