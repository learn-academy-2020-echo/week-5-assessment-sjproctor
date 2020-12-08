# ASSESSMENT 5: Ruby Coding Practical Questions

# --------------------1) Create a class called Bike that is initialized with a model, wheels, and a frame size. The default number of wheels is 2. Create a get_info method that returns a sentence with all the data about each bike object.

class Bike

  attr_accessor :model, :wheels, :frame_size, :ring_bell, :speed

  def initialize banana, frame_size, wheels=2
    @model = banana
    @wheels = wheels
    @frame_size = frame_size
    @ring_bell = 'Ding ding'
    @speed = 0
  end

  # We don't need this because of the attr_accessor
  # def ring_bell
  #   @ring_bell
  # end

  # dynamic
  def pedal_faster increase_by
    @speed = @speed + increase_by
  end

  # hard coded increase
  # def pedal_faster
  #   @speed = @speed + 5
  # end

  def brake num
    if num > @speed
      @speed = 0
    else
      @speed -= num
    end
  end

  def get_info
    "The #{model} bike has #{wheels} wheels and a #{frame_size} frame."
  end

end

bat_bike = Bike.new 'Trek', '168cm', 3
p bat_bike.get_info

schwinn = Bike.new 'Schwinn', '170cm'
p schwinn.get_info

specialized = Bike.new 'Specialized', '160cm'
p specialized.get_info

p bat_bike.get_info
p bat_bike.ring_bell
p bat_bike.speed
bat_bike.pedal_faster 10
p bat_bike.speed
bat_bike.pedal_faster 15
p bat_bike.speed

p bat_bike.speed
bat_bike.brake 5
p bat_bike.speed
bat_bike.brake 30
p bat_bike.speed

# Expected output example: 'The Trek bike has 2 wheels and a 168cm frame.'


# -------------------2) Add a bell to the bike class and create the ability to ring the bell when the method is called.





# Expected output example: my_bike.ring_bell => 'Ding ding!'


# -------------------3) Add a speedometer to the Bike class. The speed should be initialized at 0.





# Expected output example: my_bike.speed => 0


# -------------------4) Add the ability to pedal faster. The pedal_faster method should increase the speed by a particular amount.





# Expected output example: my_bike.pedal_faster 10 => 10


# -------------------5) Add the ability to brake. The brake method should decrease the speed by a particular amount. The bike cannot go negative speeds.





# Expected output example: my_bike.brake 15 => 0
