class CreateCoffees < ActiveRecord::Migration[6.1]
  def change
    create_table :coffees do |t|
      t.string :name
      t.string :roast_time
      t.string :roast_level
      t.string :roaster_settings
      t.string :preheat
      t.string :yellowing
      t.string :browning
      t.string :first_crack
      t.string :second_crack
      t.string :first_crack_end
      t.string :end_drop
      t.string :notes
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
