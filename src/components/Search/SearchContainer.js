import React from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import { searchAPI } from '../../helpers/apiRequest'

export const SearchContainer = () => {

  const handleOnChange = async (e) => {
    console.log(e.target.value)
    const data = await searchAPI.get(e.target.value)
    console.log(data)
  }

  return (
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleOnChange} />
      <Button variant="outline-success">Search</Button>
    </Form>
  )
}
