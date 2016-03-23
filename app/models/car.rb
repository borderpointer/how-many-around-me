class Car < ActiveRecord::Base

  # # Prevent modification of existing records
  # def readonly?
  #   !new_record?
  # end

  # # Prevent objects from being destroyed
  # def before_destroy
  #   raise ActiveRecord::ReadOnlyRecord
  # end

end