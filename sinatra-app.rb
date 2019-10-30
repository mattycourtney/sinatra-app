require 'sinatra'
require 'json'

set :server, :thin
connections = []

get '/' do
  erb :index
end

post '/post' do
  connections.each { |out| out << "data: #{params.to_json}\n\n" unless out.closed? }
  204
end

get '/stream', provides: 'text/event-stream' do
  stream(:keep_open) do |out|
    connections << out
    out.callback { connections.delete(out) }
  end
end