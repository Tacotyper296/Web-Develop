class Pet
    attr_reader :color, :breed
    attr_accessor :name
    def initialize(color,breed)
        @color = color
        @breed = breed
        @hungry = true
    end

    def feed(food)
        puts "Mmmm, " + food + "!"
        @hungry = false
    end

    def hungry?
        if @hungry
            puts "I'm hungry!"
        else
            puts "I'm full"
        end
        @hungry
    end
end

class Cat < Pet
    def speak
        puts "Meow!"
    end
end

class Dog < Pet
    def speak
        puts "Woof!"
    end
end

kitty = Cat.new("grey", "Persian")
puts "Let's inspect our new cat:"
puts kitty.inspect
puts "What class does our new cat belong to?"
puts kitty.class
puts "Is our new cat an object?"
puts kitty.is_a?(Object)
puts "What color is our cat?"
puts kitty.color
puts "Let's give our new cat a name"
kitty.name = "Betsy"
puts kitty.name
puts "Is our cat hungry now?"
kitty.hungry?
puts "Let's feed our cat"
kitty.feed("tuna")
puts "Is our cat hungry now?"
kitty.hungry?
puts "Our cat can make noise"
kitty.speak

puppy = Dog.new("black", "Stafforshire Terrier")
puts "Let's inspect our new dog:"
puts puppy.inspect
puts "What class does our new dog belongs to?"
puts puppy.class
puts "Is our new dog an object?"
puts puppy.is_a?(Object)
puts "What color is our new dog?"
puts puppy.color
puts "Let's give our new dog a name"
puppy.name = "Rex"
puts puppy.name
puts "Is our new dog hungry now?"
puppy.hungry?
puts "Let's feed our dog"
puppy.feed("beef")
puts "Is our dog hungry now?"
puppy.hungry?
puts "Our dog can make noise"
puppy.speak
puts "What breed is our new dog?"
puts puppy.breed