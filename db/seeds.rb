# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#


Coffee.destroy_all
User.destroy_all

@admin = User.create!(username: 'Lance', email: 'lance@mail.com', password: '123456')

puts "#{User.count} users created"

7.times do 
  Coffee.create!(
    name: Faker::Coffee.origin,
    roast_time: "#{rand(9..12)}:00",
    roast_level: 'city',
    roaster_settings: '9.9.20',
    preheat: '1 min 9 heat',
    yellowing: "#{rand(3..5)}:00",
    browning: "#{rand(5..7)}:00",
    first_crack: "#{rand(7..9)}:00",
    second_crack: "#{rand(9..11)}:00",
    first_crack_end: "#{rand(7..11)}:00",
    end_drop: "#{rand(9..12)}:00",
    notes: "fan #{rand(5..7)} at #{rand(3..5)}:00, heat to #{rand(7..9)} at #{rand(7..9)}:00",
    user: @admin)
end

puts "#{Coffee.count} coffees created"