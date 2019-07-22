require 'test_helper'

class FoundersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @founder = founders(:one)
  end

  test "should create founder" do
    assert_difference('Founder.count') do
      post founders_url, params: { founder: { founder: "Flounder", title: "fish", company_id: 1 } }
    end

    assert status === 200
  end

  test "should destroy founder" do
    assert_difference('Founder.count', -1) do
      delete founder_url(Founder.last)
    end

  end
end
