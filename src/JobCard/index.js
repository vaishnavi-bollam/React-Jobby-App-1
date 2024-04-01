import './index.css'

const JobCard = props => {
  const {each} = props
  //   console.log(each)
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = each
  return (
    <div>
      <div className="job-card">
        <img src={companyLogoUrl} />
        <h1>{title}</h1>
        <p>{employmentType}</p>
        <p>{location}</p>
        <p>{packagePerAnnum}</p>
        <p>{rating}</p>
        <p>{jobDescription}</p>
      </div>
    </div>
  )
}

export default JobCard
