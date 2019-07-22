class Company < ApplicationRecord
  validates_presence_of :name, :city, :state, :description
  has_many :founders
end
