require 'test_helper'

class FounderTest < ActiveSupport::TestCase
  
  test "should be a valid founder" do
    founder = Founder.create({founder: "George Maharis", title: "Mr. Manager", company_id: 1})
    assert founder.valid? 
  end

  test "founder with string for a company id should not be valid" do 
    founder = Founder.create({founder: "George Maharis", title: "Mr. Manager", company_id: nil})
    assert founder.invalid?
  end

  test "Should add a founder" do
    id = Company.last.id
    assert_difference("Founder.where(company_id: 1).count") do
      Founder.create({founder: "George Michael", title: "Just the Manager...", company_id: 1})    
    end
  end
end
