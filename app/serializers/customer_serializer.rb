class CustomerSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :priorities
end
