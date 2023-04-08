import Chart01 from "./Chart01";
import AnalyticsBox from "./AnalyticsBox";
import AnalyticsSection from "./AnalyticsSection";
import Dashboard from "./test";
import Chart02 from "./Chart02";

interface Props {
  Text: string;
}

const HeyUni = ({
  Text,
}: Props) => (
  <div>
    <div className="flex flex-row ...">

      <h1 className="font-bold text-2xl mt-6 ml-4">
        {Text} <span className="font-normal">Here's what is happening today</span>
      </h1>
    </div>
    <AnalyticsSection />
    <div className="h-screen flex">
      <div className="w-2/3 h-96 bg-gray-100 m-4 rounded-md border border-gray-300">
      <h1 className="font-bold text-lg mt-6 ml-4">ENROLLED STUDENTS</h1>   
        <Chart01  />

      </div>
      <div className="w-1/3 h-96 bg-gray-100 m-4 rounded-md border border-gray-300">
      <h1 className="font-bold text-lg mt-6 ml-4">DEGREE PROGRAMS</h1>   
        
        <Chart02 id={"Best"} />

      </div>
    </div>
    {/* <Dashboard/> */}
  </div>
)






export default HeyUni