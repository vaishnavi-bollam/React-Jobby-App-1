import {BsSearch} from 'react-icons/bs'

const FiltersGroup = props => {
  const renderEmploymentType = () => {
    const {employmentTypesList, changeEmployee} = props
    // console.log(employmentTypesList)

    return employmentTypesList.map(eachEmployeeType => {
      const onClickEmployItem = () =>
        changeEmployee(eachEmployeeType.employmentTypeId)

      return (
        <li key={eachEmployeeType.employmentTypeId} onClick={onClickEmployItem}>
          <p>{eachEmployeeType.employmentTypeId}</p>
        </li>
      )
    })
  }

  const renderSalaryRange = () => {
    const {salaryRangesList, changeSalary} = props
    console.log(salaryRangesList)

    return salaryRangesList.map(eachSalaryType => {
      const onClickSalaryType = () => changeSalary(eachSalaryType.salaryRangeId)

      return (
        <li key={eachSalaryType.salaryRangeId} onClick={onClickSalaryType}>
          <p>{eachSalaryType.label}</p>
        </li>
      )
    })
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    event.preventDefault()
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearchInput = () => {
    const {searchInput} = props
    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  return (
    <div>
      <ul>{renderSearchInput()}</ul>
      <h1>Type of Employement</h1>

      <ul>{renderEmploymentType()}</ul>
      <h1>Salary Range</h1>
      <ul>{renderSalaryRange()}</ul>
    </div>
  )
}

export default FiltersGroup
