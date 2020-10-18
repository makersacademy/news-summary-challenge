require 'sinatra/base'
require 'httparty'

class App < Sinatra::Base

  before do 
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*'
          #  'Access-Control-Allow-Origin' => ['OPTIONS', 'GET', 'POST']
   end 

  get '/' do 
    File.read('./testRespone.json')
  end 

end 