class V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.order(Arel.sql('RANDOM()')).first
    render json: @greetings
  end
end
