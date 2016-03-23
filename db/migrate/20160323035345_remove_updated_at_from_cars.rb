class RemoveUpdatedAtFromCars < ActiveRecord::Migration
  def change
    remove_column :cars, :updated_at
  end
end
