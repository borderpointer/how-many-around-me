class CreateCars < ActiveRecord::Migration
  def change
    create_table :cars do |t|
      t.integer :quantity

      t.timestamps null: false
    end
  end
end
