class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.date :founded_date
      t.string :name
      t.string :city
      t.string :state
      t.string :description
      t.integer :founders_id

      t.timestamps
    end
  end
end
