class Founder < ApplicationRecord
  belongs_to :companies, class_name: "Company"
end
