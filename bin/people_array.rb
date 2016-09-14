require_relative '../lib/people.rb'

people = People.new.people

puts "Total people: #{people.count}"

female = people.select { |person| person.gender == 'f' }.count

puts "Total females: #{female}"

males = people.select { |person| person.gender == 'm' }.count

puts "Total males: #{males}"

# Count all the people who are older than you (or just pick an age).

older_peeps = people.select { |person| person.age > 25 }.count

puts "Total people older than 25: #{older_peeps}"

# Count all the people who are younger than you (or just pick an age).

younger_peeps = people.select { |person| person.age <= 25 }.count

puts "Total people older than 25: #{younger_peeps}"

# Count all the people whose first name and last name start with the
# same letter.

same_letter = people.select { |person| person.given_name.slice(0) == person.surname.slice(0) }.count

puts "Total people with same first letter in name: #{same_letter}"

# Calculate the average age of all the people.

avg_age = people.map(&:age).reduce(:+) / people.length

puts "Average age is: #{avg_age}"
