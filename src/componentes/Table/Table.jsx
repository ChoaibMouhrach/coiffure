function Table({ headings, data }) {
    return (
        <table className="w-full">
            <thead className="bg-black text-white text-start ">
                <tr className="">
                    {headings.map((heading) => (
                        <td className="p-2 text-start">{heading}</td>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr>
                        {Object.values(row).map((value) => (
                            <td
                                className={`${
                                    index % 2 !== 0
                                        ? "bg-[rgba(0,0,0,0.1)]"
                                        : ""
                                } p-2`}
                            >
                                {value}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
