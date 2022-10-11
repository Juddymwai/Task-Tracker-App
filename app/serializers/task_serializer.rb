class TaskSerializer < ActiveModel::Serializer
  attributes :id, :title, :duration, :user_id
  belongs_to :user
end
