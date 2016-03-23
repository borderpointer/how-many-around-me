class ChangeCreatedAtToRecordedAt < ActiveRecord::Migration
  def change
    rename_column :cars, :created_at, :recorded_at
  end
end
