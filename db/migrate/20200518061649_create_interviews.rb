class CreateInterviews < ActiveRecord::Migration[5.2]
  def change
    create_table :interviews do |t|
      t.string :title
      t.text :description
      t.datetime :scheduled_time

      t.timestamps
    end
  end
end
