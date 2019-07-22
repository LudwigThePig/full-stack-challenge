require 'test_helper'

class CompanyTest < ActiveSupport::TestCase
  
  test "company without date should be valid" do
    company = Company.create({
      name: "Bluth Corp", 
      city: "Orange County", 
      state: "CA", 
      description: "It's all good real estate!"
    })
    assert company.valid?
  end

  test "company without name should not be valid" do
    company = Company.create({
      city: "Orange County", 
      state: "CA", 
      description: "It's all good real estate!"
    })
    assert company.invalid?
  end

  test "should get last company" do 
    new_company = Company.create({
      name: "Frozen Banana Stand", 
      city: "Venice", 
      state: "CA", 
      description: "It's all good real estate!"
    })
    last_company = Company.last
    assert new_company == last_company
    assert last_company.name == "Frozen Banana Stand"
    assert last_company.city == "Venice"
    assert last_company.state == "CA"
  end

end
