class Founder < ApplicationRecord
  validates_presence_of :founder, :title, :company_id

  belongs_to :company, optional: true#, class_name: "Company"
end
