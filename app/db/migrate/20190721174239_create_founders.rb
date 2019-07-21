class CreateFounders < ActiveRecord::Migration[5.2]
  def change
    create_table :founders do |t|
      t.string :name
      t.integer :company_id
      t.string :title

      t.timestamps
    end
  end
end
