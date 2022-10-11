class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :isadmin

  has_many :tasks
end
