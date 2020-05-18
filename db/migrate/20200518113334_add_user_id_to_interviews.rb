class AddUserIdToInterviews < ActiveRecord::Migration[5.2]
  def change
    add_column :interviews, :user_id, :integer
    add_index :interviews, :user_id
  end
end
