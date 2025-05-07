import { fetchComputingDeets } from "@/app/lib/dbComp";

const ComputingDeets = async ({ params }) => {
  const { id } = params;
  console.log(id);

  const computingDetails = await fetchComputingDeets(id);
  console.dir(computingDetails);

  // if (!computingDetails) {
  //   return (
  //     <div className='container'>
  //       <h2>Course not found</h2>
  //     </div>
  //   );
  // }

  return (
    <div className='container'>
      <h2>{computingDetails.CourseTitle}</h2>
      <p>{computingDetails.CourseType}</p>
      <p>{computingDetails.CourseSummary}</p>
      <p>Award: {computingDetails.CourseAwardName}</p>
      <p>Ucas Code: {computingDetails.UcasCode}</p>
      <p>Ucas Points: {computingDetails.UcasPoints}</p>
      <p>Starting Year: {computingDetails.YearOfEntry}</p>
      <p>Attendance: {computingDetails.ModeOfAttendance}</p>
      <p>Length: {computingDetails.StudyLength}</p>
      <p>Foundation Year: {computingDetails.HasFoundationYear}</p>
      <p>Subject: {computingDetails.CourseSubject}</p>
      <p>No Longer Recruiting: {computingDetails.NoLongerRecruiting}</p>
    </div>
  );
};

export default ComputingDeets;
