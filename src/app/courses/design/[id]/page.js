import { fetchDesignDeets } from "@/app/lib/dbDes";

const DesignDeets = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const designDetails = await fetchDesignDeets(id);
  console.dir(designDetails);

  return (
    <div className='container'>
      <h2>{designDetails.CourseTitle}</h2>
      <p>{designDetails.CourseType}</p>
      <p>{designDetails.CourseSummary}</p>
      <p>Award: {designDetails.CourseAwardName}</p>
      <p>Ucas Code: {designDetails.UcasCode}</p>
      <p>Ucas Points: {designDetails.UcasPoints}</p>
      <p>Starting Year: {designDetails.YearOfEntry}</p>
      <p>Attendance: {designDetails.ModeOfAttendance}</p>
      <p>Length: {designDetails.StudyLength}</p>
      <p>Foundation Year: {designDetails.HasFoundationYear}</p>
      <p>Subject: {designDetails.CourseSubject}</p>
      <p>No Longer Recruiting: {designDetails.NoLongerRecruiting}</p>
    </div>
  );
};

export default DesignDeets;