class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :capacity, :rating
end 
