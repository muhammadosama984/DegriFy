import { IDegreeDetails } from "../../../store/types/types";

const UnverifiedDegreesColumn = () => {

    const unverifiedDegreesColumn = [
        {
            name: "ERP ID",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.studentID ?? "N/A",
        },
        {
            name: "Name",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.name ?? "N/A",
        },
        {
            name: "CNIC",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.CNIC ?? "N/A",
        },
        {
            name: "Program",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.Program ?? "N/A",
        },
        {
            name: "Date of Birth",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.DateOfBirth ? new Date(row?.studentDetails?.DateOfBirth).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Date of Admission",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.DateOfAdmission ? new Date(row?.studentDetails?.DateOfAdmission).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Date of Completion",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.DateOfompletion ? new Date(row?.studentDetails?.DateOfompletion).toLocaleDateString('en-GB', { day: 'numeric', month: "numeric", year: 'numeric' }).replaceAll('\/', '-')
                : "N/A",
        },
        {
            name: "Total Credit Hours",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.TotalCreditHours ?? "N/A",
        },
        {
            name: "CGPA",
            wrap: true,
            minWidth: "50px",
            sortable: true,
            selector: (row: IDegreeDetails) => row?.studentDetails?.CGPA ?? "N/A",
        },
        {
            name: "Status",
            wrap: true,
            minWidth: "100px",
            sortable: true,
            cell: (row: IDegreeDetails) => {
                if (row?.degree?.HECVerified) {
                    return (
                        <div
                            className={`h-6 w-22 flex bg-green-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Verified
                        </div>
                    );
                }
                else {
                    return (
                        <div
                            className={`h-6 w-22 flex bg-red-600 items-center justify-center rounded-full px-3 py-0.5 text-sm font-medium text-gray-900">`}
                        >
                            Unverified
                        </div>

                    );
                }
            },
        },
    ];
    return unverifiedDegreesColumn;
};

export default UnverifiedDegreesColumn;
