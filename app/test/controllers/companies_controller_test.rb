require 'test_helper'

class CompaniesControllerTest < ActionDispatch::IntegrationTest
  test "the truth" do
    assert true
  end

  test "should get index" do
    get companies_url
    assert_response :success
  end

  test "should create company with founded date" do
    assert_difference('Company.count') do
      post companies_url, params: {company: {
        name: "Bluth Corp", 
        city: "Orange County", 
        state: "CA", 
        founded_date: "1999-01-01", 
        description: "It's all good real estate!"
        }}
    end
  end

  test "should create company without date" do
    assert_difference('Company.count') do
      post companies_url, params: {company: {
        name: "Bluth Corp", 
        city: "Orange County", 
        state: "CA", 
        description: "It's all good real estate!"
        }}
    end
  end

  test "should show company profile" do
    get company_url(Company.last.id)
    assert status === 200
  end

  test "should make an edit" do
    put company_url(Company.last.id, {company: {name: "Frozen Banana Stand"}})
    assert_response :success
  end

  test "should destroy company..." do
    assert_difference("Company.count", -2) do
      delete company_url(Company.last.id)
      delete company_url(Company.last.id)
    end
  end

end
