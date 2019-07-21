class Founder < ApplicationRecord
  belongs_to :company, optional: true#, class_name: "Company"
end
