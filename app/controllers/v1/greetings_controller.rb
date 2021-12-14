class V1::GreetingsController < ApplicationController
 def index
  render json: {:greeting => [
   { :information => 'Hola'}
  ]}.to_json
 end
  
end