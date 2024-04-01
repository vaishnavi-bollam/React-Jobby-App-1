import {Component} from 'react'
import Cookies from 'js-cookie'

class JobDetails extends Component {
  componentDidMount() {
    this.getJobsData()
  }

  getFormattedData = data => ({
    companyLogoUrl: data.company_logo_url,
    companyWebsiteUrl: data.company_website_url,
    employmentType: data.employment_type,
    id: data.id,
    jobDescription: data.job_description,
    description: data.life_at_company.description,
    imageUrl: data.life_at_company.image_url,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
  })

  getJobsData = async props => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData.job_details)
      const updatedData = getFormattedData(fetchedData.job_details)
    }
  }

  render() {
    return (
      <div>
        <h1>JobDetails</h1>
      </div>
    )
  }
}

export default JobDetails
