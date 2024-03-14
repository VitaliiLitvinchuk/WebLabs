import classNames from "classnames";
import { useRef, useState } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
import { people } from "../table";

export const Lab6Table = () => {
    const [showTableRows, SetShowTableRows] = useState<boolean>(true);
    const [showContent, SetShowContent] = useState<boolean>(true);

    const tableRef = useRef<HTMLTableElement>(null);

    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: 'Skiptrace Detail',
        sheet: 'Detail'
    });

    return (
        <div className="flex overflow-auto text-center flex-col bg-white mx-[10%] mt-[100px] rounded-[10px] shadow-[10px_10px_50px_black]">
            <div className="flex justify-end gap-[20px]" onClick={() => SetShowContent(!showContent)}>
                <i className="fa fa-close text-slate-500 m-[20px] cursor-pointer" ></i>
            </div>
            <div className={classNames("p-[0_40px_40px_40px]", !showContent && "hidden")}>
                <h2 className="text-[32px]"><b>Skiptrace Detail</b></h2>
                <div className="flex justify-end gap-[20px]">
                    <div className="flex cursor-pointer" onClick={() => SetShowTableRows(!showTableRows)}>
                        <i className={classNames("fa fa-2x", showTableRows ? "text-lime-500 fa-check-square" : "text-red-500 fa-close")}></i>
                        <span className="text-slate-500 m-[auto_10px]">Show / Hide Rows</span>
                    </div>
                    <div className="flex cursor-pointer" onClick={onDownload}>
                        <i className="fa fa-2x fa-share-square text-lime-500"></i>
                        <span className="text-slate-500 m-[auto_10px]">Export</span>
                    </div>
                </div>
                <div className="overflow-auto">
                    <table className="mt-[20px] w-[100%] min-w-[900px] text-nowrap text-left font-medium" ref={tableRef}>
                        <thead>
                            <tr className="text-slate-500 border-b-2 border-solid border-gray-300">
                                <th className="pl-[10px]">Name</th>
                                <th className="pl-[10px]">Conf. Home <br /> Owner</th>
                                <th className="pl-[10px]">Mobile Phone</th>
                                <th className="pl-[10px]">Home Phone</th>
                                <th className="pl-[10px]">Email Address</th>
                                <th className="pl-[10px]">Language</th>
                                <th className="pl-[10px]">Race</th>
                            </tr>
                        </thead>
                        {
                            showTableRows &&
                            <tbody>
                                {
                                    people.map(val =>
                                        <tr className="hover:bg-gray-300 even:bg-slate-100 border-b-2 border-solid border-gray-300">
                                            <td className="p-[10px]">{val.name}</td>
                                            <td className="p-[10px]">{val.confirmedHomeOwner ? "Yes" : "No"}</td>
                                            <td className={classNames("p-[10px]", val.validPhone && "text-red")}>{val.mobilePhone}</td>
                                            <td className="text-slate-500 p-[10px]">{val.homePhone} &#160;<i className="fa fa-plus text-lime-500"></i></td>
                                            <td className="text-slate-500 p-[10px]">{val.email} &#160;<i className="fa fa-plus text-lime-500"></i></td>
                                            <td className="p-[10px]">{val.language}</td>
                                            <td className="p-[10px]">{val.race || "Unknown"}</td>
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

export default Lab6Table;