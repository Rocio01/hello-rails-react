class V1::GreetingsController < ApplicationController
 def index
  render json: {:greeting => [
   { :title => 'Hola'}
  ]}.to_json
 end
  
end