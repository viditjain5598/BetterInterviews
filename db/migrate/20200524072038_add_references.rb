class AddReferences < ActiveRecord::Migration[5.2]
  def change
    add_reference :user_interviews, :interview, foreign_key: true
    add_reference :user_interviews, :user , foreign_key: true
  end
end
