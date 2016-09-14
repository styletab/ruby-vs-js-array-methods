# Lab: Fibonacci Calculations
#
# Alternating between Ruby and JavaScript, write scripts, in bin/fibonacci.rb
# and bin/fibonacci.js, that:
#


fibs = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

# sum of all the elements of the fibs array

sum_fibs = fibs.reduce(0) { |sum, fib| sum + fib }
puts "The sume of the first ten fibonacci numbers is #{sum_fibs}"

sum_fibs = fibs.reduce(0,:+)
puts "The sume of the first ten fibonacci numbers is #{sum_fibs}"

# product of all fibs  (excluding zero)
#My answer:

product_fibs = fibs[1..-1].reduce(1, :*)
puts "The product of the first ten fibonacci numbers is #{product_fibs}"

#Jeff's answer:

product_fibs = fibs.reject(&:zero?).reduce(:*)


# calculates the sum of the odd elements of fibs
# My answer:

odd_sum_fibs = fibs.reduce(i,:+)

# Jeff's answer
sum_odd = fibs.select(&:odd?).reduce(:+)

# calculates the product of the even elements of fibs(excluding zero).

#Jeff's answer
prod_even = fibs.reject(&:zero?).select(&:even?).reduce(:*)
