require 'data_mapper'
require './app/app.rb'

task :test do
  puts "hello"
end

namespace :db do
  desc "non destructive upgrade"
  task :data_upgrade do
    DataMapper.auto_upgrade!
    puts 'Auto upgrade complete, no data lost.'
  end

  desc "destructive upgrade"
  task :data_migrate do
    DataMapper.auto_migrate!
    puts 'Auto upgrade complete, all data lost.'
  end
end
