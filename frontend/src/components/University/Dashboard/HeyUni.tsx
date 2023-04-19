import Chart01 from "./Chart01";
import AnalyticsBox from "./AnalyticsBox";
import AnalyticsSection from "./AnalyticsSection";
import Chart02 from "./Chart02";
import EditShortcut from "./EditShortcut";
import HeadingWithSpan from "../../general/HeadingWithSpan";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { UnverifiedDegreesComp } from "./UnverifiedDegreesComp";
import { useEffect } from "react";
import { GetAllDegreesbyUniId, GetCountDegreeByYears, GetUnverifiedDegreesbyUniId, GetVerifiedDegreesbyUniId } from "../../../store/actions/degreeActions";


const HeyUni = () => {

  const { userInfo } = useSelector((state: any) => state.auth)

  const dispatch = useDispatch<AppDispatch>();

  const organisation_id = userInfo?.user?.organisationID ?? '';

  useEffect(() => {
    getDegrees();
    getDegreeByYear();
  }, [])

  const getDegrees = async () => {
    await dispatch(GetAllDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetVerifiedDegreesbyUniId({ organisation_id: organisation_id }))
    await dispatch(GetUnverifiedDegreesbyUniId({ organisation_id: organisation_id }))
  }

  const getDegreeByYear = async () => {
    await dispatch(GetCountDegreeByYears({}))
  }


  return (
    <div>
      {/* <div className="flex flex-row ...">
      <h1 className="font-bold text-2xl mt-6 ml-4">
        {Text} <span className="font-normal">Here's what is happening today</span>
      </h1>
    </div> */}
      <HeadingWithSpan Text={userInfo?.user?.name + " -"} SpanText={"Here's what is happening today"} marginTop={"6"} />
      <AnalyticsSection />
      <div className="h-100 flex" >
        <div className="w-2/3 h-100 bg-white m-4 border shadow-md">
          <h1 className="font-bold text-lg mt-6 ml-4">ENROLLED STUDENTS</h1>
          <Chart01 />

        </div>
        <div className="w-1/3 h-100 bg-white m-4 border shadow-md">
          <h1 className="font-bold text-lg mt-6 ml-4">DEGREE PROGRAMS</h1>

          <Chart02 id={"Best"} />

        </div>
      </div>
      <div className="h-100 flex">
        <div className="w-2/3 h-96 bg-white m-4 shadow-md border overflow-hidden hover:overflow-y-auto">
          <div className="flex justify-between items-center sm:py-8 sm:px-4">
            <h3 className="text-lg font-bold leading-none text-gray-900 dark:text-white">
              Verify Degrees
            </h3>
            <a href="/unverified/degrees" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
              View all
            </a>
          </div>
          {/* <h1 className="font-bold text-lg mt-6 ml-4">Edhi All Students Chart daal idher</h1> */}

          {/* <AllDegreesTable search='' /> */}
          <UnverifiedDegreesComp />
          {/* <UnverifiedDegreesTable search={""}/> */}

        </div>

        <div className="w-1/3 h-96 bg-white m-4 shadow-md border overflow-hidden hover:overflow-y-auto">
          {/* <h1 className="font-bold text-lg mt-6 ml-4">Edit Degree Requests</h1> */}
          <EditShortcut />
        </div>

      </div>
      {/* <Dashboard/> */}
    </div>
  )
}






export default HeyUni