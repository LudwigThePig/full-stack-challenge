class AddCompanyReferenceToFounders < ActiveRecord::Migration[5.2]
  def change
    add_reference :founders, :companies, foreign_key: true
  end
end
