class CreateStopWords < ActiveRecord::Migration[5.1]
  def change
    create_table :stop_words do |t|
      t.string :name

      t.timestamps
    end
  end
end
